import { BookOpen, Database, Search, Tags } from 'lucide-react'

import { demoNotes } from './data/demoNotes'
import type { Note } from './types/note'
import {
  getNoteCategories,
  getNoteSummary,
  getNoteTags,
} from './utils/noteUtils'

function App() {
  const summary = getNoteSummary(demoNotes)
  const categories = getNoteCategories(demoNotes)
  const tags = getNoteTags(demoNotes)

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
            <SummaryCard
              icon={BookOpen}
              label="Notas activas"
              value={summary.active}
            />
            <SummaryCard
              icon={Search}
              label="Favoritas"
              value={summary.favorites}
            />
            <SummaryCard icon={Tags} label="Etiquetas" value={tags.length} />
            <SummaryCard icon={Database} label="Categorias" value={categories.length} />
          </aside>
        </section>

        <section className="bg-white" id="notas">
          <div className="mx-auto grid max-w-7xl gap-5 px-5 py-10 sm:px-8 lg:grid-cols-3">
            {demoNotes.map((note) => (
              <NoteCard key={note.id} note={note} />
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

function NoteCard({ note }: { note: Note }) {
  return (
    <article className="rounded-2xl border border-stone-200 bg-stone-50 p-5">
      <div className="flex flex-wrap items-center gap-2">
        <p className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase text-amber-900">
          {note.category}
        </p>
        {note.isFavorite && (
          <p className="rounded-full bg-stone-950 px-3 py-1 text-xs font-bold uppercase text-white">
            Favorita
          </p>
        )}
        {note.isArchived && (
          <p className="rounded-full bg-stone-200 px-3 py-1 text-xs font-bold uppercase text-stone-700">
            Archivada
          </p>
        )}
      </div>
      <h2 className="mt-4 text-xl font-bold">{note.title}</h2>
      <p className="mt-3 text-sm leading-6 text-stone-600">{note.content}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {note.tags.map((tag) => (
          <span
            className="rounded-full border border-stone-200 bg-white px-2 py-1 text-xs font-semibold text-stone-600"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}

export default App
