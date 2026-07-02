import { Archive, LayoutGrid, Star, Tag, Folder } from 'lucide-react'
import type { NoteFilters as NoteFiltersType } from '../../types/note'

type NoteFiltersProps = {
  filters: NoteFiltersType
  onFiltersChange: (filters: NoteFiltersType) => void
  categories: string[]
  tags: string[]
}

export function NoteFilters({ filters, onFiltersChange, categories, tags }: NoteFiltersProps) {
  const handleCategoryChange = (category: string) => {
    onFiltersChange({ ...filters, category })
  }

  const handleTagChange = (tag: string) => {
    onFiltersChange({ ...filters, tag })
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
    <nav className="flex flex-col gap-8">
      {/* Main Views */}
      <div className="flex flex-col gap-1">
        <button
          onClick={() => {
            handleStatusToggle('all')
            if (filters.favorite !== 'all') handleFavoriteToggle()
          }}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            filters.status === 'all' && filters.favorite === 'all'
              ? 'bg-indigo-500/10 text-indigo-400'
              : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
          }`}
        >
          <LayoutGrid size={18} />
          Dashboard
        </button>
        
        <button
          onClick={() => {
            handleStatusToggle('active')
            if (filters.favorite !== 'all') handleFavoriteToggle()
          }}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            filters.status === 'active' && filters.favorite === 'all'
              ? 'bg-indigo-500/10 text-indigo-400'
              : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
          }`}
        >
          <Folder size={18} />
          Active Notes
        </button>

        <button
          onClick={() => {
            handleFavoriteToggle()
          }}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            filters.favorite === 'favorites'
              ? 'bg-amber-500/10 text-amber-400'
              : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
          }`}
        >
          <Star size={18} />
          Favorites
        </button>

        <button
          onClick={() => {
            handleStatusToggle('archived')
            if (filters.favorite !== 'all') handleFavoriteToggle()
          }}
          className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
            filters.status === 'archived' && filters.favorite === 'all'
              ? 'bg-indigo-500/10 text-indigo-400'
              : 'text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
          }`}
        >
          <Archive size={18} />
          Archived
        </button>
      </div>

      {/* Categories */}
      {categories.length > 0 && (
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 px-3">
            Categories
          </h3>
          <div className="flex flex-col gap-1">
            <button
              onClick={() => handleCategoryChange('all')}
              className={`flex items-center gap-3 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                filters.category === 'all'
                  ? 'text-indigo-400 font-medium'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`flex items-center gap-3 px-3 py-1.5 rounded-lg text-sm transition-colors text-left ${
                  filters.category === cat
                    ? 'text-indigo-400 font-medium'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Tags */}
      {tags.length > 0 && (
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 px-3">
            Tags
          </h3>
          <div className="flex flex-col gap-1">
            <button
              onClick={() => handleTagChange('all')}
              className={`flex items-center gap-3 px-3 py-1.5 rounded-lg text-sm transition-colors ${
                filters.tag === 'all'
                  ? 'text-indigo-400 font-medium'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Tag size={14} />
              All Tags
            </button>
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => handleTagChange(t)}
                className={`flex items-center gap-3 px-3 py-1.5 rounded-lg text-sm transition-colors text-left ${
                  filters.tag === t
                    ? 'text-indigo-400 font-medium'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Tag size={14} />
                {t}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
