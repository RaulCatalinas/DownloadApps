export function useLocalStorage() {
  const getItem = (key: string) => {
    return localStorage.getItem(key)
  }

  const setItem = ({ key, value }: { key: string; value: any }) =>
    window.localStorage.setItem(key, value)

  return { getItem, setItem }
}
