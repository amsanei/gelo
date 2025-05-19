import { useState } from "react";
import DataRow from "../ui/DataRow";
import Review from "../ui/Review";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";

export default function ProductDetail({ data }: any) {
  const [currImage, setCurrImage] = useState(0);
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-5">
        <img
          src={data.images[currImage]}
          alt=""
          className="bg-neutral-100 w-full object-cover"
        />
        <div className="flex justify-between items-center my-4">
          <div>BarCode</div>
          <div className="flex gap-2">
            <button
              className="disabled:text-neutral-400 cursor-pointer hover:-translate-x-1 transition-all"
              disabled={currImage === 0}
              onClick={() => setCurrImage((prev) => prev - 1)}
            >
              <ArrowLeft />
            </button>
            <button
              className="disabled:text-neutral-400 cursor-pointer hover:translate-x-1 transition-all"
              disabled={currImage === data.images.length - 1}
              onClick={() => setCurrImage((prev) => prev + 1)}
            >
              <ArrowRight />
            </button>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <DataRow data={data.weight} label="Weight" />
          <DataRow
            data={data.warrantyInformation}
            label="Warranty Information"
          />
          <DataRow
            data={data.shippingInformation}
            label="Shipping Information"
          />
          <DataRow data={data.availabilityStatus} label="Availability Status" />
          <DataRow data={data.returnPolicy} label="Return Policy" />
        </div>
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

        <div className="mt-8">
          <div>Reviews</div>
          <div className="flex flex-col gap-2 mt-2">
            {data.reviews.map((review: any) => (
              <Review data={review} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
