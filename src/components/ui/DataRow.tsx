type DataRowProps = {
  data: string | number;
  label: string;
};

export default function DataRow({ data, label }: DataRowProps) {
  if (data)
    return (
      <div className="flex justify-between items-center border-b pb-2 border-neutral-200">
        <div className="text-sm text-neutral-500">{label}</div>
        <div>{data}</div>
      </div>
    );
}
