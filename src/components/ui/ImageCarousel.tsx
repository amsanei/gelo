import { useState } from "react";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";

type ImageCarouselProps = {
  images: string[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <div className="overflow-hidden w-full bg-neutral-100">
        <div
          className="h-[440px] flex transition-all duration-500"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <img key={index} src={img} alt={`Image ${index + 1}`} />
          ))}
        </div>
      </div>
      {images.length > 1 && (
        <div className="flex justify-between items-center my-2">
          <div className="text-sm text-neutral-500 flex gap-1">
            <span>{activeIndex + 1}</span>
            <span>/</span>
            <span>{images.length}</span>
          </div>
          <div className="flex gap-2">
            <button
              className="disabled:text-neutral-400 cursor-pointer hover:-translate-x-1 transition-all"
              disabled={activeIndex === 0}
              onClick={() => setActiveIndex((prev) => prev - 1)}
            >
              <ArrowLeft />
            </button>
            <button
              className="disabled:text-neutral-400 cursor-pointer hover:translate-x-1 transition-all"
              disabled={activeIndex === images.length - 1}
              onClick={() => setActiveIndex((prev) => prev + 1)}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
