import { Plus } from 'lucide-react'
import { useState } from 'react'
import type { NoteInput } from '../../types/note'
import { NoteForm } from './NoteForm'

type NoteFormPanelProps = {
  onSave: (note: NoteInput) => void
}

export function NoteFormPanel({ onSave }: NoteFormPanelProps) {
  const [isOpen, setIsOpen] = useState(false)

  if (isOpen) {
    return (
      <section className="mb-10 rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
        <div className="mb-6 border-b border-stone-100 pb-4">
          <h2 className="text-xl font-bold">Crear nueva nota</h2>
        </div>
        <NoteForm
          onCancel={() => setIsOpen(false)}
          onSave={(note) => {
            onSave(note)
            setIsOpen(false)
          }}
        />
      </section>
    )
  }

  return (
    <section className="mb-10 rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:p-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold">Tus notas</h2>
          <p className="mt-1 text-sm font-medium text-stone-500">
            Captura tus ideas antes de que se escapen
          </p>
        </div>
        <button
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-stone-950 px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-stone-800"
          onClick={() => setIsOpen(true)}
          type="button"
        >
          <Plus size={18} strokeWidth={2.5} />
          <span>Nueva nota</span>
        </button>
      </div>
    </section>
  )
}
