import { createContext } from 'react'

// الـ Context ده "قناة" بتوصّل اللغة الحالية لأي مكوّن من غير ما نمررها يدوياً.
export const LanguageContext = createContext(null)