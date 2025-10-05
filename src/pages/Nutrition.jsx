import React from 'react'
import Card from '../components/Card'

const meals = [
  { title: 'Breakfast', desc: 'Oats with berries, Greek yogurt. (~400 kcal)' },
  { title: 'Lunch', desc: 'Grilled chicken salad with quinoa. (~600 kcal)' },
  { title: 'Dinner', desc: 'Baked salmon and veggies. (~500 kcal)' }
]

export default function Nutrition() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">Nutrition</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        {meals.map(m => (
          <Card key={m.title} title={m.title}>{m.desc}</Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card title="Tips">
          <ul className="text-sm text-gray-600 dark:text-gray-300">
            <li>• Stay hydrated</li>
            <li>• Prioritize protein</li>
            <li>• Eat whole foods</li>
          </ul>
        </Card>
        <Card title="Macros Example">
          <p className="text-sm text-gray-600 dark:text-gray-300">Calories: 2000 • Protein: 140g • Carbs: 220g • Fats: 60g</p>
        </Card>
      </div>
    </section>
  )
}
