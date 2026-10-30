// كل النصوص في مكان واحد. لو عايز تعدّل كلمة أو تضيف لغة، تعدّل هنا بس.
export const LANGUAGES = {
  en: { label: 'EN', dir: 'ltr' },
  ar: { label: 'عربي', dir: 'rtl' },
}

export const DEFAULT_LANGUAGE = 'en'

export const translations = {
  en: {
    languageLabel: 'Language',
    themeToDark: 'Switch to dark theme',
    themeToLight: 'Switch to light theme',
    appName: 'Postgraduate Administration System',
    tagline: 'Manage Today ... Build Tomorrow',
    username: 'Username',
    password: 'Password',
    showPassword: 'Show password',
    hidePassword: 'Hide password',
    login: 'Login',
    forgotPassword: 'Forgot Password?',
    cardFooter: 'Higher Studies • Brighter Future',
    quoteMain: 'Knowledge',
    quoteLine1: 'Leads to',
    quoteLine2: 'A Better Tomorrow',
    featureEducation: 'Higher Education',
    featureResearch: 'Research Excellence',
    featureSolutions: 'Innovative Solutions',
    usernameRequired: 'Please enter your username.',
    passwordRequired: 'Please enter your password.',
    notice:
      'UI only for now: real sign-in will be connected after the backend API is confirmed.',
    copyright: '© 2025 Postgraduate Administration System. All Rights Reserved.',
  },
  ar: {
    languageLabel: 'اللغة',
    themeToDark: 'التبديل إلى الوضع الداكن',
    themeToLight: 'التبديل إلى الوضع الفاتح',
    appName: 'نظام إدارة الدراسات العليا',
    tagline: 'أدِر اليوم ... وابنِ الغد',
    username: 'اسم المستخدم',
    password: 'كلمة المرور',
    showPassword: 'إظهار كلمة المرور',
    hidePassword: 'إخفاء كلمة المرور',
    login: 'تسجيل الدخول',
    forgotPassword: 'نسيت كلمة المرور؟',
    cardFooter: 'دراسات عليا • مستقبل أكثر إشراقاً',
    quoteMain: 'المعرفة',
    quoteLine1: 'تقود إلى',
    quoteLine2: 'غدٍ أفضل',
    featureEducation: 'التعليم العالي',
    featureResearch: 'التميز البحثي',
    featureSolutions: 'حلول مبتكرة',
    usernameRequired: 'من فضلك أدخل اسم المستخدم.',
    passwordRequired: 'من فضلك أدخل كلمة المرور.',
    notice:
      'واجهة فقط حالياً: سيتم ربط تسجيل الدخول الفعلي بعد اعتماد الـ API من فريق الباك إند.',
    copyright: '© 2025 نظام إدارة الدراسات العليا. جميع الحقوق محفوظة.',
  },
}