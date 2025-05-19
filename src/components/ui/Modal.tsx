import type { ReactNode, MouseEvent } from "react";

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

  if (isOpen)
    return (
      <div
        id="mask"
        onClick={handleMaskOnClick}
        className="w-dvw h-dvh bg-black/20 backdrop-blur-3xl fixed top-0 left-0 flex justify-center items-start overflow-auto"
      >
        <div className="w-[90%] md:w-2/3 bg-white p-4 my-8 md:my-16 relative">{children}</div>
      </div>
    );
}
