'use client';

import { WelcomeScreen, NameInputScreen, ResultScreen } from '@/components/screens';
import { TranslationProvider } from '@/components/TranslationProvider';
import { useAppStore } from '@/store/useAppStore';

export default function Home() {
  const currentScreen = useAppStore((state) => state.currentScreen);

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
