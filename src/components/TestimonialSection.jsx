import React from 'react'

const quotes = [
  { name: 'Alex', text: 'FitTrack helped me build consistency and drop 8 lbs in 2 months.' },
  { name: 'Maya', text: 'The meal plans are realistic and easy to follow.' }
]

export default function TestimonialSection() {
  return (
    <section className="py-12 bg-gradient-to-r from-purple-50 to-cyan-50 dark:from-transparent dark:to-transparent">
      <div className="max-w-6xl mx-auto px-4">
        <h3 className="text-2xl font-semibold mb-6">What people say</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {quotes.map(q => (
            <div key={q.name} className="p-6 bg-white dark:bg-gray-800 rounded-lg">
              <p className="italic">“{q.text}”</p>
              <div className="mt-4 font-semibold">— {q.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
