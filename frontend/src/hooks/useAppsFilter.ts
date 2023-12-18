// React
import { useState } from 'react'

// Types
import type { Apps } from '@apps-types'
import type { Category } from '@categories-types'

interface UseAppFilterProps {
  apps: Apps[]
}

export function useAppFilter({ apps }: UseAppFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All')

  const filterApps = () => {
    if (selectedCategory === 'All') return apps
    else {
      return [...apps].filter(({ attributes }) => {
        const { data: categoryData } = attributes.categories

        return categoryData.some(
          category => category.attributes.name === selectedCategory
        )
      })
    }
  }

  const setCategory = (category: Category) => {
    setSelectedCategory(category)
  }

  return { filterApps, setCategory, selectedCategory }
}
