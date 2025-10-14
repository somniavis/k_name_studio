'use client';

import { Suspense } from 'react';
import { ResultScreen } from '@/components/screens';
import { TranslationProvider } from '@/components/TranslationProvider';

function ResultPage() {
  return (
    <TranslationProvider>
      <ResultScreen />
    </TranslationProvider>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>Loading...</div>}>
      <ResultPage />
    </Suspense>
  );
}
