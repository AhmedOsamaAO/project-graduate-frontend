import { useState } from 'react'
import styles from './LoginPage.module.css'
import LanguageSwitcher from '../../components/ui/LanguageSwitcher'
import { useLanguage } from '../../i18n/useLanguage'
import ThemeToggle from '../../components/ui/ThemeToggle'
import {
  UserIcon,
  LockIcon,
  EyeIcon,
  EyeOffIcon,
  LoginIcon,
  GraduationCapIcon,
  BookIcon,
  UsersIcon,
  LightbulbIcon,
} from '../../components/ui/Icons'

// بنخزّن "مفتاح" النص مش النص نفسه، عشان النص يتترجم لو اللغة اتغيّرت.
const FEATURES = [
  { id: 'education', labelKey: 'featureEducation', Icon: BookIcon },
  { id: 'research', labelKey: 'featureResearch', Icon: UsersIcon },
  { id: 'solutions', labelKey: 'featureSolutions', Icon: LightbulbIcon },
]

export default function LoginPage() {
  const { t } = useLanguage()

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  // الأخطاء بنخزّن فيها مفاتيح الترجمة، مثلاً { username: 'usernameRequired' }
  const [errors, setErrors] = useState({})
  const [showNotice, setShowNotice] = useState(false)

  function validate() {
    const nextErrors = {}
    if (!username.trim()) nextErrors.username = 'usernameRequired'
    if (!password) nextErrors.password = 'passwordRequired'
    return nextErrors
  }

  function handleSubmit(event) {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      setShowNotice(false)
      return
    }

    // مهم: مش بنطبع الباسورد في الـ console.
    // الـ Login الحقيقي هيتربط بعد ما الباك إند يحدد الـ API.
    setShowNotice(true)
  }

  return (
    <div className={styles.page}>
      <header className={styles.topBar}>
        <div className={styles.brand}>
          <img className={styles.logo} src="/images/fci-logo.png" alt="" />
          <div>
            <p className={styles.brandAr} lang="ar" dir="rtl">
              كلية الحاسبات والمعلومات
            </p>
            <p className={styles.brandEn} lang="en" dir="ltr">
              Faculty of Computers and Information
            </p>
          </div>
        </div>

        <div className={styles.controls}>
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
        <div className={`${styles.brand} ${styles.brandEnd}`}>
          <div>
            <p className={styles.brandAr} lang="ar" dir="rtl">
              جامعة الزقازيق
            </p>
            <p className={styles.brandEn} lang="en" dir="ltr">
              Zagazig University
            </p>
          </div>
          <img className={styles.logo} src="/images/zu-logo.png" alt="" />
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.card}>
          {/* ===== الجانب الأول: الفورم ===== */}
          <section className={styles.formSide}>
            <div className={styles.emblem}>
              <GraduationCapIcon />
            </div>

            <h1 className={styles.title}>{t('appName')}</h1>
            <p className={styles.tagline}>{t('tagline')}</p>

            <form className={styles.form} onSubmit={handleSubmit} noValidate>
              <div className={styles.field}>
                <label htmlFor="username" className={styles.srOnly}>
                  {t('username')}
                </label>
                <div className={`${styles.inputWrap} ${errors.username ? styles.inputInvalid : ''}`}>
                  <UserIcon className={styles.inputIcon} />
                  <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder={t('username')}
                    autoComplete="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    aria-invalid={Boolean(errors.username)}
                    aria-describedby={errors.username ? 'username-error' : undefined}
                  />
                </div>
                {errors.username && (
                  <p id="username-error" className={styles.errorText} role="alert">
                    {t(errors.username)}
                  </p>
                )}
              </div>

              <div className={styles.field}>
                <label htmlFor="password" className={styles.srOnly}>
                  {t('password')}
                </label>
                <div className={`${styles.inputWrap} ${errors.password ? styles.inputInvalid : ''}`}>
                  <LockIcon className={styles.inputIcon} />
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder={t('password')}
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    aria-invalid={Boolean(errors.password)}
                    aria-describedby={errors.password ? 'password-error' : undefined}
                  />
                  <button
                    type="button"
                    className={styles.toggle}
                    onClick={() => setShowPassword((prev) => !prev)}
                    aria-label={showPassword ? t('hidePassword') : t('showPassword')}
                    aria-pressed={showPassword}
                  >
                    {showPassword ? <EyeIcon /> : <EyeOffIcon />}
                  </button>
                </div>
                {errors.password && (
                  <p id="password-error" className={styles.errorText} role="alert">
                    {t(errors.password)}
                  </p>
                )}
              </div>

              <button type="submit" className={styles.submit}>
                <LoginIcon />
                {t('login')}
              </button>

              {showNotice && (
                <p className={styles.notice} role="status">
                  {t('notice')}
                </p>
              )}

              <button type="button" className={styles.link}>
                {t('forgotPassword')}
              </button>
            </form>

            <p className={styles.cardFooter}>{t('cardFooter')}</p>
          </section>

          {/* ===== الجانب التاني: الصورة والنص ===== */}
          <aside className={styles.visualSide}>
            <div className={styles.quote}>
              <p className={styles.quoteMain}>{t('quoteMain')}</p>
              <p className={styles.quoteSub}>
                {t('quoteLine1')}
                <br />
                {t('quoteLine2')}
              </p>
              <span className={styles.quoteLine} />
            </div>

            <ul className={styles.features}>
              {FEATURES.map(({ id, labelKey, Icon }) => (
                <li key={id} className={styles.feature}>
                  <Icon className={styles.featureIcon} />
                  <span>{t(labelKey)}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </main>

      <footer className={styles.footer}>{t('copyright')}</footer>
    </div>
  )
}