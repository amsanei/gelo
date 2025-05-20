type CategoryCardProps = {
  img: string;
  title: string;
};

export default function CategoryCard({ img, title }: CategoryCardProps) {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className="bg-white p-6 flex items-center justify-center w-full">
        <img src={img} alt={title} className="w-full max-w-48 object-cover aspect-square" />
      </div>
      <div>{title}</div>
    </div>
  );
}
