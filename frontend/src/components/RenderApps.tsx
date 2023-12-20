// Components
import AppCard from './AppCard'
import RenderCategories from './RenderCategories'

// Types
import type { Apps } from '@apps-types'
import type { Categories } from '@categories-types'

// Hooks
import { useAppFilter } from '@hooks/useAppsFilter'

interface RenderAppsProps {
  apps: Apps[]
  categories: Categories[]
}

export default function RenderApps({ apps, categories }: RenderAppsProps) {
  const { filterApps, setCategory, selectedCategory } = useAppFilter({ apps })
  const filteredApps = filterApps()

  return (
    <div>
      <RenderCategories categories={categories} setCategory={setCategory} />

      <ul className='app-list'>
        {filteredApps.length === 0 ? (
          <h1>
            No apps found. Please try a different search or select another
            operating system.
          </h1>
        ) : (
          filteredApps.map(({ attributes, id }) => {
            const { name, description, logo, categories } = attributes
            const { url: logoURL, alternativeText } = logo.data.attributes
            const { data: categoryData } = categories

            return (
              <li key={id}>
                <AppCard
                  name={name}
                  description={description}
                  categoryData={categoryData}
                  logoURL={logoURL}
                  alternativeText={alternativeText}
                  selectedCategory={selectedCategory}
                  repo={name}
                  executableName={name}
                />
              </li>
            )
          })
        )}
      </ul>
    </div>
  )
}
