import { storageClient } from '@/lib/storage';
import { ShareResult } from './ShareResult';
import { notFound } from 'next/navigation';
import type { NameResult, UserData } from '@/store/useAppStore';

// Define the type for the data we expect from storage
interface SharedData {
  userData: Partial<UserData>;
  freeNames: NameResult[];
  premiumNames: NameResult[];
  sajuAnalysis: any;
  isPremiumUnlocked: boolean;
  oppositeGenderNames?: NameResult[];
}

// This is a Server Component
async function getSharedData(id: string): Promise<SharedData | null> {
  const key = `share:${id}`;
  const data = await storageClient.get<SharedData>(key);
  return data;
}

export default async function SharePage({ params }: { params: { id: string } }) {
  const data = await getSharedData(params.id);

  if (!data) {
    // Use Next.js notFound() to render a standard 404 page
    notFound();
  }

  return <ShareResult data={data} />;
}
