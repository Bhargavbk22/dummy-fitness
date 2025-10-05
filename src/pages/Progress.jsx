import React from 'react'
import ProgressChart from '../components/ProgressChart'
import Card from '../components/Card'

export default function Progress() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">Progress</h2>
      <div className="grid md:grid-cols-3 gap-6 mb-6">
        <Card title="Weight Change">-2.3 kg this month</Card>
        <Card title="Calories Burned">~1200 kcal this week</Card>
        <Card title="Workouts Completed">8 workouts</Card>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
        <ProgressChart />
      </div>
    </section>
  )
}
