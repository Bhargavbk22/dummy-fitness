import React from 'react'
import InputForm from '../components/InputForm'

export default function Contact() {
  const handleSubmit = () => {
    alert('Thanks! This is a mock form — no backend is connected.')
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">Contact</h2>
      <InputForm onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm">Name</label>
          <input className="w-full mt-1 p-2 rounded border" />
        </div>
        <div>
          <label className="block text-sm">Email</label>
          <input className="w-full mt-1 p-2 rounded border" />
        </div>
        <div>
          <label className="block text-sm">Message</label>
          <textarea className="w-full mt-1 p-2 rounded border" rows={4}></textarea>
        </div>
      </InputForm>
    </section>
  )
}
