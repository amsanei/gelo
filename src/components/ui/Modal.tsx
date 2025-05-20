import { type ReactNode, type MouseEvent, useEffect } from "react";
import { useMediaQuery } from "../../hooks/useMediaQuery";

type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  size?: "sm" | "md" | "lg";
};

export default function Modal({
  children,
  isOpen,
  onClose,
  size = "lg",
}: ModalProps) {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const handleMaskOnClick = (event: MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement)?.id === "mask") {
      onClose();
      toggleBodyScroll("auto");
    }
  };

  const toggleBodyScroll = (newValue: "hidden" | "auto") => {
    document.body.style.overflow = newValue;
  };

  useEffect(() => {
    toggleBodyScroll(isOpen ? "hidden" : "auto");
  }, [isOpen]);

  if (isOpen) {
    return (
      <div
        id="mask"
        onClick={handleMaskOnClick}
        className="w-dvw h-dvh bg-black/20 backdrop-blur-3xl fixed top-0 left-0 flex justify-center items-start overflow-auto z-50"
      >
        {isDesktop ? (
          <>
            <div
              className="absolute right-4 text-2xl cursor-pointer text-black/60"
              onClick={() => {
                onClose();
                toggleBodyScroll("auto");
              }}
            >
              ×
            </div>
            <div
              className={`${
                size === "sm" ? " lg:w-2/4 xl:w-1/4" : size === "md" ? "w-2/4" : "lg:w-8/9 xl:w-3/4"
              } bg-white p-4 my-8 relative max-h-[85vh] overflow-auto`}
            >
              {children}
            </div>
          </>
        ) : (
          <div className="bg-white absolute top-48 rounded-t-4xl overflow-auto w-full min-h-[75vh]">
            <div
              className="mx-auto h-2 w-1/2 bg-neutral-200 my-4 mb-2 rounded-full"
              onClick={onClose}
            ></div>
            <div className="bg-white p-4">{children}</div>
          </div>
        )}
      </div>
    );
  }
}
