import { Plus } from 'lucide-react'

export function NoteFormPlaceholder() {
  return (
    <section className="mb-10 rounded-2xl border border-stone-200 bg-stone-50 p-6 sm:p-8">
      <div className="flex items-center justify-between border-b border-stone-200 pb-4">
        <h2 className="text-xl font-bold">Crear nueva nota</h2>
        <button
          className="inline-flex items-center gap-2 rounded-xl bg-stone-950 px-4 py-2 text-sm font-bold text-white hover:bg-stone-800 transition-colors"
          type="button"
        >
          <Plus size={18} strokeWidth={2.5} />
          <span>Nueva nota</span>
        </button>
      </div>
      <div className="mt-6 flex flex-col items-center justify-center rounded-xl border border-dashed border-stone-300 bg-white py-12">
        <p className="text-sm font-medium text-stone-500">El formulario de creacion estara aqui.</p>
      </div>
    </section>
  )
}
