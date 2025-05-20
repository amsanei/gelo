import { useQuery } from "@tanstack/react-query";
import Card from "../ui/Card";
import Modal from "../ui/Modal";
import { useState } from "react";
import ProductDetail from "./ProductDetail";
import ArrowRight from "../icons/ArrowRight";
import ArrowLeft from "../icons/ArrowLeft";
import axios from "../../axios/axios";
import Button from "../ui/Button";
import type { ProductDetailData } from "../../types";

export default function Products() {
  const [currPage, setCurrPage] = useState(1);
  const limit = 8;
  const skip = (currPage - 1) * limit;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<ProductDetailData | null>(
    null
  );
  const getData = async ({
    queryKey,
  }: {
    queryKey: [string, number, number];
  }) => {
    const [, limit, skip] = queryKey;
    return axios.get(`products?limit=${limit}&skip=${skip}`).then((res) => {
      if (res.status === 200) return res.data;
    });
  };
  const { data, isLoading, isRefetching, isError, refetch } = useQuery({
    queryKey: ["data", limit, skip],
    queryFn: getData,
    refetchOnWindowFocus: false,
    retry: false,
  });

  return (
    <div className="mt-16">
      <div className="flex justify-between items-center mb-4 pb-2 border-b border-neutral-200">
        <div>Products</div>
        {data && (
          <div className="text-sm text-neutral-500">{data.total} Product</div>
        )}
      </div>
      <div className="grid md:grid-cols-12 gap-6">
        {isLoading || isRefetching ? (
          [1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div className="flex flex-col gap-4 col-span-3" key={item}>
              <div className="w-full aspect-square bg-neutral-200 animate-pulse"></div>
              <div className="w-[90%] h-2 rounded-2xl bg-neutral-200 animate-pulse"></div>
              <div className="w-1/3 h-2 rounded-2xl bg-neutral-200 animate-pulse"></div>
              <div className="w-1/4 h-2 rounded-2xl bg-neutral-200 animate-pulse"></div>
            </div>
          ))
        ) : isError ? (
          <div className="col-span-12 text-center">
            <div className="text-xl font-bold mb-2">
              Something went wrong :(
            </div>
            <div className=" text-neutral-500 mb-4">Try with Vpn</div>
            <Button onClick={refetch}>Try Again</Button>
          </div>
        ) : (
          data.products.map((item: ProductDetailData) => (
            <div
              className="cursor-pointer col-span-3"
              onClick={() => {
                setIsModalOpen(true);
                setSelectedItem(item);
              }}
            >
              <Card key={item.id} data={item} />
            </div>
          ))
        )}
      </div>
      {!isLoading && data && (
        <div className="text-sm w-full flex justify-between items-center mt-4 pt-2 border-t border-neutral-200">
          <div className="text-neutral-500">
            Page {currPage} From {Math.ceil(data.total / limit)}
          </div>
          <div className="flex gap-4 md:gap-8">
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

      {selectedItem && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ProductDetail data={selectedItem} />
        </Modal>
      )}
    </div>
  );
}
