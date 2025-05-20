import { useState } from "react";
import Star from "../icons/Star";

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
          <div className="font-bold">{data?.title}</div>
          <div className=" text-sm flex gap-1 items-center">
            <div className="text-neutral-500">{data?.rating}</div>
            <div className="text-neutral-300">
              <Star />
            </div>
          </div>
        </div>
        <div className="text-neutral-500 ">{data?.category}</div>
        <div className="flex justify-between items-center mt-4">
          <div className="line-through text-sm text-neutral-500">
            $ {data?.price}
          </div>
          <div className="font-bold">$ {data?.price}</div>
        </div>
      </div>
    </div>
  );
}
