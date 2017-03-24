import 'isomorphic-fetch'

export async function getTranslation(lang, file) {
  const response = await fetch(`http://localhost:3000/static/locales/${lang}/${file}.json`)
  const json = await response.json()
  const translations = {
    en: { common: json }
  }

  return translations
}