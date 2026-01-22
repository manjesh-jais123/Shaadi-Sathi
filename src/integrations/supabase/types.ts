export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.5"
  }
  public: {
    Tables: {
      audit_logs: {
        Row: {
          action: string
          created_at: string
          entity_id: string | null
          entity_type: string
          id: string
          ip_address: string | null
          new_value: Json | null
          old_value: Json | null
          user_agent: string | null
          user_id: string | null
        }
        Insert: {
          action: string
          created_at?: string
          entity_id?: string | null
          entity_type: string
          id?: string
          ip_address?: string | null
          new_value?: Json | null
          old_value?: Json | null
          user_agent?: string | null
          user_id?: string | null
        }
        Update: {
          action?: string
          created_at?: string
          entity_id?: string | null
          entity_type?: string
          id?: string
          ip_address?: string | null
          new_value?: Json | null
          old_value?: Json | null
          user_agent?: string | null
          user_id?: string | null
        }
        Relationships: []
      }
      bookings: {
        Row: {
          admin_notes: string | null
          advance_amount: number | null
          advance_percentage: number | null
          city: string | null
          created_at: string
          end_time: string | null
          event_date: string
          event_date_to: string | null
          event_type: string
          guest_count: number | null
          id: string
          invoice_generated_at: string | null
          invoice_number: string | null
          paid_at: string | null
          payment_intent_id: string | null
          payment_status: string | null
          pin_code: string | null
          remaining_amount: number | null
          service_id: string
          special_requests: string | null
          start_time: string | null
          status: string
          total_amount: number | null
          updated_at: string
          user_id: string
          venue_address: string | null
        }
        Insert: {
          admin_notes?: string | null
          advance_amount?: number | null
          advance_percentage?: number | null
          city?: string | null
          created_at?: string
          end_time?: string | null
          event_date: string
          event_date_to?: string | null
          event_type: string
          guest_count?: number | null
          id?: string
          invoice_generated_at?: string | null
          invoice_number?: string | null
          paid_at?: string | null
          payment_intent_id?: string | null
          payment_status?: string | null
          pin_code?: string | null
          remaining_amount?: number | null
          service_id: string
          special_requests?: string | null
          start_time?: string | null
          status?: string
          total_amount?: number | null
          updated_at?: string
          user_id: string
          venue_address?: string | null
        }
        Update: {
          admin_notes?: string | null
          advance_amount?: number | null
          advance_percentage?: number | null
          city?: string | null
          created_at?: string
          end_time?: string | null
          event_date?: string
          event_date_to?: string | null
          event_type?: string
          guest_count?: number | null
          id?: string
          invoice_generated_at?: string | null
          invoice_number?: string | null
          paid_at?: string | null
          payment_intent_id?: string | null
          payment_status?: string | null
          pin_code?: string | null
          remaining_amount?: number | null
          service_id?: string
          special_requests?: string | null
          start_time?: string | null
          status?: string
          total_amount?: number | null
          updated_at?: string
          user_id?: string
          venue_address?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bookings_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      cart_items: {
        Row: {
          city: string | null
          created_at: string
          event_date: string
          event_type: string
          guest_count: number | null
          id: string
          service_id: string
          special_requests: string | null
          updated_at: string
          user_id: string
          venue_address: string | null
        }
        Insert: {
          city?: string | null
          created_at?: string
          event_date: string
          event_type: string
          guest_count?: number | null
          id?: string
          service_id: string
          special_requests?: string | null
          updated_at?: string
          user_id: string
          venue_address?: string | null
        }
        Update: {
          city?: string | null
          created_at?: string
          event_date?: string
          event_type?: string
          guest_count?: number | null
          id?: string
          service_id?: string
          special_requests?: string | null
          updated_at?: string
          user_id?: string
          venue_address?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "cart_items_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      cloth_rental_bookings: {
        Row: {
          cloth_rental_id: string
          created_at: string
          delivery_address: string
          deposit_amount: number
          id: string
          payment_status: string | null
          phone: string
          rental_amount: number
          rental_end_date: string
          rental_start_date: string
          selected_size: string
          status: string
          total_amount: number
          total_days: number
          updated_at: string
          user_id: string
        }
        Insert: {
          cloth_rental_id: string
          created_at?: string
          delivery_address: string
          deposit_amount: number
          id?: string
          payment_status?: string | null
          phone: string
          rental_amount: number
          rental_end_date: string
          rental_start_date: string
          selected_size: string
          status?: string
          total_amount: number
          total_days: number
          updated_at?: string
          user_id: string
        }
        Update: {
          cloth_rental_id?: string
          created_at?: string
          delivery_address?: string
          deposit_amount?: number
          id?: string
          payment_status?: string | null
          phone?: string
          rental_amount?: number
          rental_end_date?: string
          rental_start_date?: string
          selected_size?: string
          status?: string
          total_amount?: number
          total_days?: number
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "cloth_rental_bookings_cloth_rental_id_fkey"
            columns: ["cloth_rental_id"]
            isOneToOne: false
            referencedRelation: "cloth_rentals"
            referencedColumns: ["id"]
          },
        ]
      }
      cloth_rentals: {
        Row: {
          category: string
          cloth_type: string
          color: string[] | null
          created_at: string
          deposit_amount: number
          description: string | null
          id: string
          images: string[] | null
          is_available: boolean | null
          location: string
          name: string
          rating: number | null
          rental_price_per_day: number
          reviews_count: number | null
          size: string[] | null
          updated_at: string
          vendor_id: string
        }
        Insert: {
          category: string
          cloth_type: string
          color?: string[] | null
          created_at?: string
          deposit_amount: number
          description?: string | null
          id?: string
          images?: string[] | null
          is_available?: boolean | null
          location: string
          name: string
          rating?: number | null
          rental_price_per_day: number
          reviews_count?: number | null
          size?: string[] | null
          updated_at?: string
          vendor_id: string
        }
        Update: {
          category?: string
          cloth_type?: string
          color?: string[] | null
          created_at?: string
          deposit_amount?: number
          description?: string | null
          id?: string
          images?: string[] | null
          is_available?: boolean | null
          location?: string
          name?: string
          rating?: number | null
          rental_price_per_day?: number
          reviews_count?: number | null
          size?: string[] | null
          updated_at?: string
          vendor_id?: string
        }
        Relationships: []
      }
      delivery_partners: {
        Row: {
          aadhaar_number: string | null
          bank_account_number: string | null
          bank_ifsc: string | null
          bank_name: string | null
          city: string
          created_at: string
          district: string | null
          email: string | null
          full_address: string
          full_name: string
          id: string
          is_active: boolean | null
          is_verified: boolean | null
          phone: string
          pin_code: string
          profile_image: string | null
          rating: number | null
          state: string
          total_deliveries: number | null
          updated_at: string
          user_id: string
          vehicle_number: string | null
          vehicle_type: string | null
          village: string | null
        }
        Insert: {
          aadhaar_number?: string | null
          bank_account_number?: string | null
          bank_ifsc?: string | null
          bank_name?: string | null
          city: string
          created_at?: string
          district?: string | null
          email?: string | null
          full_address: string
          full_name: string
          id?: string
          is_active?: boolean | null
          is_verified?: boolean | null
          phone: string
          pin_code: string
          profile_image?: string | null
          rating?: number | null
          state: string
          total_deliveries?: number | null
          updated_at?: string
          user_id: string
          vehicle_number?: string | null
          vehicle_type?: string | null
          village?: string | null
        }
        Update: {
          aadhaar_number?: string | null
          bank_account_number?: string | null
          bank_ifsc?: string | null
          bank_name?: string | null
          city?: string
          created_at?: string
          district?: string | null
          email?: string | null
          full_address?: string
          full_name?: string
          id?: string
          is_active?: boolean | null
          is_verified?: boolean | null
          phone?: string
          pin_code?: string
          profile_image?: string | null
          rating?: number | null
          state?: string
          total_deliveries?: number | null
          updated_at?: string
          user_id?: string
          vehicle_number?: string | null
          vehicle_type?: string | null
          village?: string | null
        }
        Relationships: []
      }
      favorites: {
        Row: {
          created_at: string
          id: string
          service_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          service_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          service_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "favorites_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      messages: {
        Row: {
          booking_id: string | null
          created_at: string
          from_user_id: string
          id: string
          is_read: boolean | null
          message: string
          to_user_id: string
        }
        Insert: {
          booking_id?: string | null
          created_at?: string
          from_user_id: string
          id?: string
          is_read?: boolean | null
          message: string
          to_user_id: string
        }
        Update: {
          booking_id?: string | null
          created_at?: string
          from_user_id?: string
          id?: string
          is_read?: boolean | null
          message?: string
          to_user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      notifications: {
        Row: {
          booking_id: string | null
          created_at: string
          id: string
          is_read: boolean | null
          message: string
          title: string
          type: string
          user_id: string
        }
        Insert: {
          booking_id?: string | null
          created_at?: string
          id?: string
          is_read?: boolean | null
          message: string
          title: string
          type?: string
          user_id: string
        }
        Update: {
          booking_id?: string | null
          created_at?: string
          id?: string
          is_read?: boolean | null
          message?: string
          title?: string
          type?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "notifications_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      payments: {
        Row: {
          amount: number
          booking_id: string
          created_at: string
          id: string
          payment_date: string | null
          payment_method: string | null
          payment_type: string
          receipt_url: string | null
          status: string
          stripe_payment_intent_id: string | null
          transaction_id: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          amount: number
          booking_id: string
          created_at?: string
          id?: string
          payment_date?: string | null
          payment_method?: string | null
          payment_type?: string
          receipt_url?: string | null
          status?: string
          stripe_payment_intent_id?: string | null
          transaction_id?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          amount?: number
          booking_id?: string
          created_at?: string
          id?: string
          payment_date?: string | null
          payment_method?: string | null
          payment_type?: string
          receipt_url?: string | null
          status?: string
          stripe_payment_intent_id?: string | null
          transaction_id?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "payments_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          created_at: string
          full_name: string | null
          id: string
          phone: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          avatar_url?: string | null
          created_at?: string
          full_name?: string | null
          id?: string
          phone?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: []
      }
      promo_codes: {
        Row: {
          code: string
          created_at: string
          current_uses: number | null
          discount_type: string
          discount_value: number
          id: string
          is_active: boolean | null
          max_uses: number | null
          min_booking_amount: number | null
          valid_from: string
          valid_until: string | null
        }
        Insert: {
          code: string
          created_at?: string
          current_uses?: number | null
          discount_type?: string
          discount_value: number
          id?: string
          is_active?: boolean | null
          max_uses?: number | null
          min_booking_amount?: number | null
          valid_from?: string
          valid_until?: string | null
        }
        Update: {
          code?: string
          created_at?: string
          current_uses?: number | null
          discount_type?: string
          discount_value?: number
          id?: string
          is_active?: boolean | null
          max_uses?: number | null
          min_booking_amount?: number | null
          valid_from?: string
          valid_until?: string | null
        }
        Relationships: []
      }
      reviews: {
        Row: {
          booking_id: string | null
          content: string | null
          created_at: string
          id: string
          rating: number
          service_id: string
          title: string | null
          updated_at: string
          user_id: string
        }
        Insert: {
          booking_id?: string | null
          content?: string | null
          created_at?: string
          id?: string
          rating: number
          service_id: string
          title?: string | null
          updated_at?: string
          user_id: string
        }
        Update: {
          booking_id?: string | null
          content?: string | null
          created_at?: string
          id?: string
          rating?: number
          service_id?: string
          title?: string | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reviews_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      service_availability: {
        Row: {
          available_date: string
          created_at: string
          current_bookings: number | null
          id: string
          is_available: boolean | null
          max_bookings: number | null
          service_id: string
        }
        Insert: {
          available_date: string
          created_at?: string
          current_bookings?: number | null
          id?: string
          is_available?: boolean | null
          max_bookings?: number | null
          service_id: string
        }
        Update: {
          available_date?: string
          created_at?: string
          current_bookings?: number | null
          id?: string
          is_available?: boolean | null
          max_bookings?: number | null
          service_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "service_availability_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      services: {
        Row: {
          base_package_details: Json | null
          category: string
          coverage_area: string | null
          created_at: string
          description: string | null
          gallery_images: string[] | null
          id: string
          image_url: string | null
          is_featured: boolean | null
          location: string
          max_price: number | null
          min_price: number | null
          name: string
          price: number
          price_type: string
          rating: number | null
          reviews_count: number | null
          tags: string[] | null
          updated_at: string
          vendor_id: string | null
          vendor_name: string | null
          vendor_phone: string | null
        }
        Insert: {
          base_package_details?: Json | null
          category: string
          coverage_area?: string | null
          created_at?: string
          description?: string | null
          gallery_images?: string[] | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          location: string
          max_price?: number | null
          min_price?: number | null
          name: string
          price: number
          price_type: string
          rating?: number | null
          reviews_count?: number | null
          tags?: string[] | null
          updated_at?: string
          vendor_id?: string | null
          vendor_name?: string | null
          vendor_phone?: string | null
        }
        Update: {
          base_package_details?: Json | null
          category?: string
          coverage_area?: string | null
          created_at?: string
          description?: string | null
          gallery_images?: string[] | null
          id?: string
          image_url?: string | null
          is_featured?: boolean | null
          location?: string
          max_price?: number | null
          min_price?: number | null
          name?: string
          price?: number
          price_type?: string
          rating?: number | null
          reviews_count?: number | null
          tags?: string[] | null
          updated_at?: string
          vendor_id?: string | null
          vendor_name?: string | null
          vendor_phone?: string | null
        }
        Relationships: []
      }
      shopping_orders: {
        Row: {
          city: string
          created_at: string
          delivered_at: string | null
          delivery_address: string
          delivery_charges: number | null
          delivery_partner_id: string | null
          estimated_delivery_date: string | null
          final_amount: number | null
          id: string
          items: Json
          order_number: string
          payment_status: string | null
          phone: string
          pin_code: string
          special_instructions: string | null
          status: string
          total_estimated_amount: number | null
          updated_at: string
          user_id: string
        }
        Insert: {
          city: string
          created_at?: string
          delivered_at?: string | null
          delivery_address: string
          delivery_charges?: number | null
          delivery_partner_id?: string | null
          estimated_delivery_date?: string | null
          final_amount?: number | null
          id?: string
          items?: Json
          order_number: string
          payment_status?: string | null
          phone: string
          pin_code: string
          special_instructions?: string | null
          status?: string
          total_estimated_amount?: number | null
          updated_at?: string
          user_id: string
        }
        Update: {
          city?: string
          created_at?: string
          delivered_at?: string | null
          delivery_address?: string
          delivery_charges?: number | null
          delivery_partner_id?: string | null
          estimated_delivery_date?: string | null
          final_amount?: number | null
          id?: string
          items?: Json
          order_number?: string
          payment_status?: string | null
          phone?: string
          pin_code?: string
          special_instructions?: string | null
          status?: string
          total_estimated_amount?: number | null
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "shopping_orders_delivery_partner_id_fkey"
            columns: ["delivery_partner_id"]
            isOneToOne: false
            referencedRelation: "delivery_partners"
            referencedColumns: ["id"]
          },
        ]
      }
      todo_lists: {
        Row: {
          booking_id: string | null
          created_at: string
          id: string
          is_shared_with_vendor: boolean | null
          items: Json
          service_id: string | null
          title: string
          updated_at: string
          user_id: string
        }
        Insert: {
          booking_id?: string | null
          created_at?: string
          id?: string
          is_shared_with_vendor?: boolean | null
          items?: Json
          service_id?: string | null
          title: string
          updated_at?: string
          user_id: string
        }
        Update: {
          booking_id?: string | null
          created_at?: string
          id?: string
          is_shared_with_vendor?: boolean | null
          items?: Json
          service_id?: string | null
          title?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "todo_lists_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "todo_lists_service_id_fkey"
            columns: ["service_id"]
            isOneToOne: false
            referencedRelation: "services"
            referencedColumns: ["id"]
          },
        ]
      }
      user_roles: {
        Row: {
          created_at: string
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          created_at?: string
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      vendor_profiles: {
        Row: {
          business_images: string[] | null
          business_name: string
          category: string
          city: string
          created_at: string
          custom_category: string | null
          description: string | null
          district: string | null
          email: string
          full_address: string
          id: string
          is_active: boolean | null
          is_verified: boolean | null
          owner_name: string
          phone: string
          pin_code: string
          state: string
          updated_at: string
          user_id: string
          village: string | null
        }
        Insert: {
          business_images?: string[] | null
          business_name: string
          category: string
          city: string
          created_at?: string
          custom_category?: string | null
          description?: string | null
          district?: string | null
          email: string
          full_address: string
          id?: string
          is_active?: boolean | null
          is_verified?: boolean | null
          owner_name: string
          phone: string
          pin_code: string
          state: string
          updated_at?: string
          user_id: string
          village?: string | null
        }
        Update: {
          business_images?: string[] | null
          business_name?: string
          category?: string
          city?: string
          created_at?: string
          custom_category?: string | null
          description?: string | null
          district?: string | null
          email?: string
          full_address?: string
          id?: string
          is_active?: boolean | null
          is_verified?: boolean | null
          owner_name?: string
          phone?: string
          pin_code?: string
          state?: string
          updated_at?: string
          user_id?: string
          village?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      get_user_role: {
        Args: { _user_id: string }
        Returns: Database["public"]["Enums"]["app_role"]
      }
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user" | "vendor"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user", "vendor"],
    },
  },
} as const
