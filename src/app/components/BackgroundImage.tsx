"use client";
import { useEffect, useState } from 'react';
import { getBingImageOfTheDay } from '../../lib/home/bingImage';

export default function BackgroundImage({ children }: { children: React.ReactNode }) {
  const [backgroundUrl, setBackgroundUrl] = useState<string | null>(null);

  useEffect(() => {
    async function fetchBackgroundImage() {
      const imageUrl = await getBingImageOfTheDay();
      setBackgroundUrl(imageUrl);
    }
    fetchBackgroundImage();
  }, []);

  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: backgroundUrl ? `url(${backgroundUrl})` : 'none' }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      {children}
    </div>
  );
}
