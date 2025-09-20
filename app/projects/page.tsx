import Link from 'next/link'
import { Calendar, Clock, Star, Github, ExternalLink } from 'lucide-react'

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

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800'
      case 'Maintenance':
        return 'bg-yellow-100 text-yellow-800'
      case 'Complete':
        return 'bg-blue-100 text-blue-800'
      default:
        return 'bg-slate-100 text-slate-800'
    }
  }

  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20"
      style={{ 
          backgroundImage: "url('/img/background.png')",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in">
            My Projects
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto animate-fade-in">
            Personal projects and open source contributions that showcase my development skills
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="card group hover:shadow-2xl transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <div className="flex space-x-2">
                    <a 
                      href={project.githubUrl} 
                      className="text-slate-400 hover:text-slate-600 transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      className="text-slate-400 hover:text-slate-600 transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.longDescription}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(project.date).toLocaleDateString()}
                    </span>
                    <span className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {project.duration}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      {project.stars}
                    </span>
                    <span>{project.forks} forks</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Other Projects
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="card group hover:shadow-xl transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex justify-between items-start mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                  <div className="flex space-x-2">
                    <a 
                      href={project.githubUrl} 
                      className="text-slate-400 hover:text-slate-600 transition-colors"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a 
                      href={project.liveUrl} 
                      className="text-slate-400 hover:text-slate-600 transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-sm text-slate-500 pt-4 border-t border-slate-100">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {new Date(project.date).toLocaleDateString()}
                  </span>
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center">
                      <Star className="h-4 w-4 mr-1 text-yellow-500" />
                      {project.stars}
                    </span>
                    <span>{project.forks} forks</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
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