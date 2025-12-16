'use client'

import Image from 'next/image'
import { Award, Calendar, ExternalLink, Download } from 'lucide-react'
import AnimatedContent from '@/app/(main)/AnimatedContent'
import GlareHover from '@/components/GlareHover'

export default function CertificateGrid({ certificates }) {

    const isValidCertificate = (validUntil) => {
        if (validUntil === 'Lifetime') return true
        return new Date(validUntil) > new Date()
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {certificates.map((cert, index) => (
                <AnimatedContent
                    key={cert.id}
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
                            className="h-full card group hover:shadow-2xl transition-all duration-300 bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg"
                        >
                            <div className="relative mb-6">
                                <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg overflow-hidden">
                                    <Image
                                        src={cert.image}
                                        alt={`${cert.title} certificate`}
                                        width={400}
                                        height={200}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                </div>
                                <div className="absolute top-4 right-4">
                                    <div className={`flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                                        isValidCertificate(cert.validUntil) 
                                            ? 'bg-green-100 text-green-800' 
                                            : 'bg-red-100 text-red-800'
                                    }`}>
                                        <Award className="h-4 w-4 mr-1" />
                                        {isValidCertificate(cert.validUntil) ? 'Valid' : 'Expired'}
                                    </div>
                                </div>
                            </div>
                            
                            <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-primary-300 transition-colors">
                                {cert.title}
                            </h3>
                            
                            <p className="text-primary-400 font-semibold mb-3">
                                {cert.issuer}
                            </p>
                            
                            <p className="text-slate-300 mb-4 leading-relaxed">
                                {cert.description}
                            </p>
                            
                            <div className="flex flex-wrap gap-2 mb-6">
                                {cert.skills.map((skill) => (
                                    <span 
                                        key={skill} 
                                        className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="space-y-3 mb-6 text-sm text-slate-400">
                                <div className="flex items-center">
                                    <Calendar className="h-4 w-4 mr-2" />
                                    <span>Issued: {new Date(cert.date).toLocaleDateString('en-CA')}</span>
                                </div>
                                <div className="flex items-center">
                                    <Award className="h-4 w-4 mr-2" />
                                    <span>Valid Until: {cert.validUntil}</span>
                                </div>

                            </div>
                            
                            <div className="flex space-x-3 pt-4 border-t border-slate-700">
                                <a 
                                    href={cert.verifyUrl} 
                                    className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium"
                                >
                                    <ExternalLink className="h-4 w-4 mr-1" />
                                    Verify
                                </a>
                                <a 
                                    href={cert.downloadUrl} 
                                    className="flex items-center px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-slate-50 transition-colors text-sm font-medium"
                                >
                                    <Download className="h-4 w-4 mr-1" />
                                    Download
                                </a>
                            </div>
                        </div>
                    </GlareHover>
                </AnimatedContent>
            ))}
        </div>
    )
}