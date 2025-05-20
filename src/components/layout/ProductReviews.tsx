import type { ProductReview } from "../../types";
import Review from "../ui/Review";

type ProductReviewsProps = {
  reviews: ProductReview[];
};

export default function ProductReviews({ reviews }: ProductReviewsProps) {
  return (
    <div className="mt-6">
      <div>Reviews</div>
      <div className="flex flex-col gap-8 mt-2">
        {reviews.map((review, index) => (
          <Review key={index} data={review} />
        ))}
      </div>
    </div>
  );
}
