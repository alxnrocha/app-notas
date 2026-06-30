import type { Note, NoteFilters, NoteInput, NoteSummary } from '../types/note'

export function createNote(input: NoteInput): Note {
  const now = new Date().toISOString()

  return {
    id: crypto.randomUUID(),
    title: input.title.trim(),
    content: input.content.trim(),
    category: input.category.trim(),
    tags: normalizeTags(input.tags),
    isFavorite: input.isFavorite,
    isArchived: false,
    createdAt: now,
    updatedAt: now,
  }
}

export function replaceNote(notes: Note[], updatedNote: Note): Note[] {
  return notes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
}

export function removeNote(notes: Note[], noteId: string): Note[] {
  return notes.filter((note) => note.id !== noteId)
}

export function toggleNoteFavorite(note: Note): Note {
  return {
    ...note,
    isFavorite: !note.isFavorite,
    updatedAt: new Date().toISOString(),
  }
}

export function toggleNoteArchive(note: Note): Note {
  return {
    ...note,
    isArchived: !note.isArchived,
    updatedAt: new Date().toISOString(),
  }
}

export function filterNotes(notes: Note[], filters: NoteFilters): Note[] {
  const query = normalizeSearchValue(filters.query)

  return notes.filter((note) => {
    const matchesCategory =
      filters.category === 'all' || note.category === filters.category
    const matchesTag = filters.tag === 'all' || note.tags.includes(filters.tag)
    const matchesStatus =
      filters.status === 'all' ||
      (filters.status === 'active' && !note.isArchived) ||
      (filters.status === 'archived' && note.isArchived)
    const matchesFavorite =
      filters.favorite === 'all' ||
      (filters.favorite === 'favorites' && note.isFavorite)
    const searchableText = normalizeSearchValue(
      `${note.title} ${note.content} ${note.category} ${note.tags.join(' ')}`,
    )
    const matchesQuery = query.length === 0 || searchableText.includes(query)

    return (
      matchesCategory &&
      matchesTag &&
      matchesStatus &&
      matchesFavorite &&
      matchesQuery
    )
  })
}

export function getNoteSummary(notes: Note[]): NoteSummary {
  return notes.reduce<NoteSummary>(
    (summary, note) => ({
      total: summary.total + 1,
      active: summary.active + (note.isArchived ? 0 : 1),
      archived: summary.archived + (note.isArchived ? 1 : 0),
      favorites: summary.favorites + (note.isFavorite ? 1 : 0),
    }),
    {
      total: 0,
      active: 0,
      archived: 0,
      favorites: 0,
    },
  )
}

export function getNoteCategories(notes: Note[]): string[] {
  return Array.from(new Set(notes.map((note) => note.category))).sort((a, b) =>
    a.localeCompare(b),
  )
}

export function getNoteTags(notes: Note[]): string[] {
  return Array.from(new Set(notes.flatMap((note) => note.tags))).sort((a, b) =>
    a.localeCompare(b),
  )
}

export function normalizeTags(tags: string[]): string[] {
  return Array.from(
    new Set(
      tags
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0),
    ),
  )
}

function normalizeSearchValue(value: string): string {
  return value
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim()
}
