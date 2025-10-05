import React from 'react'
import Card from '../components/Card'

const categories = [
  { title: 'Cardio', items: ['Running', 'Cycling', 'Rowing'] },
  { title: 'Strength', items: ['Squats', 'Deadlifts', 'Bench Press'] },
  { title: 'Yoga', items: ['Sun Salutation', 'Tree Pose', 'Child Pose'] },
  { title: 'HIIT', items: ['Tabata', 'Circuit', 'Sprints'] }
]

export default function Workouts() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">Workouts</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map(c => (
          <Card key={c.title} title={c.title}>
            <ul className="text-sm text-gray-600 dark:text-gray-300">
              {c.items.map(i => <li key={i}>• {i}</li>)}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  )
}
