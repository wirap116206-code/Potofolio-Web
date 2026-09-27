"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

interface ProjectImageCarouselProps {
  images: string[];
  title: string;
}

export function ProjectImageCarousel({
  images,
  title,
}: ProjectImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((current) =>
      current === 0 ? images.length - 1 : current - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((current) =>
      current === images.length - 1 ? 0 : current + 1
    );
  };

  if (images.length === 0) {
    return null;
  }

  return (
    <div className="relative aspect-video overflow-hidden bg-white">
      {/* Image */}
      <Image
        src={images[currentIndex]}
        alt={`${title} screenshot ${currentIndex + 1}`}
        fill
        priority={currentIndex === 0}
        className="object-contain"
      />

      {/* Previous / Next Buttons */}
      {images.length > 1 && (
        <>
          {/* Previous */}
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-md transition-all duration-300 hover:scale-110 hover:bg-white"
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={goToNext}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex size-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-slate-700 shadow-md transition-all duration-300 hover:scale-110 hover:bg-white"
          >
            <ChevronRight className="size-5" />
          </button>

          {/* Image Counter */}
          <div className="absolute right-3 top-3 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-sm">
            {currentIndex + 1} / {images.length}
          </div>

          {/* Dots */}
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-white/95 px-3 py-2 shadow-sm">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to image ${index + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-5 bg-primary"
                    : "w-1.5 bg-slate-300 hover:bg-slate-500"
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}