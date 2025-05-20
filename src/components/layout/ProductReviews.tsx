import Review from "../ui/Review";

export default function ProductReviews({ reviews }: any) {
  return (
    <div className="mt-6">
      <div>Reviews</div>
      <div className="flex flex-col gap-8 mt-2">
        {reviews.map((review: any) => (
          <Review data={review} />
        ))}
      </div>
    </div>
  );
}
