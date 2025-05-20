type CategoryCardProps = {
  img: string;
  title: string;
};

export default function CategoryCard({ img, title }: CategoryCardProps) {
  return (
    <div className={`${title === "Grocery" ? 'hidden md:flex' : "flex"} flex-col gap-2 items-center`}>
      <div className="bg-neutral-100 p-4 flex items-center justify-center w-full">
        <img src={img} alt={title} className="h-[200px] object-cover" />
      </div>
      <div>{title}</div>
    </div>
  );
}
