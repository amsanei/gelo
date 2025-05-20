type ProductTagsProps = {
  tags: string[];
};

export default function ProductTags({ tags }: ProductTagsProps) {
  return (
    <div className="mt-4 py-2 border-y border-neutral-200 flex items-center justify-between">
      <div className="text-sm text-neutral-500">Tags</div>
      <div className="flex gap-2 items-center">
        {tags.map((tag: string, index: number) => (
          <div
            className="bg-neutral-100 rounded-full text-neutral-500 px-4 text-sm py-1 hover:text-black transition-colors"
            key={index}
          >
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
}
