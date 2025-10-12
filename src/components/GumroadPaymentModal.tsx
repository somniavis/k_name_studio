'use client';

import React, { useEffect, useState } from 'react';
import './GumroadPaymentModal.css';

interface GumroadPaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
  sessionId: string;
  productUrl: string;
  onPaymentComplete: () => void;
}

export const GumroadPaymentModal: React.FC<GumroadPaymentModalProps> = ({
  isOpen,
  onClose,
  sessionId,
  productUrl,
  onPaymentComplete,
}) => {
  const [isChecking, setIsChecking] = useState(false);
  const [checkCount, setCheckCount] = useState(0);

  // Build Gumroad URL with session_id pre-filled
  const gumroadUrl = `${productUrl}?session_id=${sessionId}`;

  // Manual check function for button click
  const handleCheckPayment = async () => {
    setIsChecking(true);
    try {
      const response = await fetch(`/api/payment/session?sessionId=${sessionId}`);

      if (!response.ok) {
        console.error('[GumroadModal] Failed to check session status:', response.status);
        alert('결제 상태를 확인할 수 없습니다. 잠시 후 다시 시도해주세요.');
        return;
      }

      const data = await response.json();
      console.log('[GumroadModal] Session status:', data);

      if (data.status === 'completed' && data.licenseKey) {
        console.log('[GumroadModal] ✅ Payment completed!', data.licenseKey);
        onPaymentComplete();
      } else {
        alert('아직 결제가 확인되지 않았습니다.\n결제를 완료하신 후 다시 확인해주세요.');
      }
    } catch (error) {
      console.error('[GumroadModal] Error checking payment status:', error);
      alert('결제 확인 중 오류가 발생했습니다.');
    } finally {
      setIsChecking(false);
    }
  };

  // Minimal auto-polling: only 6 times over 1 minute
  useEffect(() => {
    if (!isOpen || !sessionId) return;

    console.log('[GumroadModal] Modal opened');
    console.log('[GumroadModal] Gumroad URL:', gumroadUrl);
    console.log('[GumroadModal] Session ID:', sessionId);
    console.log('[GumroadModal] Minimal auto-check enabled (10s intervals, max 6 times)');

    let isMounted = true;
    let currentCheck = 0;
    const maxChecks = 6; // Only 6 checks
    const checkInterval = 10000; // 10 seconds
    let pollTimeout: NodeJS.Timeout;

    const autoCheck = async () => {
      if (!isMounted) return;

      currentCheck++;
      setCheckCount(currentCheck);

      try {
        const response = await fetch(`/api/payment/session?sessionId=${sessionId}`);

        if (response.ok) {
          const data = await response.json();
          console.log('[GumroadModal] Auto-check:', data.status, `(${currentCheck}/${maxChecks})`);

          if (data.status === 'completed' && data.licenseKey) {
            console.log('[GumroadModal] ✅ Payment auto-detected!');
            if (isMounted) {
              onPaymentComplete();
            }
            return;
          }
        }
      } catch (error) {
        console.error('[GumroadModal] Auto-check error:', error);
      }

      // Schedule next check if under limit
      if (currentCheck < maxChecks && isMounted) {
        pollTimeout = setTimeout(autoCheck, checkInterval);
      } else if (currentCheck >= maxChecks) {
        console.log('[GumroadModal] Auto-check completed. Waiting for webhook or manual check.');
      }
    };

    // Start first check after 10 seconds
    pollTimeout = setTimeout(autoCheck, checkInterval);

    return () => {
      console.log('[GumroadModal] Cleaning up auto-check');
      isMounted = false;
      if (pollTimeout) clearTimeout(pollTimeout);
    };
  }, [isOpen, sessionId, onPaymentComplete, gumroadUrl]);

  const handleClose = () => {
    const confirmClose = window.confirm(
      '결제 창을 닫으시겠습니까?\n\n결제가 완료되었다면 "결제 확인" 버튼을 클릭하거나\n잠시 기다리시면 자동으로 활성화됩니다.'
    );
    if (!confirmClose) return;
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="gumroad-modal-overlay" onClick={handleClose}>
      <div className="gumroad-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="gumroad-modal-header">
          <h2>결제하기</h2>
          <button
            className="gumroad-modal-close"
            onClick={handleClose}
            aria-label="닫기"
          >
            ✕
          </button>
        </div>

        <div className="gumroad-modal-body">
          <div className="payment-instruction">
            <div className="payment-icon">💳</div>
            <h3>프리미엄 결제</h3>
            <p className="description">
              안전한 Gumroad 결제 페이지로 이동합니다.<br />
              결제가 완료되면 자동으로 프리미엄이 활성화됩니다.
            </p>

            <button className="payment-button" onClick={() => window.open(gumroadUrl, '_blank')}>
              <span className="button-icon">🔒</span>
              <span className="button-text">Gumroad에서 결제하기</span>
            </button>

            <button
              className="payment-check-button"
              onClick={handleCheckPayment}
              disabled={isChecking}
            >
              {isChecking ? '확인 중...' : '✓ 결제 완료 확인'}
            </button>

            <div className="payment-features">
              <div className="feature-item">
                <span className="feature-icon">✅</span>
                <span>신용카드, PayPal 지원</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">🔒</span>
                <span>안전한 결제 (SSL 암호화)</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">⚡</span>
                <span>자동 확인 (1분간 6회)</span>
              </div>
            </div>

            <p className="payment-note">
              💡 결제 완료 후 자동으로 확인됩니다. 또는 "결제 완료 확인" 버튼을 클릭하세요.
            </p>
          </div>
        </div>

        {checkCount > 0 && checkCount < 6 && (
          <div className="gumroad-modal-status">
            <div className="status-indicator">
              <div className="spinner-small"></div>
              <span>{t('autoChecking', { count: checkCount })}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
   )}
      </div>
    </div>
  );
};
/div>
  );
};
