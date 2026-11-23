import type { ContactFormData } from '@/types/contact';

export const contactService = {
  /**
   * Simulates or dispatches general studio contact form messages.
   */
  async submitContact(data: ContactFormData): Promise<{ success: boolean; message: string }> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Thank you for reaching out to Sushma Digital Studio. We will get back to you shortly.',
        });
      }, 500);
    });
  },
};
