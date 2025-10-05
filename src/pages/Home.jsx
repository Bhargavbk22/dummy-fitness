import React from 'react'
import HeroSection from '../components/HeroSection'
import FeatureSection from '../components/FeatureSection'
import TestimonialSection from '../components/TestimonialSection'
import ProgressChart from '../components/ProgressChart'

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FeatureSection />
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h3 className="text-2xl font-semibold mb-4">Weekly progress</h3>
        <ProgressChart />
      </section>
      <TestimonialSection />
    </div>
  )
}
