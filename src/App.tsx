import { useEffect, useState } from 'react'
import { Header } from './components/layout/Header'
import { HeroSummary } from './components/layout/HeroSummary'
import { NoteFilters } from './components/notes/NoteFilters'
import { NoteFormPanel } from './components/notes/NoteFormPanel'
import { NoteList } from './components/notes/NoteList'
import { demoNotes } from './data/demoNotes'
import type { Note, NoteFilters as NoteFiltersType, NoteInput } from './types/note'
import {
  createNote,
  filterNotes,
  getNoteCategories,
  getNoteSummary,
  getNoteTags,
  removeNote,
  replaceNote,
  toggleNoteArchive,
  toggleNoteFavorite,
} from './utils/noteUtils'

const STORAGE_KEY = 'app-notas-data'

function App() {
  const [notes, setNotes] = useState<Note[]>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored) {
        return JSON.parse(stored)
      }
    } catch (e) {
      console.error('Error loading notes from localStorage:', e)
    }
    return demoNotes
  })
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [editingNote, setEditingNote] = useState<Note | null>(null)
  const [filters, setFilters] = useState<NoteFiltersType>({
    query: '',
    category: 'all',
    tag: 'all',
    status: 'all',
    favorite: 'all',
  })

  const filteredNotes = filterNotes(notes, filters)
  const summary = getNoteSummary(notes)
  const categories = getNoteCategories(notes)
  const tags = getNoteTags(notes)

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes))
  }, [notes])

  useEffect(() => {
    // Auto-close mobile menu when filters change so user sees the result
    setIsMobileMenuOpen(false)
  }, [filters])

  const handleSaveNote = (input: NoteInput) => {
    if (editingNote) {
      const updatedNote = {
        ...editingNote,
        ...input,
        updatedAt: new Date().toISOString(),
      }
      setNotes(replaceNote(notes, updatedNote))
      setEditingNote(null)
    } else {
      const newNote = createNote(input)
      setNotes([newNote, ...notes])
    }
    setIsFormOpen(false)
  }

  const handleEditNote = (note: Note) => {
    setEditingNote(note)
    setIsFormOpen(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleToggleFavorite = (id: string) => {
    const note = notes.find((n) => n.id === id)
    if (note) setNotes(replaceNote(notes, toggleNoteFavorite(note)))
  }

  const handleToggleArchive = (id: string) => {
    const note = notes.find((n) => n.id === id)
    if (note) setNotes(replaceNote(notes, toggleNoteArchive(note)))
  }

  const handleDeleteNote = (id: string) => {
    setNotes(removeNote(notes, id))
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col md:flex-row overflow-hidden relative">
      {/* Background ambient light effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-rose-500/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      {/* Sidebar */}
      <aside className={`w-full md:w-64 lg:w-72 flex-shrink-0 border-b md:border-b-0 md:border-r border-slate-800 bg-slate-950/50 backdrop-blur-xl z-10 flex flex-col transition-all ${isMobileMenuOpen ? 'h-screen' : 'h-auto'} md:h-screen overflow-y-auto`}>
        <Header 
          isMobileMenuOpen={isMobileMenuOpen} 
          onToggleMobileMenu={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
        />
        <div className={`px-5 py-6 flex-1 flex-col gap-8 md:flex ${isMobileMenuOpen ? 'flex' : 'hidden'}`}>
          <HeroSummary
            summary={summary}
            totalCategories={categories.length}
            totalTags={tags.length}
          />
          <NoteFilters 
            filters={filters} 
            onFiltersChange={setFilters} 
            categories={categories} 
            tags={tags}
          />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto z-10" id="inicio">
        <div className="flex-1 px-5 py-8 sm:px-8 lg:px-12 w-full max-w-[1600px] mx-auto">
          <div id="notas">
            <NoteFormPanel
              editingNote={editingNote}
              isOpen={isFormOpen}
              onClose={() => {
                setIsFormOpen(false)
                setEditingNote(null)
              }}
              onOpen={() => setIsFormOpen(true)}
              onSave={handleSaveNote}
              searchQuery={filters.query}
              onSearchChange={(q) => setFilters({...filters, query: q})}
            />
            
            <div className="mt-8">
              <NoteList
                notes={filteredNotes}
                onDelete={handleDeleteNote}
                onEdit={handleEditNote}
                onToggleArchive={handleToggleArchive}
                onToggleFavorite={handleToggleFavorite}
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
