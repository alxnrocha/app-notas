import type { Note } from '../../types/note'
import { NoteCard } from './NoteCard'

type NoteListProps = {
  notes: Note[]
}

export function NoteList({ notes }: NoteListProps) {
  if (notes.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-stone-300 bg-stone-50 py-16 text-center">
        <p className="text-lg font-bold text-stone-600">No hay notas que mostrar</p>
        <p className="mt-2 text-sm font-medium text-stone-500">
          Intenta cambiar los filtros o crea una nueva nota.
        </p>
      </div>
    )
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <NoteCard key={note.id} note={note} />
      ))}
    </div>
  )
}
