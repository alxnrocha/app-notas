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
} from './utils/noteUtils'

function App() {
  const [notes, setNotes] = useState<Note[]>(demoNotes)

  const summary = getNoteSummary(notes)
  const categories = getNoteCategories(notes)
  const tags = getNoteTags(notes)

  const handleCreateNote = (input: NoteInput) => {
    const newNote = createNote(input)
    setNotes([newNote, ...notes])
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
            <NoteFormPanel onSave={handleCreateNote} />
            <NoteFiltersPlaceholder />
            <NoteList notes={notes} />
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
