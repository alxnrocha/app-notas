import { Plus, Search } from 'lucide-react'
import type { Note, NoteInput } from '../../types/note'
import { NoteForm } from './NoteForm'

type NoteFormPanelProps = {
  isOpen: boolean
  editingNote: Note | null
  onOpen: () => void
  onClose: () => void
  onSave: (note: NoteInput) => void
  searchQuery?: string
  onSearchChange?: (query: string) => void
}

export function NoteFormPanel({
  isOpen,
  editingNote,
  onOpen,
  onClose,
  onSave,
  searchQuery = '',
  onSearchChange,
}: NoteFormPanelProps) {
  if (isOpen) {
    return (
      <section className="mb-10 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl backdrop-blur-xl sm:p-8">
        <div className="mb-6 border-b border-slate-800 pb-4">
          <h2 className="text-xl font-bold text-white">
            {editingNote ? 'Editar nota' : 'Crear nueva nota'}
          </h2>
        </div>
        <NoteForm
          key={editingNote?.id ?? 'new'}
          initialData={editingNote ?? undefined}
          onCancel={onClose}
          onSave={onSave}
        />
      </section>
    )
  }

  return (
    <section className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between bg-slate-900/50 rounded-2xl p-4 border border-slate-800/50 backdrop-blur-md">
      {/* Top Search Bar */}
      <div className="relative flex-1 max-w-xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
          <Search className="h-5 w-5 text-slate-500" />
        </div>
        <input
          type="text"
          placeholder="Search notes, tags, categories..."
          className="block w-full rounded-xl border-none bg-slate-800/80 py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
          value={searchQuery}
          onChange={(e) => onSearchChange?.(e.target.value)}
        />
      </div>

      <button
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-indigo-500/20 transition-all hover:shadow-indigo-500/40 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
        onClick={onOpen}
        type="button"
      >
        <Plus size={18} strokeWidth={2.5} />
        <span>New Note</span>
      </button>
    </section>
  )
}
