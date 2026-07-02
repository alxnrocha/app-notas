import { useState } from 'react'
import { Star } from 'lucide-react'
import type { NoteInput } from '../../types/note'

type NoteFormProps = {
  initialData?: NoteInput
  onSave: (note: NoteInput) => void
  onCancel: () => void
}

export function NoteForm({ initialData, onSave, onCancel }: NoteFormProps) {
  const [title, setTitle] = useState(initialData?.title ?? '')
  const [content, setContent] = useState(initialData?.content ?? '')
  const [category, setCategory] = useState(initialData?.category ?? '')
  const [tagsInput, setTagsInput] = useState(initialData?.tags.join(', ') ?? '')
  const [isFavorite, setIsFavorite] = useState(initialData?.isFavorite ?? false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const newErrors: Record<string, string> = {}
    if (!title.trim()) newErrors.title = 'El título es obligatorio'
    if (!content.trim()) newErrors.content = 'El contenido es obligatorio'
    if (!category.trim()) newErrors.category = 'La categoría es obligatoria'

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }

    onSave({
      title: title.trim(),
      content: content.trim(),
      category: category.trim(),
      tags: tagsInput.split(',').map((t) => t.trim()).filter(Boolean),
      isFavorite,
    })
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-bold text-slate-300" htmlFor="title">
            Título
          </label>
          <input
            className={`w-full rounded-xl border bg-slate-800/50 px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 ${errors.title ? 'border-red-500' : 'border-slate-700'}`}
            id="title"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Ej: Ideas para el portfolio"
            type="text"
            value={title}
          />
          {errors.title && <p className="mt-1.5 text-sm font-semibold text-red-400">{errors.title}</p>}
        </div>

        <div className="sm:col-span-2">
          <label className="mb-2 block text-sm font-bold text-slate-300" htmlFor="content">
            Contenido
          </label>
          <textarea
            className={`min-h-[120px] w-full resize-y rounded-xl border bg-slate-800/50 px-4 py-3 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 ${errors.content ? 'border-red-500' : 'border-slate-700'}`}
            id="content"
            onChange={(e) => setContent(e.target.value)}
            placeholder="Escribe tus notas aquí..."
            value={content}
          />
          {errors.content && <p className="mt-1.5 text-sm font-semibold text-red-400">{errors.content}</p>}
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-300" htmlFor="category">
            Categoría
          </label>
          <input
            className={`w-full rounded-xl border bg-slate-800/50 px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 ${errors.category ? 'border-red-500' : 'border-slate-700'}`}
            id="category"
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Ej: Trabajo, Personal"
            type="text"
            value={category}
          />
          {errors.category && <p className="mt-1.5 text-sm font-semibold text-red-400">{errors.category}</p>}
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold text-slate-300" htmlFor="tags">
            Etiquetas <span className="font-normal text-slate-500">(separadas por coma)</span>
          </label>
          <input
            className="w-full rounded-xl border border-slate-700 bg-slate-800/50 px-4 py-2.5 text-white placeholder:text-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
            id="tags"
            onChange={(e) => setTagsInput(e.target.value)}
            placeholder="Ej: frontend, react, diseño"
            type="text"
            value={tagsInput}
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          className={`inline-flex items-center justify-center rounded-xl border p-2.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2 ${isFavorite ? 'border-amber-500/50 bg-amber-500/10 text-amber-400' : 'border-slate-700 bg-slate-800/50 text-slate-500 hover:bg-slate-700'}`}
          onClick={() => setIsFavorite(!isFavorite)}
          type="button"
          aria-pressed={isFavorite}
          aria-label="Marcar como favorita"
        >
          <Star className={isFavorite ? 'fill-current' : ''} size={20} />
        </button>
        <span className="text-sm font-semibold text-slate-300">
          Marcar como favorita
        </span>
      </div>

      <div className="mt-4 flex items-center justify-end gap-3 border-t border-slate-800 pt-6">
        <button
          className="rounded-xl px-5 py-2.5 text-sm font-bold text-slate-400 transition-colors hover:bg-slate-800 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
          onClick={onCancel}
          type="button"
        >
          Cancelar
        </button>
        <button
          className="rounded-xl bg-indigo-500 px-6 py-2.5 text-sm font-bold text-white transition-colors hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2"
          type="submit"
        >
          Guardar nota
        </button>
      </div>
    </form>
  )
}
