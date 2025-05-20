import { useState } from "react";
import DataRow from "../ui/DataRow";
import Review from "../ui/Review";
import Button from "../ui/Button";
import Cart from "../icons/Cart";
import Star from "../icons/Star";
import confetti from "canvas-confetti";
import getDiscountedPrice from "../../lib/getDiscountedPrice";
import ImageCarousel from "../ui/ImageCarousel";
import QrCode from "../icons/QrCode";

export default function ProductDetail({ data }: any) {
  const [showQrCode, setShowQrCode] = useState(false);

  const handleAddToCartClick = () => {
    var end = Date.now() + 3 * 1000;

    // go Buckeyes!
    var colors = ["#0d542b", "#ffffff"];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };
  return (
    <div className="flex flex-col md:grid md:grid-cols-12 gap-8 items-start max-h-[85vh] overflow-auto">
      <div className="w-full col-span-5 sticky top-0">
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
        </div>

        <div className="flex justify-between items-center my-4">
          {data?.availabilityStatus === "Out of Stock" ? (
            <div className="text-sm text-neutral-500">Out of Stock</div>
          ) : data?.discountPercentage > 0 ? (
            <div>
              <div className="line-through text-sm text-neutral-500">
                $ {data?.price}
              </div>
              <div className="font-bold">
                $ {getDiscountedPrice(data?.price, data?.discountPercentage)}
              </div>
            </div>
          ) : (
            <div className="font-bold mt-4 w-full text-end">
              $ {data?.price}
            </div>
          )}
          {data?.availabilityStatus === "Out of Stock" ? (
            <Button type="second">Notify Me</Button>
          ) : (
            <div className="flex gap-2">
              <input type="number" min={data?.minimumOrderQuantity} defaultValue={data?.minimumOrderQuantity}  className="border border-neutral-200 w-16 px-2" />
              <Button onClick={handleAddToCartClick}>
                <div className="flex gap-2 items-center">
                  <Cart />
                  <span>Add to Cart</span>
                </div>
              </Button>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          <DataRow label="Category" data={data?.category} />
          <DataRow label="Brand" data={data?.brand} />
        </div>
      </div>
      <div className="col-span-7 pe-4">
        <div className="flex justify-between items-center">
          <div className="font-bold text-2xl">{data.title}</div>
          <div className="flex gap-1 items-center text-neutral-500">
            <div>{data?.rating}</div>
            <div
              className={
                data.rating <= 2
                  ? "text-amber-100"
                  : data.rating <= 3
                  ? "text-amber-200"
                  : data.rating <= 4
                  ? "text-amber-300"
                  : "text-amber-400"
              }
            >
              <Star />
            </div>
          </div>
        </div>
        <div className="my-4 text-neutral-500">{data.description}</div>

        <div className="mt-4 flex flex-col gap-4">
          <DataRow data={data.weight + " Kg"} label="Weight" />
          <DataRow
            data={
              data.dimensions.width +
              " Cm × " +
              data.dimensions.height +
              " Cm × " +
              data.dimensions.depth +
              " Cm"
            }
            label="Dimensions(w,h,d)"
          />
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

        <div className="mt-6">
          <div>Reviews</div>
          <div className="flex flex-col gap-8 mt-2">
            {data.reviews.map((review: any) => (
              <Review data={review} />
            ))}
          </div>
        </div>
        <div className="mt-4 py-2 border-y border-neutral-200 flex items-center justify-between">
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
      </div>
    </div>
  );
}
