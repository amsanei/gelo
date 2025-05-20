import Star from "../icons/Star";
import type { Product } from "../../types";
import ProductPrice from "../layout/ProductPrice";

type CardProps = {
  data: Product;
};

export default function Card({ data }: CardProps) {
  return (
    <div className="relative group flex  md:flex-col gap-4 md:gap-0 ">
      <div>
        <div className="size-32 md:w-full md:min-h-[330px] bg-neutral-100 overflow-hidden flex items-center justify-center">
          <img
            src={data?.thumbnail}
            alt={data?.title}
            className="rounded w-2/3 object-cover group-hover:scale-110 transition-transform duration-300"
          />
        </div>
      </div>
      <div className="flex flex-col w-full md:mt-2">
        <div className="flex items-center justify-between gap-2">
          <div className="font-bold">{data?.title}</div>
          <div className=" text-sm flex gap-1 items-center">
            <div className="text-neutral-500">{data?.rating}</div>
            <div className="text-neutral-300">
              <Star />
            </div>
          </div>
        </div>
        <div className="text-neutral-500 mb-4">{data?.category}</div>
        {data?.discountPercentage > 0 && (
          <div className="text-green-800 text-sm bg-white px-2 rounded-full  absolute top-2 left-2">
            {data?.discountPercentage}% Off
          </div>
        )}
        <div className="mt-auto">
          <ProductPrice
            availabilityStatus={data?.availabilityStatus}
            discountPercentage={data?.discountPercentage}
            price={data?.price}
            type="vertical"
          />
        </div>
      </div>
    </div>
  );
}
