import type { Note } from '../../types/note'
import { NoteCard } from './NoteCard'

type NoteListProps = {
  notes: Note[]
  onEdit: (note: Note) => void
  onToggleFavorite: (id: string) => void
  onToggleArchive: (id: string) => void
  onDelete: (id: string) => void
}

export function NoteList({
  notes,
  onEdit,
  onToggleFavorite,
  onToggleArchive,
  onDelete,
}: NoteListProps) {
  if (notes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-700 bg-slate-800/50 py-16 text-center">
        <p className="text-lg font-bold text-slate-300">No hay notas que mostrar</p>
        <p className="mt-2 text-sm font-medium text-slate-500">
          Intenta cambiar los filtros o crea una nueva nota.
        </p>
      </div>
    )
  }

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
      {notes.map((note) => (
        <NoteCard
          key={note.id}
          note={note}
          onDelete={onDelete}
          onEdit={onEdit}
          onToggleArchive={onToggleArchive}
          onToggleFavorite={onToggleFavorite}
        />
      ))}
    </div>
  )
}
