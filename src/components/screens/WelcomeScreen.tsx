'use client';

import React from 'react';
import { useAppStore } from '@/store/useAppStore';
import { LanguageSelector } from '@/components/ui';
import { useTranslation } from '@/hooks/useTranslation';

export const WelcomeScreen: React.FC = () => {
  const { t } = useTranslation('welcome');
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);

  const handleNext = () => {
    setCurrentScreen('nameInput');
  };

  return (
    <div className="screen welcome-screen">
      <div className="welcome-background">
        <div className="floating-element cherry">🌸</div>
        <div className="floating-element heart">💜</div>
        <div className="floating-element star">✨</div>
      </div>

      <div className="language-selector-container">
        <LanguageSelector />
      </div>

      <div className="screen-content">
        <div className="welcome-header">
          <div className="logo-area">
            <div className="sparkle-decoration">✨</div>
            <h1 className="app-title">
              <span className="title-line-1">{t('hero.title')}</span>
            </h1>
            <div className="sparkle-decoration">✨</div>
          </div>

          <p className="app-subtitle">
            {t('hero.subtitle')}
          </p>
        </div>

        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎭</div>
            <h3>{t('features.personalized.title')}</h3>
            <p>{t('features.personalized.description')}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔮</div>
            <h3>{t('features.cultural.title')}</h3>
            <p>{t('features.cultural.description')}</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💎</div>
            <h3>{t('features.meaningful.title')}</h3>
            <p>{t('features.meaningful.description')}</p>
          </div>
        </div>

        <div className="social-proof">
          <div className="user-avatars">
            <div className="avatar">👩🏻</div>
            <div className="avatar">👩🏽</div>
            <div className="avatar">👩🏾</div>
            <div className="avatar-count">+2.7K</div>
          </div>
          <p className="proof-text">{t('socialProof.trusted')}</p>
        </div>
      </div>

      <div className="bottom-section">
        <button className="bottom-button" onClick={handleNext}>
          <span>{t('cta.button')}</span>
          <span>→</span>
        </button>

        {/* Footer */}
        <footer className="app-footer">
          <p>{t('footer')}</p>
        </footer>
      </div>
    </div>
  );
};