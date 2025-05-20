import { type ReactNode, type MouseEvent, useEffect } from "react";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
};

export default function Modal({ children, isOpen, onClose }: ModalProps) {
  const handleMaskOnClick = (event: MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement)?.id === "mask") {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (isOpen)
    return (
      <div
        id="mask"
        onClick={handleMaskOnClick}
        className="w-dvw h-dvh bg-black/20 backdrop-blur-3xl fixed top-0 left-0 flex justify-center items-start overflow-auto z-50"
      >
        <div className="w-[90%] md:w-3/4 bg-white p-4 my-8 relative">
          {children}
        </div>
      </div>
    );
}
