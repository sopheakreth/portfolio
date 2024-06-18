const LANG_KEY = 'lang'

export const getLocalLanguage = () => localStorage.getItem(LANG_KEY)
export const setLocalLanguage = (newLang: string) => {
  localStorage.setItem(LANG_KEY, newLang)
}
