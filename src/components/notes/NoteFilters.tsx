import { Filter, Search } from 'lucide-react'
import type { NoteFilters as NoteFiltersType } from '../../types/note'

type NoteFiltersProps = {
  filters: NoteFiltersType
  onFiltersChange: (filters: NoteFiltersType) => void
  categories: string[]
}

export function NoteFilters({ filters, onFiltersChange, categories }: NoteFiltersProps) {
  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onFiltersChange({ ...filters, query: e.target.value })
  }

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFiltersChange({ ...filters, category: e.target.value })
  }

  const handleStatusToggle = (status: 'all' | 'active' | 'archived') => {
    onFiltersChange({ ...filters, status })
  }

  const handleFavoriteToggle = () => {
    onFiltersChange({
      ...filters,
      favorite: filters.favorite === 'all' ? 'favorites' : 'all',
    })
  }

  return (
    <section className="mb-8 flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
            <Filter size={20} strokeWidth={2.25} />
          </div>
          <div>
            <h2 className="font-bold text-stone-950">Explorar notas</h2>
            <p className="text-sm font-medium text-stone-500">
              Encuentra tus apuntes rapidamente
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-xl border border-stone-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center">
        {/* Search */}
        <div className="relative flex-1">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <Search className="h-5 w-5 text-stone-400" />
          </div>
          <input
            type="text"
            placeholder="Buscar por titulo, contenido o etiquetas..."
            className="block w-full rounded-lg border-stone-300 pl-10 focus:border-stone-500 focus:ring-stone-500 sm:text-sm"
            value={filters.query}
            onChange={handleQueryChange}
          />
        </div>

        {/* Category Dropdown */}
        <div className="sm:w-48">
          <select
            className="block w-full rounded-lg border-stone-300 text-sm focus:border-stone-500 focus:ring-stone-500"
            value={filters.category}
            onChange={handleCategoryChange}
          >
            <option value="all">Todas las categorias</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Chips Filters */}
      <div className="flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => handleStatusToggle('all')}
          className={`rounded-full px-4 py-2 sm:py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2 ${
            filters.status === 'all'
              ? 'bg-stone-800 text-white'
              : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          Todas
        </button>
        <button
          type="button"
          onClick={() => handleStatusToggle('active')}
          className={`rounded-full px-4 py-2 sm:py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2 ${
            filters.status === 'active'
              ? 'bg-stone-800 text-white'
              : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          Activas
        </button>
        <button
          type="button"
          onClick={() => handleStatusToggle('archived')}
          className={`rounded-full px-4 py-2 sm:py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-500 focus-visible:ring-offset-2 ${
            filters.status === 'archived'
              ? 'bg-stone-800 text-white'
              : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          Archivadas
        </button>
        <div className="h-4 w-px bg-stone-300"></div>
        <button
          type="button"
          onClick={handleFavoriteToggle}
          className={`flex items-center gap-1.5 rounded-full px-4 py-2 sm:py-1.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 ${
            filters.favorite === 'favorites'
              ? 'bg-amber-100 text-amber-800'
              : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
          }`}
        >
          <span>⭐</span> Favoritas
        </button>
      </div>
    </section>
  )
}
