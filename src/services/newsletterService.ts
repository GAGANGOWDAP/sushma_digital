export const newsletterService = {
  /**
   * Handles email newsletter subscriptions for photography insights.
   */
  async subscribe(email: string): Promise<{ success: boolean; message: string }> {
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes('@')) {
      return { success: false, message: 'Please provide a valid email address.' };
    }

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Thank you for subscribing to Sushma Digital Studio photography chronicles.',
        });
      }, 400);
    });
  },
};
