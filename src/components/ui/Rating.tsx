import Star from "../icons/Star";

type RatingProps = {
  rating: number;
};

export default function Rating({ rating }: RatingProps) {
  return (
    <div className="flex gap-1 items-center text-neutral-500">
      <div>{rating}</div>
      <div
        className={
          rating <= 2
            ? "text-amber-100"
            : rating <= 3
            ? "text-amber-200"
            : rating <= 4
            ? "text-amber-300"
            : "text-amber-400"
        }
      >
        <Star />
      </div>
    </div>
  );
}
