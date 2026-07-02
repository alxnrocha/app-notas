import { Hexagon } from 'lucide-react'

export function Header() {
  return (
    <header className="px-5 py-6">
      <div className="flex items-center gap-3 font-bold text-white tracking-tight text-xl">
        <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20">
          <Hexagon aria-hidden="true" size={18} strokeWidth={2.5} />
        </span>
        Noteflow
      </div>
    </header>
  )
}
