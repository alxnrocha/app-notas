import { Archive, ArchiveRestore, Pencil, Star, Trash2 } from 'lucide-react'
import type { Note } from '../../types/note'

// Vibrant backgrounds mapping based on category hash
const bgColors = [
  'bg-gradient-to-br from-pink-500 to-rose-400',
  'bg-gradient-to-br from-violet-500 to-purple-400',
  'bg-gradient-to-br from-emerald-500 to-teal-400',
  'bg-gradient-to-br from-amber-400 to-orange-400',
  'bg-gradient-to-br from-blue-500 to-cyan-400',
  'bg-gradient-to-br from-indigo-500 to-blue-500',
]

function getCategoryColor(category: string) {
  let hash = 0
  for (let i = 0; i < category.length; i++) {
    hash = category.charCodeAt(i) + ((hash << 5) - hash)
  }
  return bgColors[Math.abs(hash) % bgColors.length]
}

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
  const bgClass = getCategoryColor(note.category)

  return (
    <article className={`group flex flex-col justify-between rounded-3xl ${bgClass} p-6 shadow-md transition-all hover:shadow-lg hover:-translate-y-1 break-inside-avoid text-white`}>
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <p className="rounded-full bg-white/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white backdrop-blur-sm">
            {note.category}
          </p>
          {note.isFavorite && (
            <p className="rounded-full bg-white/90 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-900 shadow-sm">
              Favorita
            </p>
          )}
          {note.isArchived && (
            <p className="rounded-full bg-black/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-white/90">
              Archivada
            </p>
          )}
        </div>
        <h3 className="mt-4 text-2xl font-bold tracking-tight text-white drop-shadow-sm">{note.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/90 line-clamp-4">
          {note.content}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {note.tags.map((tag) => (
            <span
              className="rounded-full bg-black/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm"
              key={tag}
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-2 border-t border-white/20 pt-4 opacity-100 lg:opacity-0 lg:transition-opacity lg:group-hover:opacity-100">
        <button
          aria-label="Editar"
          className="flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-xl text-white/70 transition-colors hover:bg-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-transparent"
          onClick={() => onEdit(note)}
          title="Editar"
          type="button"
        >
          <Pencil size={18} />
        </button>
        <button
          aria-label={note.isFavorite ? 'Quitar favorita' : 'Marcar favorita'}
          className={`flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-transparent ${note.isFavorite ? 'text-amber-300 hover:bg-white/20 hover:text-amber-200' : 'text-white/70 hover:bg-white/20 hover:text-white'}`}
          onClick={() => onToggleFavorite(note.id)}
          title="Favorita"
          type="button"
        >
          <Star className={note.isFavorite ? 'fill-current' : ''} size={18} />
        </button>
        <button
          aria-label={note.isArchived ? 'Desarchivar' : 'Archivar'}
          className="flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-xl text-white/70 transition-colors hover:bg-white/20 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-transparent"
          onClick={() => onToggleArchive(note.id)}
          title={note.isArchived ? 'Desarchivar' : 'Archivar'}
          type="button"
        >
          {note.isArchived ? <ArchiveRestore size={18} /> : <Archive size={18} />}
        </button>
        <button
          aria-label="Eliminar"
          className="flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-xl text-white/70 transition-colors hover:bg-red-500/80 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-1 focus-visible:ring-offset-transparent"
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
