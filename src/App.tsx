import { Header } from './components/layout/Header'
import { HeroSummary } from './components/layout/HeroSummary'
import { NoteFiltersPlaceholder } from './components/notes/NoteFiltersPlaceholder'
import { NoteFormPlaceholder } from './components/notes/NoteFormPlaceholder'
import { NoteList } from './components/notes/NoteList'
import { demoNotes } from './data/demoNotes'
import {
  getNoteCategories,
  getNoteSummary,
  getNoteTags,
} from './utils/noteUtils'

function App() {
  const summary = getNoteSummary(demoNotes)
  const categories = getNoteCategories(demoNotes)
  const tags = getNoteTags(demoNotes)

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
            <NoteFormPlaceholder />
            <NoteFiltersPlaceholder />
            <NoteList notes={demoNotes} />
          </section>
        </div>
      </main>
    </div>
  )
}

export default App
