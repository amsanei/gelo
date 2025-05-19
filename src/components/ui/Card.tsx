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
  };
};

export default function Card({ data }: CardProps) {
  return (
    <div className="col-span-3">
      <img
        src={data?.thumbnail}
        alt={data?.title}
        className="bg-neutral-100 rounded w-full object-cover"
      />
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
