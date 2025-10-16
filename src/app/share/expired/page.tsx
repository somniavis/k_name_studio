'use client';

import { useTranslation } from '@/hooks/useTranslation';
import Link from 'next/link';
import '@/components/screens/ResultScreen.css';
import './expired.css';

export default function ExpiredSharePage() {
  const { t } = useTranslation('common');

  return (
    <div className="screen result-screen">
      <div className="result-background">
        <div className="floating-element cherry">🌸</div>
        <div className="floating-element heart">💜</div>
        <div className="floating-element star">✨</div>
      </div>

      <div className="expired-container">
        <div className="expired-icon">⏰</div>
        <h1 className="expired-title">{t('expired.title')}</h1>
        <p className="expired-message">{t('expired.message')}</p>
        <div className="expired-info">
          <p>{t('expired.info')}</p>
        </div>
        <Link href="/" className="home-button">
          {t('expired.backToHome')}
        </Link>
      </div>
    </div>
  );
}
