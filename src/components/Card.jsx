import React from 'react'

export default function Card({ title, children, className = '' }) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm card-glow ${className}`}>
      <h4 className="font-semibold mb-2">{title}</h4>
      <div>{children}</div>
    </div>
  )
}
