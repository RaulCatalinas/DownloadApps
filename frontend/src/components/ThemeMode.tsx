//Icons
import MoonIcon from '@assets/MoonIcon.svg'
import SunIcon from '@assets/SunIcon.svg'

// Components
import RenderIcon from './RenderIcon'

// CSS
import '@css/theme-mode.css'

// Hooks
import { useDarkMode } from '@hooks/useDarkMode'

export default function ThemeMode() {
  const { darkMode, toggleTheme, setDarkTheme, setLightTheme } = useDarkMode()

  return (
    <div className='theme-toggle'>
      <button onClick={setLightTheme}>
        <RenderIcon src={SunIcon} alt='Sun' width={52} margin={10} />
      </button>
      <label className='switch' htmlFor='modeToggle'>
        <input
          type='checkbox'
          id='modeToggle'
          checked={darkMode}
          onChange={toggleTheme}
        />
        <span className='slider'></span>
      </label>
      <button onClick={setDarkTheme}>
        <RenderIcon src={MoonIcon} alt='Moon' width={45} margin={10} />
      </button>
    </div>
  )
}
