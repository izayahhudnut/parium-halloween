'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const inviteImages = [
    '/invite-1.jpg',
    '/invite-2.jpg', 
    '/invite-3.jpg',
    '/invite-4.jpg',
    '/invite-5.jpg',
    '/invite-6.jpg',
    '/invite-7.jpg',
    '/invite-8.jpg'
  ];

  const downloadImage = (imageSrc: string) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = imageSrc.split('/').pop() || 'invite-image.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen p-8" style={{backgroundColor: '#D9BFA4'}}>
      {/* Header */}
      <div className="text-center mb-12">
        <div className="mb-4">
          <Image
            src="/logo.png"
            alt="Parium Logo"
            width={60}
            height={30}
            className="mx-auto"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
          Gallery
        </h1>
        <p className="text-lg text-black">
          Parium Halloween 2025
        </p>
      </div>

      {/* Back Button */}
      <div className="mb-8">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center space-x-2 text-black hover:opacity-70 transition-opacity"
        >
          <span className="text-2xl">←</span>
          <span className="text-lg font-medium">Back</span>
        </button>
      </div>

      {/* Scrollable Gallery Row */}
      <div className="w-full overflow-x-auto pb-4 scrollbar-hide">
        <div className="flex space-x-4 min-w-max">
          {inviteImages.map((image, index) => (
            <div key={index} className="relative group cursor-pointer flex-shrink-0">
              <Image
                src={image}
                alt={`Invite image ${index + 1}`}
                width={400}
                height={500}
                className="w-[350px] h-[450px] object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                onClick={() => setSelectedImage(image)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Popup */}
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