import Link from 'next/link'
import ProjectGrid from '@/components/ProjectGrid'
import { prisma } from '@/lib/prisma'

export const metadata = {
  title: 'Projects - mahelbee',
  description: 'Explore my personal projects and open source contributions.',
}

export const revalidate = 60

export default async function Projects() {
  const projects = await prisma.project.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in">
            My Projects
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto animate-fade-in">
            Personal projects and open source contributions that showcase my development skills
          </p>
        </div>
      </section>

      {/* All Projects */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectGrid projects={projects} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Want to Collaborate?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            I&apos;m always open to interesting projects and collaboration opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-all transform hover:scale-105 inline-block"
            >
              Get In Touch
            </Link>
            <a 
              href="https://github.com/alexjohnson" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 px-8 py-4 rounded-lg font-semibold transition-all transform hover:scale-105 inline-block"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}