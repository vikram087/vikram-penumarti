// 'use client'

import { Homebar, Socials } from '../lib/components'

export default function Projects() {
  return (
    <div>
      <Homebar />
      <ProjectsPage />
      <Socials />
    </div>
  );
}

function ProjectsPage() {
    return (
      <div className="text-white">
        Projects Page Here
      </div>
    );
}