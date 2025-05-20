export default function Header() {
  return (
    <header className='flex justify-between px-4 md:px-16 py-4 border-b border-neutral-300 sticky top-0 bg-[#eaf3ec] backdrop-blur-3xl z-40'>
        <div className="font-bold  text-xl flex gap-2 items-center">
          <img src="logo.svg" alt="Gelo" />
          <h1>Gelo</h1>
          </div>
        <div className='flex gap-4 items-center text-sm'>
            <div className="text-neutral-500 hover:text-green-800 transition-colors cursor-pointer">About</div>
            <div className="text-neutral-500 hover:text-green-800 transition-colors cursor-pointer">Github</div>
            <div className="text-neutral-500 hover:text-green-800 transition-colors cursor-pointer">Figma</div>
        </div>
    </header>
  )
}
