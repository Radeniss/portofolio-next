import CertificateGrid from '@/components/CertificateGrid'
import { prisma } from '@/lib/prisma'

export const metadata = {
  title: 'Certificates - mahelbee',
  description: 'Professional certifications and achievements in web development and design.',
}

export const revalidate = 3600 // Revalidate every hour

export default async function Certificates() {
  const certificates = await prisma.certificate.findMany({
    orderBy: {
      date: 'desc',
    },
  })

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in">
            Professional Certificates
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto animate-fade-in">
            Continuous learning and professional development in cutting-edge technologies
          </p>
        </div>
      </section>

      {/* All Certificates Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CertificateGrid certificates={certificates} />
        </div>
      </section>
      
      {/* Skills Summary */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8">
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
