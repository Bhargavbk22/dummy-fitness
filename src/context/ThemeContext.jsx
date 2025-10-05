import React, { createContext, useState, useEffect } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('ft-dark')) ?? false
    } catch {
      return false
    }
  })

  useEffect(() => {
    localStorage.setItem('ft-dark', JSON.stringify(dark))
    if (dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
  }, [dark])

  return (
    <ThemeContext.Provider value={{ dark, setDark }}>
      {children}
    </ThemeContext.Provider>
  )
}
