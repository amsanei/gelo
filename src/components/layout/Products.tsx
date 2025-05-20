import { useQuery } from "@tanstack/react-query";
import Card from "../ui/Card";
import Modal from "../ui/Modal";
import { useState } from "react";
import ProductDetail from "./ProductDetail";
import ArrowRight from "../icons/ArrowRight";
import ArrowLeft from "../icons/ArrowLeft";
import axios from "../../axios/axios";

export default function Products() {
  const [currPage, setCurrPage] = useState(1);
  const limit = 8;
  const skip = (currPage - 1) * limit;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const getData = async ({
    queryKey,
  }: {
    queryKey: [string, number, number];
  }) => {
    const [, limit, skip] = queryKey;
    return axios
      .get(`products?limit=${limit}&skip=${skip}`)
      .then((res) => {
        if (res.status === 200) return res.data;
      })
  };
  const { data, isLoading } = useQuery({
    queryKey: ["data", limit, skip],
    queryFn: getData,
  });

  return (
    <div className="mt-16">
      <div className="flex justify-between items-center">
        <div className="font-bold text-xl mb-4">Products</div>
      </div>
      <div className="grid md:grid-cols-12 gap-6">
        {isLoading
          ? [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div className="flex flex-col gap-4 col-span-3" key={item}>
                <div className="w-full aspect-square bg-neutral-200 animate-pulse"></div>
                <div className="w-[90%] h-2 rounded-2xl bg-neutral-200 animate-pulse"></div>
                <div className="w-1/3 h-2 rounded-2xl bg-neutral-200 animate-pulse"></div>
                <div className="w-1/4 h-2 rounded-2xl bg-neutral-200 animate-pulse"></div>
              </div>
            ))
          : data.products.map((item: any) => (
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
      {!isLoading && (
        <div className="text-sm  flex justify-between items-center mt-8">
          <div className="flex gap-2 text-neutral-500">
            <div>{data.total} Product</div>
            <div>|</div>
            <div>
              Page {currPage} From {Math.ceil(data.total / limit)}
            </div>
          </div>
          <div className="flex gap-8">
            <button
              className="disabled:cursor-not-allowed disabled:text-neutral-500 cursor-pointer group flex items-start gap-2"
              onClick={() => setCurrPage((prev) => Math.max(prev - 1, 1))}
              disabled={currPage === 1}
            >
              <div className="group-hover:-translate-x-1 group-disabled:translate-x-0 transition-all">
                <ArrowLeft />
              </div>
              <div>Previous Page</div>
            </button>
            <button
              className="disabled:cursor-not-allowed disabled:text-neutral-500 cursor-pointer group flex items-start gap-2"
              onClick={() => setCurrPage((prev) => prev + 1)}
              disabled={skip + limit >= data.total}
            >
              <div>Next Page</div>
              <div className="group-hover:translate-x-1 group-disabled:translate-x-0 transition-all">
                <ArrowRight />
              </div>
            </button>
          </div>
        </div>
      )}

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProductDetail data={selectedItem} />
      </Modal>
    </div>
  );
}
