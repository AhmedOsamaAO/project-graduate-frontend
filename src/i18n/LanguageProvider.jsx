import { useEffect, useMemo, useState } from 'react'
import { LanguageContext } from './LanguageContext'
import { DEFAULT_LANGUAGE, LANGUAGES, translations } from './translations'

const STORAGE_KEY = 'app-language'

function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && LANGUAGES[saved]) return saved
  } catch {
    // لو التخزين مش متاح، نكمل بالافتراضي
  }
  return DEFAULT_LANGUAGE
}

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(getInitialLanguage)
  const dir = LANGUAGES[language].dir

  // كل ما اللغة تتغير: نحدّث <html lang dir> ونحفظ الاختيار.
  useEffect(() => {
    document.documentElement.lang = language
    document.documentElement.dir = dir
    try {
      localStorage.setItem(STORAGE_KEY, language)
    } catch {
      // نتجاهل
    }
  }, [language, dir])

  const value = useMemo(() => {
    // بنرجع النص بلغتنا، ولو مش موجود نرجع الإنجليزي، وبعدها المفتاح نفسه.
    const t = (key) => translations[language][key] ?? translations.en[key] ?? key
    return { language, setLanguage, dir, t }
  }, [language, dir])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}