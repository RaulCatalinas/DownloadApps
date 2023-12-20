import { EXPIRATION_TIME } from '@constants/cache'

interface LocalStorageManagerProps {
  getItem: (key: string) => string | null
  setItem: ({
    key,
    value,
    expiresIn30Days
  }: {
    key: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any
    expiresIn30Days?: boolean
  }) => void
}

export class LocalStorageManager implements LocalStorageManagerProps {
  getItem(key: string) {
    const storedItem = localStorage.getItem(key)

    if (!storedItem) return null

    try {
      const parsedItem = JSON.parse(storedItem)

      const { value, expirationTime } = parsedItem

      if (expirationTime && Date.now() > expirationTime) {
        this.#removeItem(key)

        return null
      }

      return value
    } catch {
      return storedItem
    }
  }

  setItem({
    key,
    value,
    expiresIn30Days
  }: {
    key: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any
    expiresIn30Days?: boolean
  }) {
    const expirationTime = expiresIn30Days
      ? Date.now() + EXPIRATION_TIME
      : undefined

    const storedItem = expirationTime
      ? JSON.stringify({
          value,
          expirationTime
        })
      : String(value)

    localStorage.setItem(key, storedItem)
  }

  #removeItem(key: string) {
    localStorage.removeItem(key)
  }
}
