import React from 'react'
import { Link } from 'react-router-dom'

export default function HeroSection() {
  return (
    <section className="hero-gradient py-12">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Transform your fitness. One day at a time.</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300">Plan workouts, track meals, and visualize progress with FitTrack — your pocket fitness coach.</p>
          <div className="mt-6 flex gap-3">
            <Link to="/workouts" className="px-5 py-3 bg-brand text-white rounded-md">Start Free</Link>
            <Link to="/about" className="px-5 py-3 border rounded-md">Learn More</Link>
          </div>
        </div>

        <div className="flex-1">
          <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">Image</div>
        </div>
      </div>
    </section>
  )
}
