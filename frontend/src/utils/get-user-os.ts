// Types
import type { Category } from '@categories-types'

// Third-Party libraries
import { os } from 'platform'

// Utils
import { isCategory } from './category-utils'

export function getUserOS(): Category {
  const osFamily = os.family

  if (
    osFamily === 'Ubuntu' ||
    osFamily === 'Debian' ||
    osFamily === 'Fedora' ||
    osFamily === 'Red Hat'
  )
    return 'Linux'
  else {
    if (isCategory(osFamily)) return osFamily
    else throw new Error(`Invalid OS family ${osFamily}`)
  }
}
