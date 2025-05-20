export type Product= {
    id: number;
    title: string;
    description: string;
    price: number;
    rating: number;
    discountPercentage: number;
    thumbnail: string;
    brand: string;
    category: string;
    images: string[];
  };

export type ProductDetailData = Product & {
  stock: number;
  availabilityStatus: ProductAvailabilityStatus;
  minimumOrderQuantity: number;
  weight: number;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  warrantyInformation: string;
  shippingInformation: string;
  returnPolicy: string;
  tags: string[];
  reviews: ProductReview[];
  meta: {
    barcode: string;
    qrCode: string; // image URL
  };
};

export type ProductReview = {
  reviewerName: string;
  reviewerEmail: string;
  rating: number;
  comment: string;
  date: Date; // ISO format, e.g., "2025-05-20"
};

export type ProductAvailabilityStatus =
  | "In Stock"
  | "Out of Stock"
  | "Low Stock";