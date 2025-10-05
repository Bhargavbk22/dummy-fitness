import React from 'react'

export default function InputForm({ children, onSubmit }) {
  return (
    <form onSubmit={e => { e.preventDefault(); onSubmit && onSubmit() }} className="space-y-3">
      {children}
      <div>
        <button type="submit" className="px-4 py-2 bg-brand text-white rounded-md">Send</button>
      </div>
    </form>
  )
}
