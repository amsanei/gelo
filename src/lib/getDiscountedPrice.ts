export default function getDiscountedPrice(
  price: number,
  discountPercentage: number
): number {
  const discount = (price * discountPercentage) / 100;
  return parseFloat((price - discount).toFixed(2));
}
