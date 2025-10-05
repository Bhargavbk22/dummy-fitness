import React from 'react'

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-6">About FitTrack</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">We help people stay consistent with simple tracking tools and motivating design.</p>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg"> <h4 className="font-semibold">Alex — Founder</h4><p className="text-sm">Fitness coach & product lead</p></div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg"> <h4 className="font-semibold">Maya — Nutritionist</h4><p className="text-sm">Meal planning and guidance</p></div>
        <div className="p-4 bg-white dark:bg-gray-800 rounded-lg"> <h4 className="font-semibold">Sam — Engineer</h4><p className="text-sm">Frontend & UX</p></div>
      </div>
    </section>
  )
}
