import { useQuery } from "@tanstack/react-query";
import Card from "../ui/Card";
import Modal from "../ui/Modal";
import { useState } from "react";
import ProductDetail from "./ProductDetail";

export default function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
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
      <div className="grid md:grid-cols-12 gap-6">
        {data.products.map((item: any) => (
          <div
            className="cursor-pointer col-span-3"
            onClick={() => {
              setIsModalOpen(true);
              setSelectedItem(item);
            }}
          >
            <Card key={item.id} data={item} />
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProductDetail data={selectedItem} />
      </Modal>
    </div>
  );
}
