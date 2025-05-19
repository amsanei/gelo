import Review from "../ui/Review";

export default function ProductDetail({ data }: any) {
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-5">
        <img
          src={data.thumbnail}
          alt=""
          className="bg-neutral-100 w-full object-cover"
        />
      </div>
      <div className="col-span-7">
        <div className="mb-2 text-sm text-neutral-500">Back To Products</div>
        <div className="font-bold text-xl">{data.title}</div>
        <div className="flex gap-4 items-center mt-4">
          <div className="flex flex-col">
            <span className="text-sm text-neutral-500">Category</span>
            <span>{data.category}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm text-neutral-500">Brand</span>
            <span>{data.brand}</span>
          </div>
        </div>
        <div className="mt-4 text-neutral-500">{data.description}</div>
        <div className="mt-4 flex flex-col gap-4">
          <div className="flex justify-between">
            <div>weight</div>
            <div>{data.weight}</div>
          </div>
          <div className="flex justify-between">
            <div>warrantyInformation</div>
            <div>{data.warrantyInformation}</div>
          </div>
          <div className="flex justify-between">
            <div>shippingInformation</div>
            <div>{data.shippingInformation}</div>
          </div>
          <div className="flex justify-between">
            <div>availabilityStatus</div>
            <div>{data.availabilityStatus}</div>
          </div>
          <div className="flex justify-between">
            <div>returnPolicy</div>
            <div>{data.returnPolicy}</div>
          </div>
        </div>
        <div className="mt-8">
          <div>Reviews</div>
          <div
            className="flex flex-col gap-2 mt-2"
          >
            {data.reviews.map((review: any) => (
              <Review data={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
