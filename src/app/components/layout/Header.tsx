'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo and Brand Name */}
          <div className="flex items-center space-x-3">
            <Link href="/">
              <Image
                src="/logo.jpg"
                alt="NextStore Logo"
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto object-contain"
                width={100}
                height={50}
              />
            </Link>

          </div>
        </div>
      </div>
    </header>
  );
}
