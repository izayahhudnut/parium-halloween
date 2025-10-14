'use client';

import Image from 'next/image';
import { ShootingStars } from '@/components/ui/shooting-stars';
import { StarsBackground } from '@/components/ui/stars-background';

export default function Success() {

  const addToCalendar = () => {
    const event = {
      title: 'Parium Halloween Soirée',
      start: '20251101T010000Z',
      end: '20251101T050000Z',
      description: 'Parium Presents: A Halloween Soirée',
      location: '3615 Olive St. St. Louis MO 63108'
    };
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-black p-4 relative" style={{backgroundColor: '#D9BFA4'}}>
      <ShootingStars />
      <StarsBackground />
      
      <div className="text-center space-y-12 max-w-md mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-8 text-black">
            You&apos;re in!
          </h1>
        </div>
        
        <div className="animate-fade-in-delay space-y-8">
          {/* Action Icons */}
          <div className="flex justify-center space-x-8">
            <button 
              onClick={() => window.location.href = '/gallery'}
              className="flex flex-col items-center space-y-2 hover:opacity-70 transition-opacity"
            >
              <Image src="/witch-hat.svg" alt="Venue" width={40} height={40} />
              <span className="text-sm font-medium">View Venue</span>
            </button>
            
            <button 
              onClick={addToCalendar}
              className="flex flex-col items-center space-y-2 hover:opacity-70 transition-opacity"
            >
              <Image src="/witch-broom.svg" alt="Calendar" width={40} height={40} />
              <span className="text-sm font-medium">Add to Calendar</span>
            </button>
          </div>
          
          <div className="w-full border-t border-black border-opacity-5 pt-6 mt-8">
            <h2 className="text-5xl sm:text-4xl md:text-5xl font-bold text-black text-left">
              Parium Halloween Soirée
            </h2>
            <p className="text-black text-lg mt-4 text-left">
              Thank you for joining us for what promises to be an unforgettable evening. We can&apos;t wait to celebrate with you! 👻🎃🦇🕷️
            </p>
          </div>
          <div className="w-full border-b border-black border-opacity-5 pb-6"></div>
          
          {/* Event Details */}
          <div className="mt-8 w-full max-w-lg mx-auto">
            <h3 className="text-2xl font-bold text-black mb-6 text-left">Event Details:</h3>
            <div className="space-y-4 text-left">
              <div className="flex items-start space-x-3">
                <span className="text-2xl">📍</span>
                <div>
                  <p className="font-semibold text-black text-lg">Location</p>
                  <p className="text-black text-lg">3615 Olive St. St. Louis MO 63108</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-2xl">🕰️</span>
                <div>
                  <p className="font-semibold text-black text-lg">Time</p>
                  <p className="text-black text-lg">Friday, October 31, 2025</p>
                  <p className="text-black text-lg">8:00 PM - Midnight</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <span className="text-2xl">👗</span>
                <div>
                  <p className="font-semibold text-black text-lg">Attire</p>
                  <p className="text-black text-lg">Costumes encouraged!</p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="w-full overflow-x-hidden mt-16 animate-fade-in-delay">
        <div className="flex animate-marquee whitespace-nowrap w-full">
          <Image src="/party-1.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-2.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/DSC08806 2.JPEG" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-5.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-4.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-3.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-1.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-2.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/DSC08806 2.JPEG" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-5.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-4.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-3.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-1.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-2.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/DSC08806 2.JPEG" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-5.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-4.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-3.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-1.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-2.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/DSC08806 2.JPEG" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-5.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-4.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-3.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-1.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-2.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/DSC08806 2.JPEG" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-5.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-4.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-3.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-1.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
          <Image src="/party-2.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity w-auto h-64" />
        </div>
      </div>
    </div>
  );
}