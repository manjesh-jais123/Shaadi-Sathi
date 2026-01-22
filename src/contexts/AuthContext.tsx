import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export type UserRole = "USER" | "VENDOR" | "ADMIN";

interface User {
  id: string;
  phone: string;
  name?: string;
  email?: string;
  role: UserRole;
  isVerified: boolean;
}

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  login: (phone: string, otp: string) => Promise<boolean>;
  sendOTP: (phone: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (data: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Map database role to app role
const mapDbRoleToAppRole = (dbRole: string | null): UserRole => {
  switch (dbRole) {
    case "admin":
      return "ADMIN";
    case "vendor":
      return "VENDOR";
    case "user":
    default:
      return "USER";
  }
};

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserData = async (userId: string, phone: string): Promise<User | null> => {
    try {
      // Fetch user role from user_roles table (security best practice)
      const { data: roleData } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId)
        .single();

      // Fetch profile data
      const { data: profile } = await supabase
        .from("profiles")
        .select("*")
        .eq("user_id", userId)
        .single();

      const role = mapDbRoleToAppRole(roleData?.role || null);

      return {
        id: userId,
        phone: phone,
        name: profile?.full_name || undefined,
        email: undefined,
        role: role,
        isVerified: true,
      };
    } catch (error) {
      console.error("Error fetching user data:", error);
      return null;
    }
  };

  useEffect(() => {
    let mounted = true;

    // Set up auth state listener FIRST
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (!mounted) return;

      if (event === "SIGNED_OUT" || !session?.user) {
        setUser(null);
        setIsLoading(false);
        return;
      }

      if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
        const userData = await fetchUserData(
          session.user.id,
          session.user.phone || ""
        );
        if (mounted) {
          setUser(userData);
          setIsLoading(false);
        }
      }
    });

    // Then check for existing session
    const checkSession = async () => {
      try {
        const { data: { session } } = await supabase.auth.getSession();
        if (!mounted) return;

        if (session?.user) {
          const userData = await fetchUserData(
            session.user.id,
            session.user.phone || ""
          );
          if (mounted) {
            setUser(userData);
          }
        }
      } catch (error) {
        console.error("Session check error:", error);
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    checkSession();

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const sendOTP = async (phone: string): Promise<boolean> => {
    try {
      const { error } = await supabase.auth.signInWithOtp({
        phone: phone,
      });
      if (error) {
        console.error("Send OTP error:", error);
        return false;
      }
      return true;
    } catch (error) {
      console.error("Send OTP error:", error);
      return false;
    }
  };

  const login = async (phone: string, otp: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase.auth.verifyOtp({
        phone: phone,
        token: otp,
        type: "sms",
      });
      
      if (error) {
        console.error("Login error:", error);
        return false;
      }

      return !!data.session;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const updateUser = (data: Partial<User>) => {
    if (user) {
      setUser({ ...user, ...data });
    }
  };

  return (
    <AuthContext.Provider value={{ user, isLoading, login, sendOTP, logout, updateUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
