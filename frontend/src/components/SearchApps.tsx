// Types
import type { Apps } from '@apps-types'
import type { Categories } from '@categories-types'

// Css
import '@css/search-apps.css'

// Hooks
import { useAppsSearch } from '@hooks/useAppsSearch'

// React
import { ChangeEvent } from 'react'

// Components
import RenderApps from './RenderApps'

interface SearchAppsProps {
  apps: Apps[]
  categories: Categories[]
}

export default function SearchApps({ apps, categories }: SearchAppsProps) {
  const { searchApps, setSearch } = useAppsSearch({ apps })

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target

    setSearch(value)
  }

  return (
    <div>
      <search className='search-container'>
        <input
          type='search'
          placeholder='Search apps...'
          className='search-input'
          id='search-input'
          onChange={handleSearch}
        />
      </search>

      <RenderApps apps={searchApps()} categories={categories} />
    </div>
  )
}
