import React, { createContext, useState, useEffect, useContext } from 'react'
type ThemeContextType = { theme: 'light'|'dark'; toggle: () => void }
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)
export default function ThemeProvider({children}:{children:React.ReactNode}) {
  const [theme, setTheme] = useState<'light'|'dark'>('dark')
  useEffect(()=>{ document.documentElement.classList.toggle('dark', theme === 'dark') }, [theme])
  const toggle = ()=> setTheme(t => t === 'dark' ? 'light' : 'dark')
  return <ThemeContext.Provider value={{theme, toggle}}>{children}</ThemeContext.Provider>
}
export const useTheme = ()=> {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used inside ThemeProvider')
  return ctx
}
