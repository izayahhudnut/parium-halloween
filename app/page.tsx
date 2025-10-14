import { Suspense } from 'react';
import InviteContent from './components/InviteContent';

function LoadingFallback() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center">
      <div className="animate-pulse">
        <div className="w-32 h-32 bg-gray-800 rounded"></div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <InviteContent />
    </Suspense>
  );
}