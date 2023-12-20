//React
import { useEffect, useState } from 'react'

// Utils
import { LocalStorageManager } from '@utils/local-storage-manager'

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false)
  const localStorageManager = new LocalStorageManager()

  const storedTheme = localStorageManager.getItem('theme')

  useEffect(() => {
    if (storedTheme) setDarkMode(storedTheme === 'dark')

    if (storedTheme === 'dark') document.body.classList.add('dark-mode')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const toggleTheme = () => {
    document.body.classList.toggle('dark-mode')

    const darkModeIsActivated = document.body.classList.contains('dark-mode')

    setDarkMode(darkModeIsActivated)

    const themeToSave = darkModeIsActivated ? 'dark' : 'light'

    localStorageManager.setItem({ key: 'theme', value: themeToSave })
  }

  const setDarkTheme = () => {
    setDarkMode(true)

    document.body.classList.add('dark-mode')

    localStorageManager.setItem({ key: 'theme', value: 'dark' })
  }

  const setLightTheme = () => {
    setDarkMode(false)

    document.body.classList.remove('dark-mode')

    localStorageManager.setItem({ key: 'theme', value: 'light' })
  }

  return { darkMode, toggleTheme, setDarkTheme, setLightTheme }
}
