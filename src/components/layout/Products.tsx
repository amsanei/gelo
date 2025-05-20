import { useQuery } from "@tanstack/react-query";
import Card from "../ui/Card";
import Modal from "../ui/Modal";
import { useState } from "react";
import ProductDetail from "./ProductDetail";
import axios from "../../axios/axios";
import Button from "../ui/Button";
import type { ProductDetailData } from "../../types";
import SkeletonLoading from "../ui/SkeletonLoading";
import Pagination from "./Pagination";
import getQueryParam from "../../lib/getQueryParam";

export default function Products() {
  const [currPage, setCurrPage] = useState(getQueryParam("page") || 1);
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
      <div className="grid md:grid-cols-6 lg:grid-cols-9 xl:grid-cols-12 gap-4">
        {isLoading || isRefetching ? (
          <SkeletonLoading count={limit} />
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
              key={item.id}
              className="cursor-pointer col-span-3 lg:col-span-"
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
        <Pagination
          currPage={currPage}
          onPageChange={setCurrPage}
          total={data?.total}
          limit={limit}
          skip={skip}
        />
      )}

      {selectedItem && (
        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ProductDetail data={selectedItem} />
        </Modal>
      )}
    </div>
  );
}
