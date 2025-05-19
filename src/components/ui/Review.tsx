type ReviewProps = {
  data: {
    rating: number;
    comment: string;
    date: Date;
    reviewerName: string;
    reviewerEmail: string;
  };
};

export default function Review({ data }: ReviewProps) {
  return (
    <div className="border p-2 border-neutral-200 rounded">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <div>{data.reviewerName}</div>
          <div className="text-sm text-neutral-500">{data.reviewerEmail}</div>
        </div>
        <div>
            {data.rating}
        </div>
      </div>
      <div className="text-sm text-neutral-500">{formatDate(data.date)}</div>
      <div className="mt-4">{data.comment}</div>
    </div>
  );
}

function formatDate(isoString: Date) {
  const date = new Date(isoString);

  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")} ${String(
    date.getHours()
  ).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}
