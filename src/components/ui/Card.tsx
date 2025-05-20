import Star from "../icons/Star";
import getDiscountedPrice from "../../lib/getDiscountedPrice";

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
  return (
    <div className="relative group">
      <div className="min-h-[330px] bg-neutral-100 overflow-hidden grid content-center">
        <img
          src={data?.thumbnail}
          alt={data?.title}
          className="rounded w-full object-cover group-hover:scale-110 transition-transform duration-300"
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
        {data?.discountPercentage > 0 && (
          <div className="text-green-800 text-sm bg-white px-2 rounded-full  absolute top-2 left-2">
            {data?.discountPercentage}% Off
          </div>
        )}
        {data?.discountPercentage > 0 ? (
          <div className="flex justify-between items-center mt-4">
            <div className="line-through text-sm text-neutral-500">
              $ {data?.price}
            </div>
            <div className="font-bold">
              $ {getDiscountedPrice(data?.price, data?.discountPercentage)}
            </div>
          </div>
        ) : (
          <div className="font-bold mt-4 w-full text-end">$ {data?.price}</div>
        )}
      </div>
    </div>
  );
}
