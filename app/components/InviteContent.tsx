'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

export default function InviteContent() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const firstName = searchParams.get('name') || 'Guest';

  const downloadImage = (imageSrc: string) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = imageSrc.split('/').pop() || 'invite-image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen w-full bg-black flex items-center justify-center">
        <Image
          src="/loading.png"
          alt="Loading"
          width={800}
          height={600}
          className="animate-fade-in h-screen w-auto object-contain"
          priority
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-black p-4 relative" style={{backgroundColor: '#D9BFA4'}}>
      {/* Logo at top */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-20">
        <Image
          src="/logo.png"
          alt="Parium Logo"
          width={30}
          height={15}
          className="animate-fade-in"
        />
      </div>
      
      {/* Floating icons */}
      <Image src="/coffin.svg" alt="Coffin" width={60} height={60} className="absolute animate-float-1 animate-fade-in-delay" style={{top: '5%', left: '5%'}} />
      <Image src="/thriller.svg" alt="Thriller" width={50} height={50} className="absolute animate-float-2 animate-fade-in-delay" style={{top: '10%', right: '8%'}} />
      <Image src="/witch-hat.svg" alt="Witch hat" width={55} height={55} className="absolute animate-float-3 animate-fade-in-delay" style={{top: '25%', left: '3%'}} />
      <Image src="/witch-broom.svg" alt="Witch broom" width={50} height={50} className="absolute animate-float-4 animate-fade-in-delay" style={{top: '30%', right: '5%'}} />
      <Image src="/coffin.svg" alt="Coffin" width={45} height={45} className="absolute animate-float-5 animate-fade-in-delay" style={{top: '45%', left: '10%'}} />
      <Image src="/thriller.svg" alt="Thriller" width={40} height={40} className="absolute animate-float-6 animate-fade-in-delay" style={{top: '50%', right: '12%'}} />
      
      <div className="text-center space-y-8 max-w-md mx-auto relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            You're Invited
          </h1>
          <h2 className="text-6xl sm:text-7xl md:text-8xl font-bold text-black capitalize">
            {firstName}
          </h2>
        </div>
        
        <div className="animate-fade-in-delay space-y-4">
          <p className="text-lg sm:text-xl text-black">
            Parium Presents: A Halloween Soirée<br />
            October 31st at 7pm
          </p>
        </div>
        
        <div className="animate-fade-in-delay">
          <a
            href="https://buy.stripe.com/4gM7sLdiHbTg3yP8yq1B606"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button 
              className="px-8 py-4 text-white text-xl font-bold rounded-lg hover:opacity-90 transition-opacity"
              style={{backgroundColor: '#81413A'}}
            >
              RSVP
            </button>
          </a>
        </div>
      </div>
      
      <div className="w-full overflow-hidden mt-16 animate-fade-in-delay">
        <div className="flex animate-marquee whitespace-nowrap">
          <Image src="/invite-1.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedImage('/invite-1.jpg')} />
          <Image src="/invite-2.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedImage('/invite-2.jpg')} />
          <Image src="/invite-3.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedImage('/invite-3.jpg')} />
          <Image src="/invite-4.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedImage('/invite-4.jpg')} />
          <Image src="/invite-5.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedImage('/invite-5.jpg')} />
          <Image src="/invite-6.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedImage('/invite-6.jpg')} />
          <Image src="/invite-7.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedImage('/invite-7.jpg')} />
          <Image src="/invite-8.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedImage('/invite-8.jpg')} />
          <Image src="/invite-1.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedImage('/invite-1.jpg')} />
          <Image src="/invite-2.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedImage('/invite-2.jpg')} />
          <Image src="/invite-3.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedImage('/invite-3.jpg')} />
          <Image src="/invite-4.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedImage('/invite-4.jpg')} />
          <Image src="/invite-5.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedImage('/invite-5.jpg')} />
          <Image src="/invite-6.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedImage('/invite-6.jpg')} />
          <Image src="/invite-7.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedImage('/invite-7.jpg')} />
          <Image src="/invite-8.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedImage('/invite-8.jpg')} />
        </div>
      </div>

      {/* Modal Popup for Invite Images */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Selected invite image"
              width={800}
              height={600}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
            
            {/* Action Buttons */}
            <div className="absolute top-4 right-4 flex space-x-2">
              <button
                onClick={() => downloadImage(selectedImage)}
                className="bg-white bg-opacity-90 hover:bg-opacity-100 text-black px-4 py-2 rounded-lg font-medium transition-opacity"
              >
                Download
              </button>
              <button
                onClick={() => setSelectedImage(null)}
                className="bg-white bg-opacity-90 hover:bg-opacity-100 text-black px-4 py-2 rounded-lg font-medium transition-opacity"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}