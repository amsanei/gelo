import { useState } from "react";
import About from "./About";

export default function Header() {
  const [aboutModal, setAboutModal] = useState(false);
  return (
    <>
      <header className="flex justify-between px-4 md:px-16 py-4 border-b border-neutral-300 sticky top-0 bg-[#eaf3ec] backdrop-blur-3xl z-40">
        <div className="font-bold  text-xl flex gap-2 items-center">
          <img src="logo.svg" alt="Gelo" />
          <h1>Gelo</h1>
        </div>
        <div className="flex gap-4 items-center text-sm">
          <button
            onClick={() => setAboutModal(true)}
            className="text-neutral-500 hover:text-green-800 transition-colors cursor-pointer"
          >
            About
          </button>
          <a
            href="https://github.com/amsanei/gelo"
            target="_blank"
            className="text-neutral-500 hover:text-green-800 transition-colors cursor-pointer"
          >
            Github
          </a>
          <a
            href="https://www.figma.com/community/file/1506731539979417622"
            target="_blank"
            className="text-neutral-500 hover:text-green-800 transition-colors cursor-pointer"
          >
            Figma
          </a>
        </div>
      </header>
      <About isOpen={aboutModal} onClose={() => setAboutModal(false)} />
    </>
  );
}
