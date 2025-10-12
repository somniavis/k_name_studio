'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useAppStore } from '@/store/useAppStore';
import { generateAdditionalPremiumNames } from '@/utils/nameGenerator';
import type { UserData } from '@/store/useAppStore';
import './processing.css';

function PaymentProcessingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams?.get('sessionId');

  const [status, setStatus] = useState<'checking' | 'success' | 'timeout'>('checking');
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 60; // 60 attempts × 2 seconds = 2 minutes

  const userData = useAppStore((state) => state.userData);
  const premiumNames = useAppStore((state) => state.premiumNames);
  const unlockPremium = useAppStore((state) => state.unlockPremium);
  const locale = useAppStore((state) => state.locale);

  useEffect(() => {
    if (!sessionId) {
      console.error('[Payment Processing] No session ID provided');
      router.push('/');
      return;
    }

    console.log('[Payment Processing] Starting payment verification for session:', sessionId);

    const checkPaymentStatus = async () => {
      try {
        const response = await fetch(`/api/payment/session?sessionId=${sessionId}`);

        if (!response.ok) {
          console.error('[Payment Processing] Failed to check session status');
          return false;
        }

        const data = await response.json();
        console.log('[Payment Processing] Session status:', data);

        if (data.status === 'completed' && data.licenseKey) {
          console.log('[Payment Processing] ✅ Payment completed!', data.licenseKey);
          setStatus('success');

          // Generate premium content
          if (userData.birthDate && userData.firstName && userData.gender) {
            const { oppositeGenderNames } = generateAdditionalPremiumNames({
              userData: userData as UserData,
              locale
            });

            unlockPremium(premiumNames || [], [], oppositeGenderNames);
            console.log('[Payment Processing] Premium unlocked with additional names');
          } else {
            unlockPremium(premiumNames || []);
            console.log('[Payment Processing] Premium unlocked');
          }

          // Redirect to results page after 2 seconds
          setTimeout(() => {
            router.push('/?payment=success');
          }, 2000);

          return true;
        }

        return false;
      } catch (error) {
        console.error('[Payment Processing] Error checking payment status:', error);
        return false;
      }
    };

    // Poll every 2 seconds
    const pollInterval = setInterval(async () => {
      const completed = await checkPaymentStatus();

      if (completed) {
        clearInterval(pollInterval);
        return;
      }

      setAttempts((prev) => prev + 1);

      // Timeout after max attempts
      if (attempts >= maxAttempts) {
        console.warn('[Payment Processing] ⚠️ Timeout - payment verification took too long');
        setStatus('timeout');
        clearInterval(pollInterval);
      }
    }, 2000);

    // Initial check immediately
    checkPaymentStatus();

    return () => {
      clearInterval(pollInterval);
    };
  }, [sessionId, attempts, router, userData, premiumNames, unlockPremium, locale]);

  return (
    <div className="processing-container">
      <div className="processing-content">
        {status === 'checking' && (
          <>
            <div className="loading-spinner">
              <div className="spinner"></div>
            </div>
            <h1>결제 처리 중...</h1>
            <p>결제를 확인하고 있습니다. 잠시만 기다려주세요.</p>
            <div className="progress-dots">
              <span className="dot"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
            <p className="hint">이 페이지를 닫지 마세요.</p>
          </>
        )}

        {status === 'success' && (
          <>
            <div className="success-icon">✅</div>
            <h1>결제 완료!</h1>
            <p>프리미엄 콘텐츠가 잠금 해제되었습니다.</p>
            <p className="redirect-msg">곧 결과 페이지로 이동합니다...</p>
          </>
        )}

        {status === 'timeout' && (
          <>
            <div className="warning-icon">⚠️</div>
            <h1>시간 초과</h1>
            <p>결제 확인에 시간이 오래 걸리고 있습니다.</p>
            <p>결제가 완료되었다면 잠시 후 다시 확인해주세요.</p>
            <button
              className="retry-button"
              onClick={() => router.push('/')}
            >
              메인 페이지로 돌아가기
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default function PaymentProcessingPage() {
  return (
    <Suspense fallback={
      <div className="processing-container">
        <div className="processing-content">
          <div className="loading-spinner">
            <div className="spinner"></div>
          </div>
          <h1>로딩 중...</h1>
        </div>
      </div>
    }>
      <PaymentProcessingContent />
    </Suspense>
  );
}
