// Types
import type { Category } from '@categories-types'

// Utils
import { getDownloadURL } from '@utils/get-download-url'
import { getUserOS } from '@utils/get-user-os'

// React
import { useEffect, useState } from 'react'

interface UseDownloadURLProps {
  repo: string
  selectedCategory: Category
  executableName: string
}

export function useDownloadURL({
  repo,
  executableName,
  selectedCategory
}: UseDownloadURLProps) {
  const [downloadURL, setDownloadURL] = useState('')

  useEffect(() => {
    const handleGetDownloadURL = async () => {
      try {
        const url = await getDownloadURL({
          repo,
          os: selectedCategory === 'All' ? getUserOS() : selectedCategory,
          executableName
        })

        setDownloadURL(url)
      } catch (err) {
        console.error(err)

        setDownloadURL('')
      }
    }

    handleGetDownloadURL()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory])

  return { downloadURL }
}
