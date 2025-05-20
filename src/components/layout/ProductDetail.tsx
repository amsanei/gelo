import { useState } from "react";
import DataRow from "../ui/DataRow";
import ImageCarousel from "../ui/ImageCarousel";
import QrCode from "../icons/QrCode";
import Rating from "../ui/Rating";
import ProductTags from "./ProductTags";
import ProductCartControls from "./ProductCartControls";
import ProductPrice from "./ProductPrice";
import ProductReviews from "./ProductReviews";
import ProductQrCode from "./ProductQrCode";
import type { ProductDetailData } from "../../types";

type ProductDetailProps = {
  data : ProductDetailData
}

export default function ProductDetail({ data }: ProductDetailProps) {
  const [showQrCode, setShowQrCode] = useState(false);

  return (
    <div className="flex flex-col md:grid md:grid-cols-12 gap-4 md:gap-8 items-start ">
      <div className="w-full col-span-5 md:sticky top-0">
        <div className="relative">
          <div className="flex justify-between items-center absolute top-2 left-0 w-full px-2 ">
            <button
              onClick={() => setShowQrCode((prev) => !prev)}
              className={`rounded-full p-2 transition-colors cursor-pointer z-50 hover:text-green-800 ${
                showQrCode
                  ? "bg-green-800/10 text-green-800"
                  : "bg-white text-neutral-500 "
              }`}
            >
              <QrCode />
            </button>
            {data?.discountPercentage > 0 && (
              <div className="text-green-800 text-sm bg-white px-2 rounded-full">
                {data?.discountPercentage}% Off
              </div>
            )}
          </div>
          <ImageCarousel images={data.images} />
          <div className="flex md:hidden gap-4 justify-between items-center my-4">
            <div className="font-bold text-2xl">{data.title}</div>
            <Rating rating={data?.rating} />
          </div>
          <ProductQrCode
            showQrCode={showQrCode}
            qrCode={data?.meta?.qrCode}
            barCode={data?.meta?.barcode}
          />
        </div>
        <div className="flex justify-between items-center mt-2 mb-4">
          <ProductPrice
            availabilityStatus={data?.availabilityStatus}
            discountPercentage={data?.discountPercentage}
            price={data?.price}
          />
          <ProductCartControls
            availabilityStatus={data?.availabilityStatus}
            minimumOrderQuantity={data?.minimumOrderQuantity}
          />
        </div>
        <div className="flex flex-col gap-2">
          <DataRow label="Category" data={data?.category} />
          <DataRow label="Brand" data={data?.brand} />
        </div>
      </div>
      <div className="col-span-7">
        <div className="hidden md:flex justify-between items-center mb-4">
          <div className="font-bold text-2xl">{data.title}</div>
          <Rating rating={data?.rating} />
        </div>
        <div className=" text-neutral-500">{data.description}</div>
        <div className="mt-4 flex flex-col gap-4">
          <DataRow data={data.weight + " Kg"} label="Weight" />
          <DataRow data={data.dimensions.width + " Cm"} label="Width" />
          <DataRow data={data.dimensions.height + " Cm"} label="Height" />
          <DataRow data={data.dimensions.depth + " Cm"} label="Depth" />
          <DataRow
            data={data.warrantyInformation}
            label="Warranty Information"
          />
          <DataRow
            data={data.shippingInformation}
            label="Shipping Information"
          />
          <DataRow data={data.returnPolicy} label="Return Policy" />
        </div>

        <ProductReviews reviews={data?.reviews} />
        <ProductTags tags={data?.tags} />
      </div>
    </div>
  );
}
