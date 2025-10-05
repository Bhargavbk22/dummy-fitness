import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export default function ProgressChart({ data = null }) {
  const mock = data ?? {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      { label: 'Weight (kg)', data: [80, 79, 78.5, 77.8], borderColor: '#7c3aed', tension: 0.3 },
      { label: 'Body Fat (%)', data: [22, 21.5, 21, 20.8], borderColor: '#06b6d4', tension: 0.3 }
    ]
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
      <Line data={mock} />
    </div>
  )
}
