import Cart from "../icons/Cart";
import Button from "../ui/Button";
import confetti from "canvas-confetti";

type ProductCartControlsProps = {
  availabilityStatus: "In Stock" | "Out of Stock" | "Low Stock";
  minimumOrderQuantity: number;
};

export default function ProductCartControls({
  availabilityStatus,
  minimumOrderQuantity,
}: ProductCartControlsProps) {
  const handleAddToCartClick = () => {
    const end = Date.now() + 3000;
    const colors = ["#0d542b", "#ffffff"];

    (function frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors,
      });
      if (Date.now() < end) requestAnimationFrame(frame);
    })();
  };
  if (availabilityStatus === "Out of Stock") {
    return <Button type="second">Notify Me</Button>;
  }
  return (
    <div className="flex gap-2">
      <input
        type="number"
        min={minimumOrderQuantity}
        defaultValue={minimumOrderQuantity}
        className="border border-neutral-200 w-16 px-2"
      />
      <Button onClick={handleAddToCartClick}>
        <div className="flex gap-2 items-center">
          <Cart />
          <span>Add to Cart</span>
        </div>
      </Button>
    </div>
  );
}
