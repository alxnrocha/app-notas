import { Archive, ArchiveRestore, Pencil, Star, Trash2 } from 'lucide-react'
import type { Note } from '../../types/note'

type NoteCardProps = {
  note: Note
  onEdit: (note: Note) => void
  onToggleFavorite: (id: string) => void
  onToggleArchive: (id: string) => void
  onDelete: (id: string) => void
}

export function NoteCard({
  note,
  onEdit,
  onToggleFavorite,
  onToggleArchive,
  onDelete,
}: NoteCardProps) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-stone-200 bg-stone-50 p-5 transition-shadow hover:shadow-sm">
      <div>
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
        <p className="mt-3 text-sm leading-6 text-stone-600 line-clamp-3">
          {note.content}
        </p>
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
      </div>

      <div className="mt-6 flex items-center justify-end gap-2 border-t border-stone-200 pt-4 opacity-100 sm:opacity-0 sm:transition-opacity sm:group-hover:opacity-100">
        <button
          aria-label="Editar"
          className="flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-xl text-stone-400 transition-colors hover:bg-stone-200 hover:text-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-1"
          onClick={() => onEdit(note)}
          title="Editar"
          type="button"
        >
          <Pencil size={18} />
        </button>
        <button
          aria-label={note.isFavorite ? 'Quitar favorita' : 'Marcar favorita'}
          className={`flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-1 ${note.isFavorite ? 'text-amber-500 hover:bg-amber-100 hover:text-amber-600' : 'text-stone-400 hover:bg-stone-200 hover:text-stone-950'}`}
          onClick={() => onToggleFavorite(note.id)}
          title="Favorita"
          type="button"
        >
          <Star className={note.isFavorite ? 'fill-current' : ''} size={18} />
        </button>
        <button
          aria-label={note.isArchived ? 'Desarchivar' : 'Archivar'}
          className="flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-xl text-stone-400 transition-colors hover:bg-stone-200 hover:text-stone-950 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-1"
          onClick={() => onToggleArchive(note.id)}
          title={note.isArchived ? 'Desarchivar' : 'Archivar'}
          type="button"
        >
          {note.isArchived ? <ArchiveRestore size={18} /> : <Archive size={18} />}
        </button>
        <button
          aria-label="Eliminar"
          className="flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-xl text-stone-400 transition-colors hover:bg-red-100 hover:text-red-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-1"
          onClick={() => onDelete(note.id)}
          title="Eliminar"
          type="button"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </article>
  )
}
