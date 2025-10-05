import React from 'react'

const features = [
  { title: 'Personalized Plans', desc: 'Custom workout plans for your goals.' },
  { title: 'Nutrition Guides', desc: 'Meal ideas and calorie targets.' },
  { title: 'Track Progress', desc: 'Charts and stats to measure improvement.' }
]

export default function FeatureSection() {
  return (
    <section className="py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-6">
          {features.map(f => (
            <div key={f.title} className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
              <div className="w-12 h-12 rounded-full bg-brand/20 flex items-center justify-center mb-3">🏋️</div>
              <h4 className="font-semibold">{f.title}</h4>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
