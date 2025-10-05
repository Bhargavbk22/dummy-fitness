import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContext'

const links = [
  { to: '/', label: 'Home' },
  { to: '/workouts', label: 'Workouts' },
  { to: '/nutrition', label: 'Nutrition' },
  { to: '/progress', label: 'Progress' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { dark, setDark } = useContext(ThemeContext)

  return (
    <header className="bg-white/60 dark:bg-black/40 backdrop-blur sticky top-0 z-40">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-400 flex items-center justify-center text-white font-bold">FT</div>
          <span className="font-semibold">FitTrack</span>
        </div>

        <nav className="hidden md:flex gap-4 items-center">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} className={({ isActive }) =>
              `px-3 py-2 rounded-md ${isActive ? 'bg-brand text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`
            }>{l.label}</NavLink>
          ))}
          <button onClick={() => setDark(!dark)} className="ml-4 px-3 py-2 rounded-md border">{dark ? 'Light' : 'Dark'}</button>
        </nav>

        <div className="md:hidden">
          <button onClick={() => setOpen(s => !s)} className="px-3 py-2 rounded-md border">Menu</button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white dark:bg-black/60">
          <div className="px-4 pb-4 flex flex-col">
            {links.map(l => (
              <NavLink key={l.to} to={l.to} onClick={() => setOpen(false)} className={({ isActive }) =>
                `px-3 py-2 rounded-md ${isActive ? 'bg-brand text-white' : 'hover:bg-gray-100 dark:hover:bg-gray-800'}`
              }>{l.label}</NavLink>
            ))}
            <button onClick={() => setDark(!dark)} className="mt-2 px-3 py-2 rounded-md border">{dark ? 'Light' : 'Dark'}</button>
          </div>
        </div>
      )}
    </header>
  )
}
