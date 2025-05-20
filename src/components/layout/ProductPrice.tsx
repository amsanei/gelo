import getDiscountedPrice from "../../lib/getDiscountedPrice";
import type { ProductAvailabilityStatus } from "../../types";

type ProductPriceProps = {
  availabilityStatus: ProductAvailabilityStatus;
  discountPercentage: number;
  price: number;
  type : "vertical" |"horizontal"
};

export default function ProductPrice({
  availabilityStatus,
  discountPercentage,
  price,
  type = "vertical"
}: ProductPriceProps) {
  if (availabilityStatus === "Out of Stock") {
    return <div className="text-sm text-neutral-500">Out of Stock</div>;
  }
  if (discountPercentage > 0) {
    return (
      <div className={`flex ${type === "horizontal" ? " flex-col" : "flex-row justify-between"}`}>
        <div className="line-through text-sm text-neutral-500">$ {price}</div>
        <div className="font-bold">
          $ {getDiscountedPrice(price, discountPercentage)}
        </div>
      </div>
    );
  }
  return <div className="font-bold mt-4 w-full text-end">$ {price}</div>;
}
