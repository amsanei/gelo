type ButtonProps = {
    children : string;
}

export default function Button({children} : ButtonProps) {
  return (
    <button className="bg-green-950 text-white px-4 py-2">
        {children}
    </button>
  )
}
