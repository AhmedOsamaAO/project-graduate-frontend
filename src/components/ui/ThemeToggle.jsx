import styles from './ThemeToggle.module.css'
import { useTheme } from '../../theme/useTheme'
import { useLanguage } from '../../i18n/useLanguage'
import { MoonIcon, SunIcon } from './Icons'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const { t } = useLanguage()
  const isDark = theme === 'dark'

  return (
    <button
      type="button"
      className={styles.button}
      onClick={toggleTheme}
      aria-label={isDark ? t('themeToLight') : t('themeToDark')}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  )
}