// CSS
import '@css/apps-card.css'

// Types
import type { CategoriesDatum } from '@apps-types'
import type { Category } from '@categories-types'

// Constants
import { HOST } from '@constants/host'

// Components
import DownloadButton from './DownloadButton'
import RenderImage from './RenderImage'

// Hooks
import { useDownloadURL } from '@hooks/useDownloadURL'

interface AppsCardProps {
  name: string
  description: string
  categoryData: CategoriesDatum[]
  logoURL: string
  alternativeText: string
  selectedCategory: Category
  repo: string
  executableName: string
}

export default function AppsCard({
  name,
  description,
  categoryData,
  logoURL,
  alternativeText,
  selectedCategory,
  repo,
  executableName
}: AppsCardProps) {
  const { downloadURL } = useDownloadURL({
    repo,
    executableName,
    selectedCategory
  })

  return (
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

      <DownloadButton downloadURL={downloadURL} />
    </div>
  )
}
