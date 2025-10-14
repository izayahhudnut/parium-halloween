'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Success() {

  const addToCalendar = () => {
    const event = {
      title: 'Parium Halloween Soirée',
      start: '20251101T020000Z',
      end: '20251101T060000Z',
      description: 'Parium Presents: A Halloween Soirée',
      location: '18 S Kingshighway, Saint Louis'
    };
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&details=${encodeURIComponent(event.description)}&location=${encodeURIComponent(event.location)}`;
    window.open(googleCalendarUrl, '_blank');
  };

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
      
      <div className="text-center space-y-12 max-w-md mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-8 text-black">
            You're in!
          </h1>
        </div>
        
        <div className="animate-fade-in-delay space-y-8">
          {/* Action Icons */}
          <div className="flex justify-center space-x-8">
            <button 
              onClick={() => window.location.href = '/gallery'}
              className="flex flex-col items-center space-y-2 hover:opacity-70 transition-opacity"
            >
              <Image src="/witch-hat.svg" alt="Gallery" width={40} height={40} />
              <span className="text-sm font-medium">View Gallery</span>
            </button>
            
            <button 
              onClick={addToCalendar}
              className="flex flex-col items-center space-y-2 hover:opacity-70 transition-opacity"
            >
              <Image src="/witch-broom.svg" alt="Calendar" width={40} height={40} />
              <span className="text-sm font-medium">Add to Calendar</span>
            </button>
          </div>
          
          <h2 className="text-5xl sm:text-4xl md:text-5xl font-bold text-black mt-8">
            Parium Halloween 2025 👻
          </h2>
          
          {/* Event Details */}
          <div className="mt-8 text-left space-y-2 max-w-sm mx-auto">
            <h3 className="text-xl font-bold text-black mb-4">Event Details:</h3>
            <p className="text-lg text-black">
              📍 Location: 18 S Kingshighway, Saint Louis
            </p>
            <p className="text-lg text-black">
              🕰️ Time: Friday, October 31, 2025 · 8:00 PM - Midnight
            </p>
            <p className="text-lg text-black">
              👗 Attire: Costumes encouraged!
            </p>
          </div>
          
          {/* Thank You Message */}
          <div className="mt-8 text-center max-w-md mx-auto">
            <p className="text-gray-500 text-base italic">
              Thank you for joining us for what promises to be an unforgettable evening. 
              We can't wait to celebrate with you!
            </p>
          </div>
        </div>
      </div>
      
      {/* Photo Gallery */}
      <div className="w-full overflow-hidden mt-16 animate-fade-in-delay">
        <div className="flex animate-marquee whitespace-nowrap">
          <Image src="/party-1.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 w-[250px] sm:w-[320px] h-[280px] sm:h-[350px] object-cover object-center" />
          <Image src="/party-2.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 w-[250px] sm:w-[320px] h-[280px] sm:h-[350px] object-cover object-center" />
          <Image src="/DSC08806 2.JPEG" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 w-[250px] sm:w-[320px] h-[280px] sm:h-[350px] object-cover object-center" />
          <Image src="/HEIC to PNG Party.png" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 w-[250px] sm:w-[320px] h-[280px] sm:h-[350px] object-cover object-center" />
          <Image src="/HEIC to PNG Party (1).png" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 w-[250px] sm:w-[320px] h-[280px] sm:h-[350px] object-cover object-center" />
          <Image src="/HEIC to PNG Party (2).png" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 w-[250px] sm:w-[320px] h-[280px] sm:h-[350px] object-cover object-center" />
          <Image src="/party-1.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 w-[250px] sm:w-[320px] h-[280px] sm:h-[350px] object-cover object-center" />
          <Image src="/party-2.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 w-[250px] sm:w-[320px] h-[280px] sm:h-[350px] object-cover object-center" />
          <Image src="/DSC08806 2.JPEG" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 w-[250px] sm:w-[320px] h-[280px] sm:h-[350px] object-cover object-center" />
          <Image src="/HEIC to PNG Party.png" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 w-[250px] sm:w-[320px] h-[280px] sm:h-[350px] object-cover object-center" />
          <Image src="/HEIC to PNG Party (1).png" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 w-[250px] sm:w-[320px] h-[280px] sm:h-[350px] object-cover object-center" />
          <Image src="/HEIC to PNG Party (2).png" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 w-[250px] sm:w-[320px] h-[280px] sm:h-[350px] object-cover object-center" />
          <Image src="/party-1.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 w-[250px] sm:w-[320px] h-[280px] sm:h-[350px] object-cover object-center" />
          <Image src="/party-2.jpg" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 w-[250px] sm:w-[320px] h-[280px] sm:h-[350px] object-cover object-center" />
          <Image src="/DSC08806 2.JPEG" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 w-[250px] sm:w-[320px] h-[280px] sm:h-[350px] object-cover object-center" />
          <Image src="/HEIC to PNG Party.png" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 w-[250px] sm:w-[320px] h-[280px] sm:h-[350px] object-cover object-center" />
          <Image src="/HEIC to PNG Party (1).png" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 w-[250px] sm:w-[320px] h-[280px] sm:h-[350px] object-cover object-center" />
          <Image src="/HEIC to PNG Party (2).png" alt="Party image" width={250} height={180} className="mx-2 rounded-lg flex-shrink-0 w-[250px] sm:w-[320px] h-[280px] sm:h-[350px] object-cover object-center" />
        </div>
      </div>
    </div>
  );
}