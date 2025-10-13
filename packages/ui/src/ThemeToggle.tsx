import React from 'react'
import { useTheme } from './ThemeProvider'

export default function ThemeToggle(){
  const { toggle, theme } = useTheme();
  return <button onClick={toggle} className='px-2 py-1 rounded border'>{theme === 'dark' ? 'Light' : 'Dark'}</button>
}