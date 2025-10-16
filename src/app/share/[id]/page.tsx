import { storageClient } from '@/lib/storage';
import { ShareResult } from './ShareResult';
import { redirect } from 'next/navigation';
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

export default async function SharePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const data = await getSharedData(id);

  if (!data) {
    // Redirect to expired page instead of 404
    redirect('/share/expired');
  }

  return <ShareResult data={data} />;
}
