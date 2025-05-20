import type { ProductReview } from "../../types";
import Review from "../ui/Review";

type ProductReviewsProps = {
  reviews: ProductReview[];
};

export default function ProductReviews({ reviews }: ProductReviewsProps) {
  return (
    <div className="my-4">
      <div className="text-sm text-neutral-500 mb-2">Reviews</div>
      <div className="flex flex-col gap-4 mt-2">
        {reviews.map((review, index) => (
          <Review key={index} data={review} />
        ))}
      </div>
    </div>
  );
}
