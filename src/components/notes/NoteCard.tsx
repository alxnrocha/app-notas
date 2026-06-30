import type { Note } from '../../types/note'

export function NoteCard({ note }: { note: Note }) {
  return (
    <article className="rounded-2xl border border-stone-200 bg-stone-50 p-5 transition-shadow hover:shadow-sm">
      <div className="flex flex-wrap items-center gap-2">
        <p className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-900">
          {note.category}
        </p>
        {note.isFavorite && (
          <p className="rounded-full bg-stone-950 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white">
            Favorita
          </p>
        )}
        {note.isArchived && (
          <p className="rounded-full bg-stone-200 px-3 py-1 text-xs font-bold uppercase tracking-wide text-stone-700">
            Archivada
          </p>
        )}
      </div>
      <h3 className="mt-4 text-xl font-bold text-stone-950">{note.title}</h3>
      <p className="mt-3 text-sm leading-6 text-stone-600 line-clamp-3">{note.content}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {note.tags.map((tag) => (
          <span
            className="rounded-full border border-stone-200 bg-white px-2.5 py-1 text-xs font-semibold text-stone-600"
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
}
