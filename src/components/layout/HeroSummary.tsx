import { BookOpen, Database, Search, Tags } from 'lucide-react'

type HeroSummaryProps = {
  summary: { active: number; favorites: number }
  totalTags: number
  totalCategories: number
}

export function HeroSummary({ summary, totalTags, totalCategories }: HeroSummaryProps) {
  return (
    <section className="mx-auto grid max-w-7xl gap-8 px-5 py-12 sm:px-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,1fr)] lg:items-center lg:py-16">
      <div>
        <p className="inline-flex rounded-full border border-amber-200 bg-amber-100 px-4 py-2 text-sm font-bold text-amber-900">
          Proyecto 06
        </p>
        <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
          Captura ideas, organiza notas y prepara una base de datos real.
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-stone-600 sm:text-lg">
          Aplicacion responsive para gestionar notas locales con busqueda,
          categorias, etiquetas, persistencia en navegador y modelado SQL
          documentado.
        </p>
      </div>

      <aside
        aria-label="Resumen tecnico"
        className="grid gap-3 rounded-2xl border border-stone-200 bg-white p-4 shadow-sm sm:grid-cols-2"
      >
        <SummaryCard icon={BookOpen} label="Notas activas" value={summary.active} />
        <SummaryCard icon={Search} label="Favoritas" value={summary.favorites} />
        <SummaryCard icon={Tags} label="Etiquetas" value={totalTags} />
        <SummaryCard icon={Database} label="Categorias" value={totalCategories} />
      </aside>
    </section>
  )
}

type SummaryCardProps = {
  icon: typeof BookOpen
  label: string
  value: number
}

function SummaryCard({ icon: Icon, label, value }: SummaryCardProps) {
  return (
    <article className="rounded-xl border border-stone-200 bg-stone-50 p-4">
      <Icon aria-hidden="true" className="text-amber-700" size={22} />
      <p className="mt-4 text-3xl font-bold">{value}</p>
      <p className="mt-1 text-sm font-semibold text-stone-600">{label}</p>
    </article>
  )
}
