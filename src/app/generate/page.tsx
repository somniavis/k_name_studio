'use client';

import { Suspense } from 'react';
import { NameInputScreen } from '@/components/screens';
import { TranslationProvider } from '@/components/TranslationProvider';

function GeneratePage() {
  return (
    <TranslationProvider>
      <NameInputScreen />
    </TranslationProvider>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>Loading...</div>}>
      <GeneratePage />
    </Suspense>
  );
}
