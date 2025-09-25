  'use client';

  import Link from 'next/link'
  import Image from 'next/image'
  import { ArrowRight, Download, Code, Palette, Globe } from 'lucide-react'
  import SplitText from './SplitText'
  import TiltedCard from './TiltedCard';
  import ScrollReveal from './ScrollReveal';


export default function Home() {
  const skills = [
    { 
      icon: Code, 
      name: 'Frontend Development', 
      desc: 'React, Next.js, TypeScript, Vue.js with modern build tools and best practices' 
    },
    { 
      icon: Globe, 
      name: 'Backend Development', 
      desc: 'Node.js, Python, PostgreSQL, REST APIs and microservices architecture' 
    },
    { 
      icon: Palette, 
      name: 'UI/UX Design', 
      desc: 'Figma, Adobe XD, user-centered design and responsive web design' 
    },
  ]

  const handleAnimationComplete = () => {
    console.log('SplitText animation completed!');
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative">
        {/* ... konten hero section tetap sama ... */}
      </section>

      {/* Skills Section dengan ScrollReveal */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"> 
            {/* ScrollReveal untuk heading */}
            <ScrollReveal
              as="h2"
              containerClassName="text-center mb-4"
              textClassName="text-3xl md:text-4xl font-bold text-slate-300"
              baseOpacity={0.2}
              baseRotation={2}
              blurStrength={8}
              enableBlur={true}
            >
              What I Do
            </ScrollReveal>

            {/* ScrollReveal untuk deskripsi */}
            <ScrollReveal
              as="p"
              containerClassName="text-center"
              textClassName="text-lg text-slate-300 max-w-2xl mx-auto"
              baseOpacity={0.3}
              baseRotation={1}
              blurStrength={6}
              enableBlur={true}
              wordAnimationEnd="bottom center"
            >
              I specialize in creating comprehensive digital solutions from concept to deployment
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="card group hover:transform hover:scale-105 transition-all duration-300
                            bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary-200 transition-colors">
                  <skill.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-300 mb-3">
                  {skill.name}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {skill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start a Project?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Let&apos;s work together to bring your ideas to life
          </p>
          <button className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </section>
    </div>
  );
}