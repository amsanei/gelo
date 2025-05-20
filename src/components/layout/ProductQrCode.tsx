type ProductQrCodeProps = {
  showQrCode: boolean;
  qrCode: string;
  barCode: string;
};

export default function ProductQrCode({
  showQrCode,
  qrCode,
  barCode,
}: ProductQrCodeProps) {
  if (showQrCode)
    return (
      <div className="flex items-center justify-center w-full h-full top-0 left-0 absolute bg-black/20 backdrop-blur">
        <div className="lg:w-2/3 bg-white p-2">
          <img src={qrCode} alt="bar code" className="w-full" />
          <div className="flex flex-col items-center mt-4">
            <div>{barCode} </div>
            <div className="text-neutral-500">Bar Code</div>
          </div>
        </div>
      </div>
    );
}
