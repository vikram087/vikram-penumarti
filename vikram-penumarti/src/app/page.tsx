// 'use client'

import '@/styles/globals.css'
import { Homebar, Socials } from '@/lib/components'

export default function Home() {
  return (
    <div>
      <Homebar />
      <HomePage />
      <Socials />
    </div>
  );
}

function HomePage() {
  return (
    <div className="text-white">
      Home Page Here
    </div>
  );
}