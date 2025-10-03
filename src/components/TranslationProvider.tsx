'use client';

import React, { useEffect, useState } from 'react';
import { useAppStore } from '@/store/useAppStore';

interface TranslationProviderProps {
  children: React.ReactNode;
}

// Pre-load essential translations on app start
const preloadTranslations = async (locale: string) => {
  const namespaces = ['common', 'welcome', 'nameInput', 'results', 'payment'];
  const loadPromises = namespaces.map(async (namespace) => {
    try {
      const response = await fetch(`/locales/${locale}/${namespace}.json`);
      if (response.ok) {
        return await response.json();
      }
    } catch (error) {
      console.warn(`Failed to preload ${locale}/${namespace}:`, error);
    }
    return {};
  });

  await Promise.all(loadPromises);
};

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [isInitializing, setIsInitializing] = useState(true);
  const locale = useAppStore((state) => state.locale);

  useEffect(() => {
    const initializeTranslations = async () => {
      setIsInitializing(true);
      await preloadTranslations(locale);
      // Small delay to ensure smooth transition
      setTimeout(() => {
        setIsInitializing(false);
      }, 100);
    };

    initializeTranslations();
  }, [locale]);

  if (isInitializing) {
    return (
      <div className="screen welcome-screen">
        <div className="welcome-background">
          <div className="floating-element cherry">🌸</div>
          <div className="floating-element heart">💜</div>
          <div className="floating-element star">✨</div>
        </div>

        <div className="screen-content">
          <div className="welcome-header">
            <div className="logo-area">
              <div className="sparkle-decoration">✨</div>
              <div className="loading-skeleton" style={{width: '300px', height: '48px', margin: '0 auto'}}></div>
              <div className="sparkle-decoration">✨</div>
            </div>
            <div className="loading-skeleton" style={{width: '280px', height: '24px', margin: '20px auto'}}></div>
          </div>
          <div className="features-grid">
            <div className="loading-skeleton" style={{width: '100%', height: '80px', borderRadius: '20px'}}></div>
            <div className="loading-skeleton" style={{width: '100%', height: '80px', borderRadius: '20px'}}></div>
            <div className="loading-skeleton" style={{width: '100%', height: '80px', borderRadius: '20px'}}></div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};