import { useState } from 'react'
import { Header } from './components/layout/Header'
import { HeroSummary } from './components/layout/HeroSummary'
import { NoteFiltersPlaceholder } from './components/notes/NoteFiltersPlaceholder'
import { NoteFormPanel } from './components/notes/NoteFormPanel'
import { NoteList } from './components/notes/NoteList'
import { demoNotes } from './data/demoNotes'
import type { Note, NoteInput } from './types/note'
import {
  createNote,
  getNoteCategories,
  getNoteSummary,
  getNoteTags,
  removeNote,
  replaceNote,
  toggleNoteArchive,
  toggleNoteFavorite,
} from './utils/noteUtils'

function App() {
  const [notes, setNotes] = useState<Note[]>(demoNotes)
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [editingNote, setEditingNote] = useState<Note | null>(null)

  const summary = getNoteSummary(notes)
  const categories = getNoteCategories(notes)
  const tags = getNoteTags(notes)

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
    <div className="min-h-screen bg-stone-50 text-stone-950">
      <Header />

      <main id="inicio">
        <HeroSummary
          summary={summary}
          totalCategories={categories.length}
          totalTags={tags.length}
        />

        <div className="bg-white" id="notas">
          <section className="mx-auto max-w-7xl px-5 py-10 sm:px-8">
            <NoteFormPanel
              editingNote={editingNote}
              isOpen={isFormOpen}
              onClose={() => {
                setIsFormOpen(false)
                setEditingNote(null)
              }}
              onOpen={() => setIsFormOpen(true)}
              onSave={handleSaveNote}
            />
            <NoteFiltersPlaceholder />
            <NoteList
              notes={notes}
              onDelete={handleDeleteNote}
              onEdit={handleEditNote}
              onToggleArchive={handleToggleArchive}
              onToggleFavorite={handleToggleFavorite}
            />
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
