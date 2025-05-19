export default function Header() {
  return (
    <header className='flex justify-between px-16 py-4 border-b border-neutral-300'>
        <div className="italic text-xl">Gelo</div>
        <div className='flex gap-4 items-center'>
            <div>About</div>
            <div>Github</div>
            <div>Figma</div>
        </div>
    </header>
  )
}
