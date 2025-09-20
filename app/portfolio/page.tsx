import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

export const metadata = {
  title: 'Portfolio - mahelbee',
  description: 'View my latest web development projects and creative work.',
}

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A modern e-commerce platform built with Next.js and Stripe integration',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe', 'PostgreSQL'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Web Application',
      image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A collaborative task management application with real-time updates',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'Portfolio Website',
      category: 'Web Design',
      image: 'https://images.pexels.com/photos/326508/pexels-photo-326508.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A responsive portfolio website with modern design principles',
      technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      category: 'Data Visualization',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'An interactive analytics dashboard with real-time data visualization',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 5,
      title: 'Social Media App',
      category: 'Mobile Development',
      image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A social media platform with photo sharing and real-time messaging',
      technologies: ['React Native', 'Firebase', 'Redux'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 6,
      title: 'Weather Application',
      category: 'Web Application',
      image: 'https://images.pexels.com/photos/1154510/pexels-photo-1154510.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'A beautiful weather application with location-based forecasts',
      technologies: ['Vue.js', 'TypeScript', 'Weather API'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ]

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20"
      style={{ 
          backgroundImage: "url('/img/background.png')",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Warna hitam dengan opacity 50%
          backgroundBlendMode: "overlay"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in">
            My Portfolio
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto animate-fade-in">
            A collection of projects that showcase my skills and passion for development
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <div
                key={item.id}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                      href={item.liveUrl}
                      className="bg-white text-slate-800 p-3 rounded-full hover:bg-primary-100 transition-colors transform hover:scale-110"
                      aria-label={`View ${item.title} live demo`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                    <a
                      href={item.githubUrl}
                      className="bg-white text-slate-800 p-3 rounded-full hover:bg-primary-100 transition-colors transform hover:scale-110"
                      aria-label={`View ${item.title} source code`}
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-primary-600 font-medium mb-2">
                    {item.category}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}