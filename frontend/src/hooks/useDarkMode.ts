import { useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function useDarkMode() {
  const [darkMode, setDarkMode] = useState(false)
  const { getItem, setItem } = useLocalStorage()

  const storedTheme = getItem('theme')

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

    setItem({ key: 'theme', value: themeToSave })
  }

  const setDarkTheme = () => {
    setDarkMode(true)

    document.body.classList.add('dark-mode')

    setItem({ key: 'theme', value: 'dark' })
  }

  const setLightTheme = () => {
    setDarkMode(false)

    document.body.classList.remove('dark-mode')

    setItem({ key: 'theme', value: 'light' })
  }

  return { darkMode, toggleTheme, setDarkTheme, setLightTheme }
}
