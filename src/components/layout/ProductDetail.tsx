import { useState } from "react";
import DataRow from "../ui/DataRow";
import Review from "../ui/Review";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";

export default function ProductDetail({ data }: any) {
  const [currImage, setCurrImage] = useState(0);
  const [showQrCode, setShowQrCode] = useState(false);
  return (
    <div className="grid grid-cols-12 gap-8">
      <div className="col-span-5">
        <div className="relative">
          {showQrCode && (
            <div className="flex items-center justify-center w-full h-full top-0 left-0 absolute bg-black/20 backdrop-blur">
              <div className="w-2/3 bg-white p-2">
                <img
                  src={data?.meta?.qrCode}
                  alt="bar code"
                  className="w-full"
                />
                <div className="flex flex-col items-center mt-4">
                  <div>{data?.meta.barcode} </div>
                  <div className="text-neutral-500">Bar Code</div>
                </div>
              </div>
            </div>
          )}
          <img
            src={data.images[currImage]}
            alt={data.title}
            className="bg-neutral-100 w-full object-cover"
          />
        </div>
        <div className="flex justify-between items-center mt-4 mb-8">
          <button
            className="cursor-pointer text-sm px-2 py-1 rounded-full border border-neutral-200 text-neutral-500 hover:text-black hover:bg-neutral-100 transition-colors"
            onClick={() => setShowQrCode((prev) => !prev)}
          >
            {showQrCode ? "Hide Bar Code" : "Show Bar Code"}
          </button>
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
        <div className="my-4 text-neutral-500">{data.description}</div>
        <div className="my-2 py-2 border-y border-neutral-200 flex items-center justify-between">
          <div className="text-sm text-neutral-500">Tags</div>
          <div className="flex gap-2 items-center">
            {data?.tags.map((tag: string, index: number) => (
              <div
                className="bg-neutral-100 rounded-full text-neutral-500 px-4 text-sm py-1 hover:text-black transition-colors"
                key={index}
              >
                {tag}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6">
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
