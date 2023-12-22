// 'use client'

// import '@/styles/globals.css'
import { Homebar, Socials } from '@/lib/components'

export default function BoyScouts() {
  return (
    <div>
      <Homebar />
      <BoyScoutsPage />
      <Socials />
    </div>
  );
}

function BoyScoutsPage() {
    return (
      <div className="text-white">
        Boy Scouts Page Here
      </div>
    );
}