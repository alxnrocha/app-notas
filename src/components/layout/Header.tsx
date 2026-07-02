import { BookOpen } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
        <a className="flex items-center gap-3 font-bold rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2" href="#inicio">
          <span className="flex size-10 items-center justify-center rounded-xl bg-amber-300 text-stone-950">
            <BookOpen aria-hidden="true" size={21} strokeWidth={2.25} />
          </span>
          App de Notas
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-6 md:flex">
          <a className="rounded text-sm font-semibold text-stone-600 hover:text-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2" href="#notas">
            Notas
          </a>
          <a className="rounded text-sm font-semibold text-stone-600 hover:text-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2" href="#modelo">
            Modelo SQL
          </a>
        </nav>
      </div>
    </header>
  )
}
