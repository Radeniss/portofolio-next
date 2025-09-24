  'use client';

  import Link from 'next/link'
  import Image from 'next/image'
  import { ArrowRight, Download, Code, Palette, Globe } from 'lucide-react'
  import SplitText from './SplitText'


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

//   useEffect(() => {
//   console.log('Homepage mounted, SplitText should animate');
// }, []);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="">
              {/* PERBAIKAN: Gunakan children bukan prop text */}
              <SplitText
                tag="h1"
                className="text-4xl md:text-6xl font-bold text-white mb-6 text-center"
                delay={100}
                duration={0.6}
                ease="power3.out"
                splitType="chars"
                from={{ opacity: 0, y: 40 }}
                to={{ opacity: 1, y: 0 }}
                onLetterAnimationComplete={handleAnimationComplete}
              >
                {/* Konten sebagai children */}
                Hello, I'm <span className="text-blue-300">mahelbee</span>
              </SplitText>
              
              <h2 className="text-xl md:text-2xl text-primary-100 mb-6">
                Full-Stack Developer & UI/UX Designer
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
                I love the evolution of the modern world, with features that make it easier for me to complete various tasks. Let's learn together and grow to be better.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/portfolio" className="btn-primary inline-flex items-center justify-center">
                  View My Work
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
                <button className="btn-secondary inline-flex items-center justify-center">
                  Download CV
                  <Download className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-secondary-400 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full opacity-40"></div>
                <div className="absolute inset-8 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <Image
                    src="/img/me.png"
                    alt="mahelbee"
                    width={256}
                    height={256}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Skills Section */}
        <section className="py-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-300 mb-4">
                What I Do
              </h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                I specialize in creating comprehensive digital solutions from concept to deployment
              </p>
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