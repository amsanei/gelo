import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type?: "prime" | "second";
  onClick?: () => void;
};

export default function Button({
  children,
  type = "prime",
  onClick,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${
        type === "prime"
          ? "bg-green-900 hover:bg-green-950 text-white"
          : "border border-neutral-200 text-neutral-500 hover:text-green-800"
      } transition-colors cursor-pointer px-4 py-2`}
    >
      {children}
    </button>
  );
}
