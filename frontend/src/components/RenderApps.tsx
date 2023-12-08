// Css
import '@css/render-apps.css'

// Components
import DownloadButton from './DownloadButton'
import RenderCategories from './RenderCategories'
import RenderImage from './RenderImage'

// Constants
import { HOST } from '@constants/host'

// Types
import type { Apps } from '@apps-types'

// Hooks
import { Categories } from '@categories-types'
import { useAppFilter } from '@hooks/useAppsFilter'

interface RenderAppsProps {
  apps: Apps[]
  categories: Categories[]
}

export default function RenderApps({ apps, categories }: RenderAppsProps) {
  const { filteredApps, setCategory } = useAppFilter({ apps })

  return (
    <div>
      <RenderCategories categories={categories} setCategory={setCategory} />

      <ul className='app-list'>
        {filteredApps.length === 0 ? (
          <h1>No apps available for this operating system</h1>
        ) : (
          filteredApps.map(({ attributes, id }) => {
            const { name, description, logo, categories } = attributes
            const { url: logoURL, alternativeText } = logo.data.attributes
            const { data: categoryData } = categories

            return (
              <li key={id}>
                <div className='app-card'>
                  <h1>{name}</h1>
                  <p>{description}</p>
                  <span className='os-list'>
                    {categoryData.map(({ attributes, id }) => (
                      <p key={id}>{attributes.name}</p>
                    ))}
                  </span>
                  <RenderImage
                    src={`${HOST}${logoURL}`}
                    alt={alternativeText}
                    width={110}
                    margin={12}
                  />
                  <DownloadButton downloadURL='Cambiar por la URL de descarga desde GitHub' />
                </div>
              </li>
            )
          })
        )}
      </ul>
    </div>
  )
}
