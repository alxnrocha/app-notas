import type { Note } from '../types/note'

export const demoNotes: Note[] = [
  {
    id: 'note-portfolio-ideas',
    title: 'Ideas para portfolio',
    content:
      'Organizar mejoras de README, capturas y deploy de cada proyecto del portfolio.',
    category: 'Trabajo',
    tags: ['portfolio', 'frontend', 'github'],
    isFavorite: true,
    isArchived: false,
    createdAt: '2026-06-20T09:00:00.000Z',
    updatedAt: '2026-06-20T09:00:00.000Z',
  },
  {
    id: 'note-sql-model',
    title: 'Modelo SQL de notas',
    content:
      'Definir tablas para notas, categorias, etiquetas y relaciones de muchos a muchos.',
    category: 'Estudio',
    tags: ['sql', 'mysql', 'datos'],
    isFavorite: false,
    isArchived: false,
    createdAt: '2026-06-21T11:30:00.000Z',
    updatedAt: '2026-06-21T11:30:00.000Z',
  },
  {
    id: 'note-weekly-review',
    title: 'Recordatorio semanal',
    content:
      'Revisar pendientes, archivar notas antiguas y priorizar ideas activas.',
    category: 'Personal',
    tags: ['revision', 'habitos'],
    isFavorite: false,
    isArchived: true,
    createdAt: '2026-06-22T17:45:00.000Z',
    updatedAt: '2026-06-25T10:10:00.000Z',
  },
]
