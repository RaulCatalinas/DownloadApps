// Types
import type { Categories } from '@categories-types'

// Constants
import {
  API_CATEGORIES_SEARCH_PARAMS,
  API_CATEGORIES_URL
} from '@constants/categories'

export async function getCategories(): Promise<Categories[]> {
  const res = await fetch(
    `${API_CATEGORIES_URL}${API_CATEGORIES_SEARCH_PARAMS}`
  )
  const { data } = await res.json()

  return data
}
