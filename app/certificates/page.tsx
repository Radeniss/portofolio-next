import Image from 'next/image'
import { Award, Calendar, ExternalLink, Download } from 'lucide-react'

export const metadata = {
  title: 'Certificates - mahelbee',
  description: 'Professional certifications and achievements in web development and design.',
}

export default function Certificates() {
  const certificates = [
    {
      id: 1,
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: '2024-02-15',
      validUntil: '2027-02-15',
      credentialId: 'AWS-SAA-2024-001234',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Demonstrates expertise in designing distributed systems on AWS platform',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Cost Optimization'],
      verifyUrl: '#',
      downloadUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Professional Scrum Master I (PSM I)',
      issuer: 'Scrum.org',
      date: '2023-11-20',
      validUntil: 'Lifetime',
      credentialId: 'PSM-2023-567890',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Validates knowledge of Scrum framework and ability to support teams',
      skills: ['Scrum Framework', 'Agile Methodologies', 'Team Leadership', 'Product Management'],
      verifyUrl: '#',
      downloadUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: '2023-09-10',
      validUntil: '2025-09-10',
      credentialId: 'GCP-DEV-2023-112233',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expertise in developing scalable applications on Google Cloud Platform',
      skills: ['GCP Services', 'Container Orchestration', 'DevOps', 'Microservices'],
      verifyUrl: '#',
      downloadUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Meta Frontend Developer Professional',
      issuer: 'Meta (Coursera)',
      date: '2023-06-30',
      validUntil: 'Lifetime',
      credentialId: 'META-FE-2023-445566',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Comprehensive frontend development skills including React and modern practices',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'UI/UX Design'],
      verifyUrl: '#',
      downloadUrl: '#',
      featured: false
    },
    {
      id: 5,
      title: 'MongoDB Developer Certification',
      issuer: 'MongoDB University',
      date: '2023-04-15',
      validUntil: '2025-04-15',
      credentialId: 'MONGO-DEV-2023-778899',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Proficiency in MongoDB database design, development, and administration',
      skills: ['MongoDB', 'Database Design', 'Query Optimization', 'Data Modeling'],
      verifyUrl: '#',
      downloadUrl: '#',
      featured: false
    },
    {
      id: 6,
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: '2023-02-28',
      validUntil: '2025-02-28',
      credentialId: 'DOCKER-CA-2023-334455',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Validates skills in containerization and Docker ecosystem management',
      skills: ['Docker', 'Containerization', 'DevOps', 'CI/CD'],
      verifyUrl: '#',
      downloadUrl: '#',
      featured: false
    }
  ]

  const featuredCertificates = certificates.filter(cert => cert.featured)
  const otherCertificates = certificates.filter(cert => !cert.featured)

  const isValidCertificate = (validUntil: string) => {
    if (validUntil === 'Lifetime') return true
    return new Date(validUntil) > new Date()
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20"
      style={{ 
          // backgroundImage: "url('/img/background.png')",
          // backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundBlendMode: "overlay"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in">
            Professional Certificates
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto animate-fade-in">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>
      </section>

      {/* Featured Certificates */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Featured Certifications
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredCertificates.map((cert, index) => (
              <div 
                key={cert.id} 
                className="card group hover:shadow-2xl transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
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
                
                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-primary-600 transition-colors">
                  {cert.title}
                </h3>
                
                <p className="text-primary-600 font-semibold mb-3">
                  {cert.issuer}
                </p>
                
                <p className="text-slate-600 mb-4 leading-relaxed">
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
                
                <div className="space-y-3 mb-6 text-sm text-slate-600">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Issued: {new Date(cert.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-2" />
                    <span>Valid Until: {cert.validUntil}</span>
                  </div>
                  <div className="text-xs text-slate-500">
                    ID: {cert.credentialId}
                  </div>
                </div>
                
                <div className="flex space-x-3 pt-4 border-t border-slate-100">
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
            ))}
          </div>
        </div>
      </section>

      {/* Other Certificates */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Additional Certifications
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {otherCertificates.map((cert, index) => (
              <div 
                key={cert.id} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-slate-800 mb-1">
                      {cert.title}
                    </h3>
                    <p className="text-primary-600 font-semibold text-sm">
                      {cert.issuer}
                    </p>
                  </div>
                  <div className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    isValidCertificate(cert.validUntil) 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-red-100 text-red-800'
                  }`}>
                    <Award className="h-3 w-3 mr-1" />
                    {isValidCertificate(cert.validUntil) ? 'Valid' : 'Expired'}
                  </div>
                </div>
                
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  {cert.description}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {cert.skills.slice(0, 3).map((skill) => (
                    <span 
                      key={skill} 
                      className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span>Issued: {new Date(cert.date).toLocaleDateString()}</span>
                  <span>Until: {cert.validUntil}</span>
                </div>
                
                <div className="flex space-x-2">
                  <a 
                    href={cert.verifyUrl} 
                    className="flex items-center px-3 py-1 bg-primary-600 text-white rounded hover:bg-primary-700 transition-colors text-xs font-medium"
                  >
                    <ExternalLink className="h-3 w-3 mr-1" />
                    Verify
                  </a>
                  <a 
                    href={cert.downloadUrl} 
                    className="flex items-center px-3 py-1 border border-slate-300 text-slate-700 rounded hover:bg-slate-50 transition-colors text-xs font-medium"
                  >
                    <Download className="h-3 w-3 mr-1" />
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-8">
            Certified Skills Overview
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              'Cloud Architecture', 'Frontend Development', 'Database Design', 'DevOps',
              'Agile Methodologies', 'Containerization', 'UI/UX Design', 'API Development'
            ].map((skill, index) => (
              <div 
                key={skill}
                className="p-4 bg-slate-50 rounded-lg hover:bg-primary-50 hover:text-primary-700 transition-colors animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-sm font-medium">{skill}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}