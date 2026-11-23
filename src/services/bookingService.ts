import type { BookingInquiryData } from '@/types/contact';
import { SOCIAL_LINKS } from '@/constants/social';

export const bookingService = {
  /**
   * Generates a pre-filled WhatsApp direct message URL for quick mobile bookings.
   */
  createWhatsAppBookingLink(data: Partial<BookingInquiryData>): string {
    const lines = [
      `*New Booking Inquiry Sushma Digital Studio*`,
      data.name ? `• Name: ${data.name}` : null,
      data.phone ? `• Phone: ${data.phone}` : null,
      data.eventType ? `• Service/Event: ${data.eventType}` : null,
      data.eventDate ? `• Date: ${data.eventDate}` : null,
      data.location ? `• Location: ${data.location}` : null,
      data.budgetRange ? `• Budget: ${data.budgetRange}` : null,
      data.message ? `• Note: ${data.message}` : null,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join('\n'));
    return `${SOCIAL_LINKS.WHATSAPP}?text=${text}`;
  },

  /**
   * Simulates or dispatches booking inquiries.
   */
  async submitBooking(data: BookingInquiryData): Promise<{ success: boolean; message: string }> {
    // In production, dispatch to backend API / webhook.
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Your booking inquiry has been received. Prabhu & team will contact you within 24 hours.',
        });
      }, 600);
    });
  },
};
