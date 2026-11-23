export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate?: string;
  location?: string;
  message: string;
}

export interface BookingInquiryData extends ContactFormData {
  selectedService?: string;
  guestCount?: number;
  budgetRange?: string;
}
