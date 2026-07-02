import { Hexagon, Menu, X } from 'lucide-react'

type HeaderProps = {
  isMobileMenuOpen?: boolean
  onToggleMobileMenu?: () => void
}

export function Header({ isMobileMenuOpen, onToggleMobileMenu }: HeaderProps) {
  return (
    <header className="px-5 py-6 flex items-center justify-between md:block">
      <div className="flex items-center gap-3 font-bold text-white tracking-tight text-xl">
        <span className="flex size-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20">
          <Hexagon aria-hidden="true" size={18} strokeWidth={2.5} />
        </span>
        Noteflow
      </div>

      {/* Mobile Menu Toggle */}
      {onToggleMobileMenu && (
        <button
          onClick={onToggleMobileMenu}
          className="md:hidden flex items-center justify-center size-10 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}
    </header>
  )
}
