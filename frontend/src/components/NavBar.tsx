// CSS
import '@css/nav-bar.css'

// Components
import ShareButton from './ShareButton'
import ThemeMode from './ThemeMode'

export default function NavBar() {
  return (
    <nav>
      <ShareButton />
      <ThemeMode />
    </nav>
  )
}
