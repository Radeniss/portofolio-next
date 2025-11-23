import CertificateGrid from '@/components/CertificateGrid'

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
    }
  ]

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
