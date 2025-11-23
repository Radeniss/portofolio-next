import Link from 'next/link'
import ProjectGrid from '@/components/ProjectGrid'

export const metadata = {
  title: 'Projects - mahelbee',
  description: 'Explore my personal projects and open source contributions.',
}

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Next.js E-Commerce Starter',
      description: 'A complete e-commerce solution built with Next.js 14, featuring modern design, payment integration, and admin dashboard.',
      longDescription: 'This comprehensive e-commerce starter kit includes user authentication, product management, shopping cart functionality, Stripe payment integration, and a complete admin dashboard. Built with performance and SEO in mind.',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Stripe'],
      status: 'Active',
      date: '2024-01-15',
      duration: '3 months',
      stars: 245,
      forks: 67,
      githubUrl: 'https://github.com/alexjohnson/nextjs-ecommerce',
      liveUrl: 'https://nextjs-ecommerce-demo.vercel.app',
      featured: true
    },
    {
      id: 2,
      title: 'React Component Library',
      description: 'A reusable component library built with React and TypeScript, featuring accessible and customizable UI components.',
      longDescription: 'A comprehensive collection of reusable React components with full TypeScript support, accessibility features, and extensive customization options. Includes Storybook documentation and automated testing.',
      technologies: ['React', 'TypeScript', 'Storybook', 'Jest', 'CSS Modules'],
      status: 'Maintenance',
      date: '2023-11-08',
      duration: '4 months',
      stars: 189,
      forks: 34,
      githubUrl: 'https://github.com/alexjohnson/react-ui-lib',
      liveUrl: 'https://react-ui-lib.netlify.app',
      featured: true
    },
    {
      id: 3,
      title: 'Task Management API',
      description: 'A RESTful API for task management with user authentication, real-time updates, and comprehensive documentation.',
      longDescription: 'A robust Node.js API featuring JWT authentication, real-time WebSocket connections, comprehensive CRUD operations, and automatically generated API documentation with Swagger.',
      technologies: ['Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT', 'Swagger'],
      status: 'Active',
      date: '2023-09-20',
      duration: '2 months',
      stars: 156,
      forks: 45,
      githubUrl: 'https://github.com/alexjohnson/task-api',
      liveUrl: 'https://task-api-docs.herokuapp.com',
      featured: false
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and historical data visualization.',
      longDescription: 'An interactive weather dashboard featuring current conditions, 7-day forecasts, interactive weather maps, and historical weather data visualization with charts and graphs.',
      technologies: ['Vue.js', 'Chart.js', 'Leaflet', 'Weather API', 'PWA'],
      status: 'Complete',
      date: '2023-07-12',
      duration: '1 month',
      stars: 98,
      forks: 23,
      githubUrl: 'https://github.com/alexjohnson/weather-dashboard',
      liveUrl: 'https://weather-dashboard-vue.netlify.app',
      featured: false
    },
    {
      id: 5,
      title: 'Portfolio Template',
      description: 'A modern, responsive portfolio template built with Next.js and Tailwind CSS for developers and designers.',
      longDescription: 'A fully responsive portfolio template featuring dark/light mode, smooth animations, contact forms, blog integration, and optimal performance. Perfect for developers and designers.',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'MDX', 'Vercel'],
      status: 'Active',
      date: '2023-05-30',
      duration: '6 weeks',
      stars: 312,
      forks: 89,
      githubUrl: 'https://github.com/alexjohnson/portfolio-template',
      liveUrl: 'https://portfolio-template-demo.vercel.app',
      featured: true
    }
  ]

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
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