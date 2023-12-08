export function getText(): string {
  const userLanguage = navigator.language
  const language = userLanguage.startsWith('es') ? 'es' : 'en'

  return ''
}
