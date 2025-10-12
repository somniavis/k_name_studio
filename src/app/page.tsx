'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { WelcomeScreen, NameInputScreen, ResultScreen } from '@/components/screens';
import { TranslationProvider } from '@/components/TranslationProvider';
import { useAppStore } from '@/store/useAppStore';

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentScreen = useAppStore((state) => state.currentScreen);
  const setCurrentScreen = useAppStore((state) => state.setCurrentScreen);
  const freeNames = useAppStore((state) => state.freeNames);

  // On mount: sync screen based on URL (URL is source of truth on initial load)
  useEffect(() => {
    const screen = searchParams?.get('screen');
    console.log('[Router] Initial mount, URL param:', screen, 'Store screen:', currentScreen);

    if (screen === 'input' && currentScreen !== 'nameInput') {
      console.log('[Router] URL says input, switching to nameInput screen');
      setCurrentScreen('nameInput');
    } else if (screen === 'result') {
      console.log('[Router] URL says result, checking if we have names...');
      // Only allow result screen if we have names
      if (freeNames.length > 0 && currentScreen !== 'results') {
        console.log('[Router] We have names, switching to results screen');
        setCurrentScreen('results');
      } else if (freeNames.length === 0) {
        console.log('[Router] No names, redirecting to welcome');
        setCurrentScreen('welcome');
        router.replace('/');
      }
    } else if (!screen && currentScreen !== 'welcome') {
      // No URL param, should be on welcome screen
      console.log('[Router] No URL param, resetting to welcome');
      setCurrentScreen('welcome');
    }
  }, [searchParams]); // Only run when URL changes

  // When screen changes programmatically, update URL
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const currentUrl = new URL(window.location.href);
    const currentParam = currentUrl.searchParams.get('screen');

    let targetParam = null;
    if (currentScreen === 'nameInput') targetParam = 'input';
    if (currentScreen === 'results') targetParam = 'result';

    if (currentParam !== targetParam) {
      console.log('[Router] Screen changed to', currentScreen, 'updating URL to', targetParam);
      if (targetParam) {
        router.replace(`/?screen=${targetParam}`, { scroll: false });
      } else if (currentScreen === 'welcome') {
        router.replace('/', { scroll: false });
      }
    }
  }, [currentScreen, router]);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'welcome':
        return <WelcomeScreen />;
      case 'nameInput':
        return <NameInputScreen />;
      case 'results':
        return <ResultScreen />;
      case 'payment':
        // TODO: Implement PaymentModal
        return <div>Payment Modal Coming Soon...</div>;
      case 'shared':
        // TODO: Implement SharedResultScreen
        return <div>Shared Result Screen Coming Soon...</div>;
      default:
        return <WelcomeScreen />;
    }
  };

  return (
    <TranslationProvider>
      {renderScreen()}
    </TranslationProvider>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
