import { BookOpen, Database, Search, Tags } from 'lucide-react'

const previewNotes = [
  {
    title: 'Ideas para portfolio',
    category: 'Trabajo',
    excerpt: 'Organizar mejoras de README, capturas y deploy de cada proyecto.',
  },
  {
    title: 'Modelo SQL de notas',
    category: 'Estudio',
    excerpt: 'Definir tablas para notas, categorias, etiquetas y relaciones.',
  },
  {
    title: 'Recordatorio semanal',
    category: 'Personal',
    excerpt: 'Revisar pendientes, archivar notas antiguas y priorizar tareas.',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <header className="border-b border-stone-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-5 sm:px-8">
          <a className="flex items-center gap-3 font-bold" href="#inicio">
            <span className="flex size-10 items-center justify-center rounded-xl bg-amber-300 text-stone-950">
              <BookOpen aria-hidden="true" size={21} strokeWidth={2.25} />
            </span>
            App de Notas
          </a>

          <nav aria-label="Principal" className="hidden items-center gap-6 md:flex">
            <a className="text-sm font-semibold text-stone-600 hover:text-stone-950" href="#notas">
              Notas
            </a>
            <a className="text-sm font-semibold text-stone-600 hover:text-stone-950" href="#modelo">
              Modelo SQL
            </a>
          </nav>
        </div>
      </header>

      <main id="inicio">
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
            <SummaryCard icon={BookOpen} label="CRUD local" />
            <SummaryCard icon={Search} label="Busqueda" />
            <SummaryCard icon={Tags} label="Etiquetas" />
            <SummaryCard icon={Database} label="Modelo SQL" />
          </aside>
        </section>

        <section className="bg-white" id="notas">
          <div className="mx-auto grid max-w-7xl gap-5 px-5 py-10 sm:px-8 lg:grid-cols-3">
            {previewNotes.map((note) => (
              <article
                className="rounded-2xl border border-stone-200 bg-stone-50 p-5"
                key={note.title}
              >
                <p className="text-xs font-bold uppercase text-amber-800">
                  {note.category}
                </p>
                <h2 className="mt-3 text-xl font-bold">{note.title}</h2>
                <p className="mt-3 text-sm leading-6 text-stone-600">
                  {note.excerpt}
                </p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

type SummaryCardProps = {
  icon: typeof BookOpen
  label: string
}

function SummaryCard({ icon: Icon, label }: SummaryCardProps) {
  return (
    <article className="rounded-xl border border-stone-200 bg-stone-50 p-4">
      <Icon aria-hidden="true" className="text-amber-700" size={22} />
      <p className="mt-4 font-bold">{label}</p>
    </article>
  )
}

export default App
