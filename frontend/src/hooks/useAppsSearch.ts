// Types
import { Apps } from '@apps-types'

// React
import { useState } from 'react'

interface UseAppsSearchProps {
  apps: Apps[]
}

export function useAppsSearch({ apps }: UseAppsSearchProps) {
  const [searchTerm, setSearchTerm] = useState('')

  const searchApps = () => {
    if (!searchTerm) return apps

    return [...apps].filter(({ attributes }) => {
      const { name, description } = attributes
      const searchTermLower = searchTerm.toLowerCase()

      return (
        name.toLowerCase().includes(searchTermLower) ||
        description.toLowerCase().includes(searchTermLower)
      )
    })
  }

  const setSearch = (term: string) => {
    setSearchTerm(term)
  }

  return { searchApps, setSearch }
}
