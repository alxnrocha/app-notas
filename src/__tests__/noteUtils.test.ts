import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import type { Note, NoteFilters, NoteInput } from '../types/note'
import {
  createNote,
  filterNotes,
  getNoteCategories,
  getNoteSummary,
  getNoteTags,
  normalizeTags,
  removeNote,
  replaceNote,
  toggleNoteArchive,
  toggleNoteFavorite,
} from '../utils/noteUtils'

function buildNote(overrides: Partial<Note> = {}): Note {
  return {
    id: 'note-test-001',
    title: 'Nota de prueba',
    content: 'Contenido de la nota de prueba',
    category: 'Desarrollo',
    tags: ['test', 'frontend'],
    isFavorite: false,
    isArchived: false,
    createdAt: '2026-07-01T08:00:00.000Z',
    updatedAt: '2026-07-01T08:00:00.000Z',
    ...overrides,
  }
}

describe('createNote', () => {
  beforeEach(() => {
    vi.stubGlobal('crypto', { randomUUID: vi.fn(() => 'note-fixed-id') })
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  const input: NoteInput = {
    title: '  Preparar demo  ',
    content: '  Revisar capturas y deploy  ',
    category: '  Trabajo  ',
    tags: [' frontend ', 'react', ' frontend ', ''],
    isFavorite: true,
  }

  it('trims title, content, and category', () => {
    const note = createNote(input)

    expect(note.title).toBe('Preparar demo')
    expect(note.content).toBe('Revisar capturas y deploy')
    expect(note.category).toBe('Trabajo')
  })

  it('normalizes tags (trim, dedupe, drop empty)', () => {
    const note = createNote(input)

    expect(note.tags).toEqual(['frontend', 'react'])
  })

  it('sets isArchived to false and keeps isFavorite', () => {
    const note = createNote(input)

    expect(note.isArchived).toBe(false)
    expect(note.isFavorite).toBe(true)
  })

  it('uses crypto.randomUUID for the id', () => {
    const note = createNote(input)

    expect(note.id).toBe('note-fixed-id')
  })

  it('sets createdAt and updatedAt to the same timestamp', () => {
    const note = createNote(input)

    expect(note.createdAt).toBe(note.updatedAt)
    expect(new Date(note.createdAt).getTime()).not.toBeNaN()
  })
})

describe('replaceNote', () => {
  it('replaces the note with matching id', () => {
    const notes = [buildNote({ id: 'a', title: 'Old' })]
    const updated = buildNote({ id: 'a', title: 'New' })

    const result = replaceNote(notes, updated)

    expect(result).toHaveLength(1)
    expect(result[0].title).toBe('New')
  })

  it('returns unchanged array when id does not match', () => {
    const notes = [buildNote({ id: 'a' })]
    const result = replaceNote(notes, buildNote({ id: 'z' }))

    expect(result).toEqual(notes)
  })
})

describe('removeNote', () => {
  it('removes the note with matching id', () => {
    const notes = [buildNote({ id: 'a' }), buildNote({ id: 'b' })]

    const result = removeNote(notes, 'a')

    expect(result).toHaveLength(1)
    expect(result[0].id).toBe('b')
  })

  it('returns empty array for empty list', () => {
    expect(removeNote([], 'x')).toEqual([])
  })
})

describe('toggleNoteFavorite', () => {
  it('toggles favorite state and bumps updatedAt', () => {
    const note = buildNote({ isFavorite: false })
    const result = toggleNoteFavorite(note)

    expect(result.isFavorite).toBe(true)
    expect(result.updatedAt).not.toBe(note.updatedAt)
  })
})

describe('toggleNoteArchive', () => {
  it('toggles archive state and bumps updatedAt', () => {
    const note = buildNote({ isArchived: false })
    const result = toggleNoteArchive(note)

    expect(result.isArchived).toBe(true)
    expect(result.updatedAt).not.toBe(note.updatedAt)
  })
})

describe('filterNotes', () => {
  const notes: Note[] = [
    buildNote({ id: '1', title: 'Revision diaria', category: 'Trabajo', tags: ['frontend'], isFavorite: false, isArchived: false }),
    buildNote({ id: '2', title: 'Modelo SQL', category: 'Estudio', tags: ['sql', 'datos'], isFavorite: true, isArchived: false }),
    buildNote({ id: '3', title: 'Nota archivada', category: 'Personal', tags: ['revision'], isFavorite: false, isArchived: true }),
    buildNote({ id: '4', title: 'Idea favorita', category: 'Trabajo', tags: ['idea'], isFavorite: true, isArchived: true }),
  ]

  const allFilters: NoteFilters = {
    category: 'all',
    tag: 'all',
    status: 'all',
    favorite: 'all',
    query: '',
  }

  it('returns all notes with default filters', () => {
    expect(filterNotes(notes, allFilters)).toHaveLength(4)
  })

  it('filters by category', () => {
    const result = filterNotes(notes, { ...allFilters, category: 'Trabajo' })

    expect(result).toHaveLength(2)
    expect(result.every((n) => n.category === 'Trabajo')).toBe(true)
  })

  it('filters by tag', () => {
    const result = filterNotes(notes, { ...allFilters, tag: 'sql' })

    expect(result).toHaveLength(1)
    expect(result[0].id).toBe('2')
  })

  it('filters by active status', () => {
    const result = filterNotes(notes, { ...allFilters, status: 'active' })

    expect(result).toHaveLength(2)
    expect(result.every((n) => !n.isArchived)).toBe(true)
  })

  it('filters by archived status', () => {
    const result = filterNotes(notes, { ...allFilters, status: 'archived' })

    expect(result).toHaveLength(2)
    expect(result.every((n) => n.isArchived)).toBe(true)
  })

  it('filters by favorites', () => {
    const result = filterNotes(notes, { ...allFilters, favorite: 'favorites' })

    expect(result).toHaveLength(2)
    expect(result.every((n) => n.isFavorite)).toBe(true)
  })

  it('filters by query matching title', () => {
    const result = filterNotes(notes, { ...allFilters, query: 'revision' })

    expect(result).toHaveLength(2)
  })

  it('filters by query matching content', () => {
    const noteWithContent = buildNote({
      id: '5',
      title: 'Extra',
      content: 'buscar informacion urgente',
    })

    const result = filterNotes([...notes, noteWithContent], {
      ...allFilters,
      query: 'buscar',
    })

    expect(result).toHaveLength(1)
    expect(result[0].id).toBe('5')
  })

  it('filters by query matching tags (accent-insensitive)', () => {
    const result = filterNotes(notes, { ...allFilters, query: 'DÁTOS' })

    expect(result).toHaveLength(1)
    expect(result[0].id).toBe('2')
  })

  it('combines multiple filters', () => {
    const result = filterNotes(notes, { ...allFilters, status: 'archived', favorite: 'favorites' })

    expect(result).toHaveLength(1)
    expect(result[0].id).toBe('4')
  })

  it('returns empty when nothing matches', () => {
    const result = filterNotes(notes, { ...allFilters, query: 'zzzznonexistent' })

    expect(result).toEqual([])
  })
})

describe('getNoteSummary', () => {
  it('computes totals correctly', () => {
    const notes = [
      buildNote({ id: '1', isArchived: false, isFavorite: true }),
      buildNote({ id: '2', isArchived: false, isFavorite: false }),
      buildNote({ id: '3', isArchived: true, isFavorite: true }),
    ]

    expect(getNoteSummary(notes)).toEqual({
      total: 3,
      active: 2,
      archived: 1,
      favorites: 2,
    })
  })

  it('returns zeroes for empty list', () => {
    expect(getNoteSummary([])).toEqual({
      total: 0,
      active: 0,
      archived: 0,
      favorites: 0,
    })
  })
})

describe('getNoteCategories', () => {
  it('returns unique sorted categories', () => {
    const notes = [
      buildNote({ category: 'Trabajo' }),
      buildNote({ category: 'Desarrollo' }),
      buildNote({ category: 'Trabajo' }),
    ]

    expect(getNoteCategories(notes)).toEqual(['Desarrollo', 'Trabajo'])
  })

  it('returns empty array for empty list', () => {
    expect(getNoteCategories([])).toEqual([])
  })
})

describe('getNoteTags', () => {
  it('returns unique sorted tags across all notes', () => {
    const notes = [
      buildNote({ tags: ['react', 'css'] }),
      buildNote({ tags: ['css', 'git'] }),
    ]

    expect(getNoteTags(notes)).toEqual(['css', 'git', 'react'])
  })

  it('returns empty array for empty list', () => {
    expect(getNoteTags([])).toEqual([])
  })
})

describe('normalizeTags', () => {
  it('trims, dedupes, and drops empty tags', () => {
    expect(
      normalizeTags([' react ', 'css', ' react ', '', '  ', 'git']),
    ).toEqual(['react', 'css', 'git'])
  })

  it('preserves order of first occurrence', () => {
    expect(normalizeTags(['b', 'a', 'b', 'c'])).toEqual(['b', 'a', 'c'])
  })

  it('returns empty array for empty input', () => {
    expect(normalizeTags([])).toEqual([])
  })
})