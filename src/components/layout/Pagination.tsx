import setQueryParam from "../../lib/setQueryParam";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";

type PaginationProps = {
  currPage: number;
  onPageChange: React.Dispatch<React.SetStateAction<number>>;
  total: number;
  limit: number;
  skip: number;
};

export default function Pagination({
  currPage,
  onPageChange,
  total,
  limit,
  skip,
}: PaginationProps) {
  return (
    <div className="text-sm w-full flex justify-between items-center mt-4 pt-2 border-t border-neutral-200">
      <div className="text-neutral-500">
        Page {currPage} From {Math.ceil(total / limit)}
      </div>
      <div className="flex gap-4 md:gap-8">
        <button
          className="disabled:cursor-not-allowed disabled:text-neutral-500 cursor-pointer group flex items-start gap-2"
          onClick={() =>
            onPageChange((prev) => {
              setQueryParam("page", Math.max(prev - 1, 1).toString());
              return Math.max(prev - 1, 1);
            })
          }
          disabled={currPage === 1}
        >
          <div className="group-hover:-translate-x-1 group-disabled:translate-x-0 transition-all">
            <ArrowLeft />
          </div>
          <div>Previous Page</div>
        </button>
        <button
          className="disabled:cursor-not-allowed disabled:text-neutral-500 cursor-pointer group flex items-start gap-2"
          onClick={() =>
            onPageChange((prev) => {
              setQueryParam("page", (prev + 1).toString());
              return prev + 1;
            })
          }
          disabled={skip + limit >= total}
        >
          <div>Next Page</div>
          <div className="group-hover:translate-x-1 group-disabled:translate-x-0 transition-all">
            <ArrowRight />
          </div>
        </button>
      </div>
    </div>
  );
}
