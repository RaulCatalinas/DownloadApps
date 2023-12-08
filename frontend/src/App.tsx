// CSS
import './App.css'

//Components
import NavBar from './components/NavBar'
import RenderApps from './components/RenderApps'
import SearchApps from './components/SearchApps'

// Hooks
import { useGetData } from '@hooks/useGetData'

export default function App() {
  const { apps, categories } = useGetData()

  return (
    <main>
      <NavBar />
      <SearchApps apps={apps} />
      <RenderApps apps={apps} categories={categories} />
    </main>
  )
}
