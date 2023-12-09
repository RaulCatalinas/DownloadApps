// CSS
import './App.css'

//Components
import NavBar from './components/NavBar'
import SearchApps from './components/SearchApps'

// Hooks
import { useGetData } from '@hooks/useGetData'

export default function App() {
  const { apps, categories } = useGetData()

  return (
    <main>
      <NavBar />
      <SearchApps apps={apps} categories={categories} />
    </main>
  )
}
