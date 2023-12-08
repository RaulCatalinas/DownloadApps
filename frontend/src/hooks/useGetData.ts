// API
import { getApps } from '@api/get-apps'
import { getCategories } from '@api/get-categories'

// React
import { useEffect, useState } from 'react'

// Types
import { Apps } from '@apps-types'
import { Categories } from '@categories-types'

export function useGetData() {
  const [apps, setApps] = useState<Apps[]>([])
  const [categories, setCategories] = useState<Categories[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const [appsResult, categoriesResult] = await Promise.allSettled([
        getApps(),
        getCategories()
      ])

      if (appsResult.status === 'fulfilled') setApps(appsResult.value)
      else console.error(`Error fetching apps: ${appsResult.reason}`)

      if (categoriesResult.status === 'fulfilled')
        setCategories(categoriesResult.value)
      else
        console.error(`Error fetching categories: ${categoriesResult.reason}`)
    }

    fetchData()
  }, [])

  return { apps, categories }
}
