import type { ReactNode } from "react";

type ButtonProps = {
    children : ReactNode;
}

export default function Button({children} : ButtonProps) {
  return (
    <button className="bg-green-900 hover:bg-green-950 transition-colors cursor-pointer text-white px-4 py-2">
        {children}
    </button>
  )
}
