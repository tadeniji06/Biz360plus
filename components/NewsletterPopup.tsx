'use client';

import { useState, useEffect, useActionState } from 'react';
import { X, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { newsletterSubscribe } from '@/app/actions/newsletterSubscribe';

export default function NewsletterPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const [state, formAction, isPending] = useActionState(newsletterSubscribe, {
    status: 'idle' as const,
    message: '',
  });

  useEffect(() => {
    setHasMounted(true);
    
    // Check cookies
    const cookies = document.cookie;
    const hasSubscribed = cookies.includes('newsletter_subscribed=true');
    const hasRejected = cookies.includes('newsletter_rejected=true');

    if (!hasSubscribed && !hasRejected) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 5000); // 5 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (state.status === 'success') {
      // Set subscribed cookie for 1 year
      document.cookie = 'newsletter_subscribed=true; path=/; max-age=31536000';
      // Close popup after a short delay to show success message
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [state.status]);

  const handleClose = () => {
    setIsOpen(false);
    // Set rejected cookie for 24 hours
    document.cookie = 'newsletter_rejected=true; path=/; max-age=86400';
  };

  if (!hasMounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="newsletter-overlay"
            onClick={handleClose}
          />
          
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20, x: '-50%', translateY: '-50%' }}
            animate={{ scale: 1, opacity: 1, y: 0, x: '-50%', translateY: '-50%' }}
            exit={{ scale: 0.95, opacity: 0, y: 20, x: '-50%', translateY: '-50%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 400 }}
            className="newsletter-modal"
          >
            <button
              onClick={handleClose}
              className="newsletter-close"
              aria-label="Close"
            >
              <X width={20} height={20} />
            </button>

            <div className="newsletter-grid">
              {/* Left side Image */}
              <div className="newsletter-image-side">
                <div className="newsletter-image-overlay" />
                <div className="newsletter-image-content">
                  <h3>Business360</h3>
                  <p>Business Intelligence. Delivered.</p>
                </div>
              </div>

              {/* Right side Form */}
              <div className="newsletter-form-side">
                {state.status === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="newsletter-success"
                  >
                    <div className="newsletter-success-icon">
                      <CheckCircle2 width={36} height={36} />
                    </div>
                    <h2>You're on the list!</h2>
                    <p>Thank you for subscribing. We'll keep you updated with the latest business intelligence.</p>
                  </motion.div>
                ) : (
                  <>
                    <div className="newsletter-header">
                      <h2>Stay Ahead</h2>
                      <p>Join thousands of professionals receiving our exclusive business news and analysis.</p>
                    </div>

                    <form action={formAction} className="newsletter-form">
                      <div className="newsletter-form-row">
                        <div className="newsletter-input-group">
                          <label htmlFor="firstName">First Name</label>
                          <input type="text" id="firstName" name="firstName" placeholder="John" required />
                        </div>
                        <div className="newsletter-input-group">
                          <label htmlFor="lastName">Last Name</label>
                          <input type="text" id="lastName" name="lastName" placeholder="Doe" required />
                        </div>
                      </div>
                      
                      <div className="newsletter-input-group">
                        <label htmlFor="email">Email Address</label>
                        <input type="email" id="email" name="email" placeholder="john@example.com" required />
                      </div>

                      {state.status === 'error' && (
                        <div className="newsletter-error">{state.message}</div>
                      )}

                      <button type="submit" disabled={isPending} className="newsletter-submit">
                        {isPending ? 'Subscribing...' : 'Subscribe Now'}
                      </button>
                      
                      <p className="newsletter-privacy">We respect your privacy.</p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </motion.div>

          <style>{`
            .newsletter-overlay {
              position: fixed;
              inset: 0;
              z-index: 9998;
              background: rgba(0, 0, 0, 0.6);
              backdrop-filter: blur(4px);
            }

            .newsletter-modal {
              position: fixed;
              top: 50%;
              left: 50%;
              z-index: 9999;
              width: 90%;
              max-width: 800px;
              background: var(--color-white);
              border-radius: 12px;
              box-shadow: 0 24px 48px -12px rgba(0, 0, 0, 0.25);
              overflow: hidden;
            }

            .newsletter-close {
              position: absolute;
              top: 16px;
              right: 16px;
              z-index: 10;
              width: 32px;
              height: 32px;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 50%;
              background: rgba(0, 0, 0, 0.05);
              border: none;
              color: var(--color-gray-600);
              cursor: pointer;
              transition: all var(--transition-fast);
            }

            .newsletter-close:hover {
              background: rgba(0, 0, 0, 0.1);
              color: var(--color-black);
            }

            .newsletter-grid {
              display: flex;
              flex-direction: row;
              min-height: 480px;
            }

            .newsletter-image-side {
              flex: 1;
              position: relative;
              background-image: url('/newsletter_bg.png');
              background-size: cover;
              background-position: center;
              display: flex;
              flex-direction: column;
              justify-content: flex-end;
              padding: 40px;
            }

            .newsletter-image-overlay {
              position: absolute;
              inset: 0;
              background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.2) 100%);
            }

            .newsletter-image-content {
              position: relative;
              z-index: 2;
              color: white;
            }

            .newsletter-image-content h3 {
              font-family: var(--font-sans);
              font-size: 24px;
              font-weight: 800;
              margin-bottom: 4px;
              letter-spacing: -0.02em;
            }

            .newsletter-image-content p {
              font-family: var(--font-serif);
              font-size: 16px;
              color: rgba(255, 255, 255, 0.85);
            }

            .newsletter-form-side {
              flex: 1;
              padding: 48px 40px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              background: var(--color-white);
            }

            .newsletter-header {
              margin-bottom: 32px;
            }

            .newsletter-header h2 {
              font-family: var(--font-serif);
              font-size: 32px;
              font-weight: 700;
              color: var(--color-heading);
              margin-bottom: 8px;
              line-height: 1.2;
            }

            .newsletter-header p {
              font-size: 15px;
              color: var(--color-text-muted);
              line-height: 1.5;
            }

            .newsletter-form {
              display: flex;
              flex-direction: column;
              gap: 20px;
            }

            .newsletter-form-row {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 16px;
            }

            .newsletter-input-group {
              display: flex;
              flex-direction: column;
              gap: 6px;
            }

            .newsletter-input-group label {
              font-size: 13px;
              font-weight: 600;
              color: var(--color-gray-700);
            }

            .newsletter-input-group input {
              width: 100%;
              padding: 12px 16px;
              font-family: var(--font-sans);
              font-size: 15px;
              color: var(--color-text);
              background: var(--color-white);
              border: 1px solid var(--color-border);
              border-radius: 6px;
              outline: none;
              transition: border-color var(--transition-fast), box-shadow var(--transition-fast);
            }

            .newsletter-input-group input::placeholder {
              color: var(--color-gray-400);
            }

            .newsletter-input-group input:focus {
              border-color: var(--color-primary);
              box-shadow: 0 0 0 3px rgba(26, 86, 219, 0.15);
            }

            .newsletter-submit {
              margin-top: 8px;
              width: 100%;
              padding: 14px;
              background: var(--color-primary);
              color: var(--color-white);
              font-family: var(--font-sans);
              font-size: 15px;
              font-weight: 600;
              border: none;
              border-radius: 6px;
              cursor: pointer;
              transition: background var(--transition-fast);
            }

            .newsletter-submit:hover:not(:disabled) {
              background: var(--color-primary-dark);
            }

            .newsletter-submit:disabled {
              opacity: 0.7;
              cursor: not-allowed;
            }

            .newsletter-error {
              font-size: 13px;
              font-weight: 500;
              color: #dc2626;
              background: #fef2f2;
              padding: 10px 12px;
              border-radius: 4px;
              border-left: 3px solid #dc2626;
            }

            .newsletter-privacy {
              text-align: center;
              font-size: 11px;
              font-weight: 600;
              text-transform: uppercase;
              letter-spacing: 0.05em;
              color: var(--color-gray-400);
              margin-top: 8px;
            }

            .newsletter-success {
              text-align: center;
              padding: 24px 0;
            }

            .newsletter-success-icon {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 72px;
              height: 72px;
              background: #f0fdf4;
              color: #22c55e;
              border-radius: 50%;
              margin: 0 auto 24px;
            }

            .newsletter-success h2 {
              font-family: var(--font-serif);
              font-size: 28px;
              font-weight: 700;
              color: var(--color-heading);
              margin-bottom: 12px;
            }

            .newsletter-success p {
              font-size: 15px;
              color: var(--color-text-muted);
              line-height: 1.6;
            }

            @media (max-width: 768px) {
              .newsletter-grid {
                flex-direction: column;
                min-height: auto;
              }

              .newsletter-image-side {
                display: none;
              }

              .newsletter-form-side {
                padding: 40px 24px;
              }

              .newsletter-form-row {
                grid-template-columns: 1fr;
                gap: 20px;
              }
              
              .newsletter-header h2 {
                font-size: 28px;
              }
            }
          `}</style>
        </>
      )}
    </AnimatePresence>
  );
}
