import { useCallback, useEffect, useMemo, useState } from 'react'
import { ThemeContext } from './ThemeContext'

const STORAGE_KEY = 'app-theme'

// الأولوية: اختيار المستخدم المحفوظ، وإلا إعداد جهازه (Dark/Light)، وإلا فاتح.
function getInitialTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'light' || saved === 'dark') return saved
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark'
  } catch {
    // نكمل بالافتراضي
  }
  return 'light'
}

export default function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)

  // كل ما الثيم يتغير: نكتبه على <html data-theme="...">، وCSS بيتصرف بناءً عليه.
  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  const toggleTheme = useCallback(() => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark'
      try {
        // بنحفظ بس لما المستخدم يختار بنفسه
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
        // نتجاهل
      }
      return next
    })
  }, [])

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}