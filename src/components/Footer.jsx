import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <h3 className="font-bold">FitTrack</h3>
          <p className="text-sm">Track workouts, nutrition, and progress — stay consistent.</p>
        </div>
        <div className="text-sm">© {new Date().getFullYear()} FitTrack. All rights reserved.</div>
      </div>
    </footer>
  )
}
