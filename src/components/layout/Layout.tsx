import type { ReactNode } from "react";
import Header from "./Header";

type LayoutProps = {
    children : ReactNode;
}

export default function Layout({children} : LayoutProps) {
  return (
    <div>
        <Header />
        <main className="mx-4 md:mx-16 my-8">
            {children}
        </main>
    </div>
  )
}
