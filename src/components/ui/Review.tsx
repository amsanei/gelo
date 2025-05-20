import Star from "../icons/Star";

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
    <div className="">
      <div className="flex gap-2 items-start">
        <div>
          <div className="size-10 bg-neutral-100 rounded-full text-sm text-green-800 flex justify-center items-center">
            {data.reviewerName[0]}
          </div>
        </div>
        <div className="w-full">
          <div className="flex justify-between items-center w-full">
            <div className="flex gap-2 items-center">
              <div className="text-sm text-neutral-500">
                {data.reviewerName}
              </div>
              <div className="text-sm text-neutral-500">
                {formatDate(data.date)}
              </div>
              {/* <div className="text-sm text-neutral-500">{data.reviewerEmail}</div> */}
            </div>
            <div className="flex gap-1 items-center text-neutral-500">
              <div>{data.rating}</div>
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
          <div>{data.comment}</div>
        </div>
      </div>
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
