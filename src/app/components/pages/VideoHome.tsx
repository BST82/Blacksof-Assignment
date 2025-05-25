'use client';

export default function VideoHome() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/videos/homevideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Content */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 px-4 text-center">
        <h1 className="text-white font-bold leading-snug">
          <span className="block text-base sm:text-lg md:text-xl font-medium mb-8">
            Driven by performance
          </span>
          <span className="block text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
            Soft trims and <span className="text-blue-500">NVH solutions</span>
          </span>
          <span className="block text-xl sm:text-2xl md:text-4xl mt-2">
            for seamless rides
          </span>
        </h1>
      </div>
    </section>
  );
}
