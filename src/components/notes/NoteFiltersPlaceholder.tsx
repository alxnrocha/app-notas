import { Filter } from 'lucide-react'

export function NoteFiltersPlaceholder() {
  return (
    <section className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
          <Filter size={20} strokeWidth={2.25} />
        </div>
        <div>
          <h2 className="font-bold text-stone-950">Explorar notas</h2>
          <p className="text-sm font-medium text-stone-500">Encuentra tus apuntes rapidamente</p>
        </div>
      </div>
      <div className="flex h-12 w-full items-center justify-center rounded-xl border border-dashed border-stone-300 bg-stone-50 sm:w-72">
        <p className="text-sm font-medium text-stone-400">Controles de filtro y busqueda aqui</p>
      </div>
    </section>
  )
}
