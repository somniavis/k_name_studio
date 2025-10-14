import { storageClient } from '@/lib/storage';
import { ShareResult } from './ShareResult';
import { notFound } from 'next/navigation';

// This is a Server Component
async function getSharedData(id: string) {
  const key = `share:${id}`;
  const data = await storageClient.get(key);
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