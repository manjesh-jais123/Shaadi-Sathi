export interface ServiceType {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  pricePerDay: number;
  city: string;
  vendorId: string;
  vendorName: string;
  images: string[];
  videos?: string[];
  rating: number;
  reviewCount: number;
  isVerified: boolean;
  availability: string[];
}

export interface BookingType {
  id: string;
  userId: string;
  serviceId: string;
  serviceName: string;
  vendorId: string;
  vendorName: string;
  startDate: string;
  endDate: string;
  days: number;
  totalAmount: number;
  advanceAmount: number;
  status: "CART" | "PAYMENT_INITIATED" | "PAYMENT_SUCCESS" | "PENDING_APPROVAL" | "CONFIRMED" | "REJECTED" | "COMPLETED" | "CANCELLED";
  paymentStatus: "PENDING" | "PAID" | "FAILED" | "REFUNDED";
  todoList?: TodoItem[];
  userDetails: UserDetails;
  createdAt: string;
}

export interface TodoItem {
  id: string;
  text: string;
  completed: boolean;
}

export interface UserDetails {
  name: string;
  phone: string;
  houseNo: string;
  village: string;
  city: string;
  district: string;
  pinCode: string;
}

export interface VendorType {
  id: string;
  userId: string;
  businessName: string;
  ownerName: string;
  phone: string;
  email: string;
  category: string;
  description: string;
  state: string;
  city: string;
  village: string;
  district: string;
  pinCode: string;
  fullAddress: string;
  aadhaarNumber: string;
  bankAccountNumber: string;
  bankIfsc: string;
  bankName: string;
  images: string[];
  videos: string[];
  status: "PENDING_VERIFICATION" | "APPROVED" | "REJECTED" | "SUSPENDED";
  createdAt: string;
}

export interface ReviewType {
  id: string;
  userId: string;
  userName: string;
  serviceId: string;
  rating: number;
  comment: string;
  createdAt: string;
}

export interface ClothRentalType {
  id: string;
  name: string;
  category: "Bridal" | "Groom" | "Family" | "Kids";
  description: string;
  pricePerDay: number;
  size: string[];
  images: string[];
  vendorId: string;
  vendorName: string;
  city: string;
  isAvailable: boolean;
}

export interface ShoppingOrderType {
  id: string;
  userId: string;
  items: ShoppingItem[];
  deliveryAddress: UserDetails;
  status: "PENDING" | "ASSIGNED" | "IN_PROGRESS" | "DELIVERED" | "CANCELLED";
  deliveryPartnerId?: string;
  totalEstimate: number;
  createdAt: string;
}

export interface ShoppingItem {
  id: string;
  name: string;
  quantity: string;
  unit: string;
  notes?: string;
}
