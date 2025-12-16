'use client'

import { Calendar, Clock, Star } from 'lucide-react'
import AnimatedContent from '@/app/(main)/AnimatedContent'
import GlareHover from '@/components/GlareHover'

const getStatusColor = (status) => {
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

export default function ProjectGrid({ projects }) { // Removed 'featured' prop
    const gridClasses = "grid grid-cols-1 md:grid-cols-2 gap-8"; // Simplified gridClasses

    const characterLimit = 300;

    return (
        <div className={gridClasses}>
            {projects.map((project, index) => {
                const displayedDescription = project.description; // Always use project.description
                const truncatedDescription = displayedDescription.length > characterLimit
                    ? displayedDescription.slice(0, characterLimit) + '...'
                    : displayedDescription;

                return (
                    <AnimatedContent
                        key={project.id}
                        distance={50}
                        direction="vertical"
                        duration={0.8}
                        delay={index * 0.15}
                    >
                        <GlareHover
                            glareColor="#ffffff"
                            glareOpacity={0.3}
                            glareAngle={-45}
                            glareSize={300}
                            transitionDuration={1000}
                            playOnce={false}
                            background='none'
                        >
                            <div 
                                className="h-full card group hover:shadow-xl transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(project.status)}`}>
                                        {project.status}
                                    </span>
                                </div>
                                
                                <h3 className="font-bold text-slate-200 mb-3 group-hover:text-primary-300 transition-colors text-xl"> {/* Simplified text size */}
                                    {project.title}
                                </h3>
                                
                                <p className="text-slate-300 mb-4 leading-relaxed">
                                    {truncatedDescription}
                                </p>
                                
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {(project.technologies || []).slice(0, 4).map((tech) => ( // Always show first 4 technologies
                                        <span 
                                            key={tech} 
                                            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                    {(project.technologies || []).length > 4 && (
                                        <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm">
                                            +{project.technologies.length - 4} more
                                        </span>
                                    )}
                                </div>
                                
                                <div className="flex items-center justify-between text-sm text-slate-400 pt-4 border-t border-slate-700">
                                    <div className="flex items-center space-x-4">
                                        <span className="flex items-center">
                                            <Calendar className="h-4 w-4 mr-1" />
                                            {new Date(project.createdAt).toLocaleDateString('en-CA')}
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
                        </GlareHover>
                    </AnimatedContent>
                )
            })}
        </div>
    )
}
