// Types
import type { Apps } from '@apps-types'

// Css
import '@css/search-apps.css'

export default function SearchApps({ apps }: { apps: Apps[] }) {
  return (
    <div>
      <search className='search-container'>
        <input
          type='text'
          placeholder='Search apps...'
          className='search-input'
          id='search-input'
        />
      </search>
    </div>
  )
}
