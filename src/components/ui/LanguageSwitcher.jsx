import styles from './LanguageSwitcher.module.css'
import { useLanguage } from '../../i18n/useLanguage'
import { LANGUAGES } from '../../i18n/translations'

export default function LanguageSwitcher() {
  const { language, setLanguage, t } = useLanguage()

  return (
    <div className={styles.group} role="group" aria-label={t('languageLabel')}>
      {Object.entries(LANGUAGES).map(([code, info]) => {
        const isActive = language === code
        return (
          <button
            key={code}
            type="button"
            lang={code}
            className={`${styles.option} ${isActive ? styles.active : ''}`}
            aria-pressed={isActive}
            onClick={() => setLanguage(code)}
          >
            {info.label}
          </button>
        )
      })}
    </div>
  )
}