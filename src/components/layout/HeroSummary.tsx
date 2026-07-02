type HeroSummaryProps = {
  summary: { active: number; favorites: number }
  totalTags: number
  totalCategories: number
}

export function HeroSummary({ summary, totalTags, totalCategories }: HeroSummaryProps) {
  return (
    <section>
      <div className="mb-6">
        <h1 className="text-xl font-bold tracking-tight text-white mb-2">
          Noteflow Workspace
        </h1>
        <p className="text-sm leading-relaxed text-slate-400">
          Capture ideas, organize notes and prepare a real SQL database.
        </p>
      </div>

      <aside
        aria-label="Resumen tecnico"
        className="grid grid-cols-2 gap-2"
      >
        <SummaryCard label="Notes" value={summary.active} />
        <SummaryCard label="Favorites" value={summary.favorites} />
        <SummaryCard label="Tags" value={totalTags} />
        <SummaryCard label="Categories" value={totalCategories} />
      </aside>
    </section>
  )
}

type SummaryCardProps = {
  label: string
  value: number
}

function SummaryCard({ label, value }: SummaryCardProps) {
  return (
    <article className="rounded-xl bg-slate-900/50 p-3 border border-slate-800/50 text-center">
      <p className="text-2xl font-bold text-white">{value}</p>
      <p className="mt-1 text-[10px] uppercase tracking-wider font-semibold text-slate-500">{label}</p>
    </article>
  )
}
