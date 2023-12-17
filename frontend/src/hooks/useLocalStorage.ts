export function useLocalStorage() {
  const getItem = (key: string) => {
    return localStorage.getItem(key)
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const setItem = ({ key, value }: { key: string; value: any }) =>
    window.localStorage.setItem(key, value)

  return { getItem, setItem }
}
