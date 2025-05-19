import { useState } from "react";

type CardProps = {
  data: {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    discountPercentage: number;
    thumbnail: string;
    brand: string;
    category: string;
    images: string[];
  };
};

export default function Card({ data }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <div className="min-h-[330px] bg-neutral-100 ">
        <img
          src={isHovered && data?.images[1] ? data?.images[1] : data?.thumbnail}
          alt={data?.title}
          className="rounded w-full object-cover"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
      <div className="mt-2">
        <div className="flex items-center justify-between">
          <div>{data?.title}</div>
          <div className="text-neutral-500 text-sm">{data?.rating}</div>
        </div>
        <div className="text-neutral-500 ">{data?.category}</div>
        <div className="flex justify-between items-center mt-4">
          <div>$ {data?.price}</div>
          <div className="text-sm text-neutral-500">{data?.brand}</div>
        </div>
      </div>
    </div>
  );
}
