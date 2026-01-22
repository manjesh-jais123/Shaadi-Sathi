import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Shield, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { toast } from "sonner";

type AuthStep = "phone" | "otp";

export default function OTPAuth() {
  const navigate = useNavigate();
  const { sendOTP, login, user } = useAuth();
  
  const [step, setStep] = useState<AuthStep>("phone");
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [otpSent, setOtpSent] = useState(false);

  // Redirect if already logged in
  if (user) {
    if (user.role === "ADMIN") {
      navigate("/admin");
    } else if (user.role === "VENDOR") {
      navigate("/vendor/dashboard");
    } else {
      navigate("/dashboard");
    }
    return null;
  }

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digit characters
    const digits = value.replace(/\D/g, "");
    // Limit to 10 digits
    return digits.slice(0, 10);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhoneNumber(e.target.value));
  };

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (phone.length !== 10) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    setIsLoading(true);
    
    try {
      // Format phone with country code for Supabase
      const formattedPhone = `+91${phone}`;
      const success = await sendOTP(formattedPhone);
      
      if (success) {
        setOtpSent(true);
        setStep("otp");
        toast.success("OTP sent successfully!");
      } else {
        toast.error("Failed to send OTP. Please try again.");
      }
    } catch (error) {
      console.error("Send OTP error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }

    setIsLoading(true);
    
    try {
      const formattedPhone = `+91${phone}`;
      const success = await login(formattedPhone, otp);
      
      if (success) {
        toast.success("Login successful!");
        // Navigation will happen automatically via AuthContext
      } else {
        toast.error("Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Verify OTP error:", error);
      toast.error("Verification failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendOTP = async () => {
    setIsLoading(true);
    try {
      const formattedPhone = `+91${phone}`;
      const success = await sendOTP(formattedPhone);
      if (success) {
        toast.success("OTP resent successfully!");
      } else {
        toast.error("Failed to resend OTP");
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditPhone = () => {
    setStep("phone");
    setOtp("");
    setOtpSent(false);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="border-2 shadow-xl">
          <CardHeader className="text-center space-y-2">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <CardTitle className="text-2xl font-bold">
              {step === "phone" ? "Welcome to ShaadiSave" : "Verify OTP"}
            </CardTitle>
            <CardDescription className="text-base">
              {step === "phone" 
                ? "Enter your mobile number to login or create an account"
                : `Enter the 6-digit OTP sent to +91 ${phone}`
              }
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            {step === "phone" ? (
              <form onSubmit={handleSendOTP} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Mobile Number
                  </Label>
                  <div className="relative">
                    <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-muted-foreground">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm font-medium">+91</span>
                    </div>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter 10-digit number"
                      value={phone}
                      onChange={handlePhoneChange}
                      className="pl-20 h-12 text-lg"
                      maxLength={10}
                      disabled={isLoading}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    We'll send you a one-time password to verify
                  </p>
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-semibold"
                  disabled={phone.length !== 10 || isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending OTP...
                    </>
                  ) : (
                    <>
                      Get OTP
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            ) : (
              <form onSubmit={handleVerifyOTP} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="otp" className="text-sm font-medium">
                    Enter OTP
                  </Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    className="h-12 text-lg text-center tracking-[0.5em] font-mono"
                    maxLength={6}
                    disabled={isLoading}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full h-12 text-base font-semibold"
                  disabled={otp.length !== 6 || isLoading}
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      Verify & Login
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>

                <div className="flex items-center justify-between text-sm">
                  <button
                    type="button"
                    onClick={handleEditPhone}
                    className="text-primary hover:underline font-medium"
                    disabled={isLoading}
                  >
                    Change Number
                  </button>
                  <button
                    type="button"
                    onClick={handleResendOTP}
                    className="text-primary hover:underline font-medium"
                    disabled={isLoading}
                  >
                    Resend OTP
                  </button>
                </div>
              </form>
            )}

            <div className="mt-8 pt-6 border-t text-center">
              <p className="text-sm text-muted-foreground">
                By continuing, you agree to our{" "}
                <a href="#" className="text-primary hover:underline">Terms of Service</a>
                {" "}and{" "}
                <a href="#" className="text-primary hover:underline">Privacy Policy</a>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Role info cards */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center p-4 rounded-lg bg-card border"
          >
            <div className="text-2xl mb-2">👤</div>
            <p className="text-xs font-medium">Users</p>
            <p className="text-xs text-muted-foreground">Book services</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center p-4 rounded-lg bg-card border"
          >
            <div className="text-2xl mb-2">🏪</div>
            <p className="text-xs font-medium">Vendors</p>
            <p className="text-xs text-muted-foreground">Offer services</p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center p-4 rounded-lg bg-card border"
          >
            <div className="text-2xl mb-2">⚙️</div>
            <p className="text-xs font-medium">Admin</p>
            <p className="text-xs text-muted-foreground">Manage platform</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
