import { useQuery } from "@tanstack/react-query";
import Card from "../ui/Card";

export default function Products() {
  const getData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=20&skip=10");
    return await res.json();
  };
  const { data, isLoading } = useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });
  if (isLoading) return <div>Wait...</div>;

  return (
    <div className="mt-16">
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl mb-4">Products</div>
      </div>
      <div className="grid grid-cols-12 gap-6">
        {data.products.map((item: any) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}
