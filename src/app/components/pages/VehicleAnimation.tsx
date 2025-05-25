'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import Animation from './Animation';

type VideoItem = {
  src: string;
  title?: string;
  desc?: string;
  thumb?: string;
};

const videoOf1: Record<'video1' | 'video2' | 'video3' | 'video4' | 'video5', VideoItem> = {
  video1: {
    src: '/videos/homevideo.mp4',
    title: 'Driving Innovation',
    desc: 'Discover how our advanced vehicle technology is transforming mobility with smarter, more efficient systems.',
    thumb: '/video1.jpg',
  },
  video2: {
    src: '/videos/video2.mp4',
    title: 'Future of Automobiles',
    desc: 'Explore cutting-edge solutions shaping the future of transport through connectivity and automation.',
    thumb: '/video2.jpg',
  },
  video3: { src: '/videos/b.mp4', thumb: '/a2.jpg' },
  video4: { src: '/videos/a.mp4', thumb: '/a1.jpg' },
  video5: { src: '/videos/c.mp4', thumb: '/a3.jpg' },
};

const videoOf2: Record<'video1' | 'video2' | 'video3' | 'video4' | 'video5', VideoItem> = {
  video1: {
    src: '/videos/d.mp4',
    title: 'Electric Evolution',
    desc: 'Join the shift to electric with groundbreaking EV innovations that deliver performance and sustainability.',
    thumb: '/video1.jpg',
  },
  video2: {
    src: '/videos/video2.mp4',
    title: 'Smart Mobility',
    desc: 'Experience mobility solutions that integrate AI, data, and automation for seamless travel.',
    thumb: '/video2.jpg',
  },
  video3: { src: '/videos/homevideo.mp4', thumb: '/a1.jpg' },
  video4: { src: '/videos/e.mp4', thumb: '/a3.jpg' },
  video5: { src: '/videos/f.mp4', thumb: '/a2.jpg' },
};

export default function VehicleAnimation() {
  const [activeSet, setActiveSet] = useState<'videoOf1' | 'videoOf2'>('videoOf1');
  const [selectedVideo, setSelectedVideo] = useState<'video1' | 'video2' | 'video3' | 'video4' | 'video5'>('video1');

  const refSection1 = useRef(null);
  const refSection2 = useRef(null);

  const isInView1 = useInView(refSection1, { amount: 0.6, once: false });
  const isInView2 = useInView(refSection2, { amount: 0.6, once: false });

  const videos = activeSet === 'videoOf1' ? videoOf1 : videoOf2;

  useEffect(() => {
    if (isInView1) {
      setActiveSet('videoOf1');
      setSelectedVideo('video1');
    } else if (isInView2) {
      setActiveSet('videoOf2');
      setSelectedVideo('video1');
    }
  }, [isInView1, isInView2]);

  const handleSetClick = (setName: 'videoOf1' | 'videoOf2') => {
    setActiveSet(setName);
    setSelectedVideo('video1');
  };

  return (
    <div className="bg-black text-white flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <Animation direction="up" className="w-full max-w-6xl">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center mb-10 sm:mb-16 leading-snug">
          Evolving the drive with <span className="font-bold">360-degree</span> comprehensive solutions
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 w-full">
          {/* Left Side: Sections */}
         <div className="flex flex-col gap-8 sm:gap-12">
  <div
    ref={refSection1}
    onClick={() => handleSetClick('videoOf1')}
    className={`p-4 sm:p-6 min-h-[200px] sm:min-h-[300px] transition-all duration-300 shadow-md cursor-pointer rounded-lg ${
      activeSet === 'videoOf1'
        ? 'border-white border-t-4 scale-105'
        : 'border-gray-700'
    }`}
  >
    <p className="text-lg sm:text-2xl font-semibold">{videoOf1.video1.title}</p>
    <p className="text-gray-300 mt-2 sm:mt-4 text-sm sm:text-base leading-relaxed">{videoOf1.video1.desc}</p>
  </div>

  <div
    ref={refSection2}
    onClick={() => handleSetClick('videoOf2')}
    className={`p-4 sm:p-6 min-h-[250px] sm:min-h-[450px] transition-all duration-300 shadow-md mb-6 sm:mb-10 cursor-pointer rounded-lg ${
      activeSet === 'videoOf2'
        ? 'border-white border-t-4 scale-105'
        : 'border-gray-700'
    }`}
  >
    <p className="text-lg sm:text-2xl font-semibold">{videoOf2.video1.title}</p>
    <p className="text-gray-300 mt-2 sm:mt-4 text-sm sm:text-base leading-relaxed">{videoOf2.video1.desc}</p>
  </div>
</div>


          {/* Right Side: Sticky Video Player */}
          <div className="sticky top-24 self-start w-full max-w-lg mx-auto">
            <div className="bg-black rounded-xl shadow-lg p-3 sm:p-4">
              {selectedVideo && videos[selectedVideo] ? (
                <video
                  key={`${activeSet}-${selectedVideo}`}
                  controls
                  autoPlay
                  muted
                  className="w-full h-auto rounded-lg mb-4 sm:mb-6"
                >
                  <source src={videos[selectedVideo].src} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <div className="text-center text-gray-500 py-16 sm:py-20">
                  Scroll to view a video preview
                </div>
              )}

              {/* Thumbnails */}
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mt-4">
                {(Object.keys(videos) as Array<'video1' | 'video2' | 'video3' | 'video4' | 'video5'>).map((key) => (
                  <img
                    key={key}
                    src={videos[key]?.thumb || `/${key}.jpg`}
                    alt={`Thumbnail ${key}`}
                    onClick={() => setSelectedVideo(key)}
                    className={`cursor-pointer rounded-lg border-2 transition-transform duration-200 object-cover aspect-video ${
                      selectedVideo === key ? 'border-white scale-105' : 'border-transparent'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Animation>
    </div>
  );
}
