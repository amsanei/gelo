type SkeletonLoadingProps = {
  count: number;
};

export default function SkeletonLoading({ count }: SkeletonLoadingProps) {
  return Array.from({ length: count }).map((_, index) => (
    <div className="flex md:flex-col gap-2 md:gap-4 col-span-3" key={index}>
      <div className="size-32 md:h-full md:w-full aspect-square bg-green-800/10 animate-pulse"></div>
      <div className="flex flex-col md:gap-4 justify-between w-full">
        <div>
          <div className="w-[90%] h-2 rounded-2xl bg-green-800/10 animate-pulse mb-4 md:mb-2"></div>
          <div className="w-1/3 h-2 rounded-2xl bg-green-800/10 animate-pulse"></div>
        </div>
        <div className="w-1/4 h-2 rounded-2xl bg-green-800/10 animate-pulse"></div>
      </div>
    </div>
  ));
}
