'use client';

import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useAppStore } from '@/store/useAppStore';
import { useTranslation } from '@/hooks/useTranslation';
import './PaymentModal.css';

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (paymentSessionId: string) => void;
}

export const PaymentModal: React.FC<PaymentModalProps> = ({
  isOpen,
  onClose,
  onSuccess
}) => {
  const { t } = useTranslation('payment');
  const paymentStatus = useAppStore((state) => state.paymentStatus);
  const setPaymentStatus = useAppStore((state) => state.setPaymentStatus);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // PayPal 환경 설정
  const isProduction = process.env.NODE_ENV === 'production';
  const clientId = isProduction
    ? process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID_LIVE
    : process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID_SANDBOX;

  if (!isOpen) return null;

  const initialOptions = {
    clientId: clientId || '',
    currency: 'USD',
    intent: 'capture',
    'data-client-token': undefined,
  };

  const createOrder = async () => {
    try {
      setLoading(true);
      setError(null);
      setPaymentStatus('processing');

      console.log('[PaymentModal] Creating PayPal order...');

      const response = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: '2.99',
          currency: 'USD',
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to create order');
      }

      const { orderID } = await response.json();
      console.log('[PaymentModal] Order created:', orderID);

      return orderID;
    } catch (err) {
      console.error('[PaymentModal] Create order error:', err);
      setError(err instanceof Error ? err.message : 'Failed to create order');
      setPaymentStatus('error');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const onApprove = async (data: { orderID: string }) => {
    try {
      setLoading(true);
      setError(null);
      setPaymentStatus('processing');

      console.log('[PaymentModal] Capturing payment for order:', data.orderID);

      const response = await fetch('/api/payment/capture-order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          orderID: data.orderID,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Payment capture failed');
      }

      const result = await response.json();
      console.log('[PaymentModal] Payment captured successfully:', result);

      setPaymentStatus('success');
      onSuccess(result.paymentSessionId);

    } catch (err) {
      console.error('[PaymentModal] Payment capture error:', err);
      setError(err instanceof Error ? err.message : 'Payment failed');
      setPaymentStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const onError = (err: unknown) => {
    console.error('[PaymentModal] PayPal error:', err);
    setError('Payment failed. Please try again.');
    setPaymentStatus('error');
  };

  const onCancel = () => {
    console.log('[PaymentModal] Payment cancelled by user');
    setPaymentStatus('cancelled');
    setError(null);
  };


  const handleClose = () => {
    if (paymentStatus !== 'processing') {
      setPaymentStatus('idle');
      setError(null);
      onClose();
    }
  };

  return (
    <div className="payment-modal-overlay" onClick={handleClose}>
      <div className="payment-modal" onClick={(e) => e.stopPropagation()}>
        <div className="payment-modal-header">
          <h2>{t('modal.title')}</h2>
          <button
            className="close-button"
            onClick={handleClose}
            disabled={paymentStatus === 'processing'}
          >
            ×
          </button>
        </div>

        <div className="payment-modal-content">
          <div className="premium-package">
            <div className="price">
              <span className="original-price">$9.99</span>
              <span className="sale-price">$2.99</span>
              <span className="discount">70% OFF!</span>
            </div>

            <div className="features-grid">
              <div className="feature-compact">
                <span className="check">✓</span>
                <span>{t('features.premiumNames')}</span>
              </div>
              <div className="feature-compact">
                <span className="check">✓</span>
                <span>{t('features.kpopMatching')}</span>
              </div>
              <div className="feature-compact">
                <span className="check">✓</span>
                <span>{t('features.soulmate')}</span>
              </div>
              <div className="feature-compact">
                <span className="check">✓</span>
                <span>{t('features.shareLink')}</span>
              </div>
            </div>
          </div>

          {error && (
            <div className="error-message">
              <span className="error-icon">⚠️</span>
              {error}
            </div>
          )}

          {loading && (
            <div className="loading-message">
              <div className="loading-spinner"></div>
              {t('processing')}
            </div>
          )}

          <div className="payment-section">
            {clientId ? (
              <PayPalScriptProvider options={initialOptions}>
                <PayPalButtons
                  createOrder={createOrder}
                  onApprove={onApprove}
                  onError={onError}
                  onCancel={onCancel}
                  disabled={loading || paymentStatus === 'processing'}
                  style={{
                    layout: 'vertical',
                    color: 'gold',
                    shape: 'rect',
                    label: 'paypal',
                  }}
                />
              </PayPalScriptProvider>
            ) : (
              <div className="error-message">
                <span className="error-icon">⚠️</span>
                {t('configError')}
              </div>
            )}
          </div>

          <div className="security-notice-compact">
            <span className="security-icon">🔒</span>
            <span>{t('security')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};