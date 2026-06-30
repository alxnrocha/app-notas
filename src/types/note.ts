export type Note = {
  id: string
  title: string
  content: string
  category: string
  tags: string[]
  isFavorite: boolean
  isArchived: boolean
  createdAt: string
  updatedAt: string
}

export type NoteInput = {
  title: string
  content: string
  category: string
  tags: string[]
  isFavorite: boolean
}

export type NoteFilters = {
  category: string | 'all'
  tag: string | 'all'
  status: 'active' | 'archived' | 'all'
  favorite: 'all' | 'favorites'
  query: string
}

export type NoteSummary = {
  total: number
  active: number
  archived: number
  favorites: number
}
