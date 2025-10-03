  'use client';

  import Link from 'next/link'
  import Image from 'next/image'
  import { ArrowRight, Download, Code, Palette, Globe } from 'lucide-react'
  import SplitText from './SplitText'
  import TiltedCard from './TilteCard';
  import PixelTransition from './PixelTransition';


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
  
  const helps =[
    {
      title: 'Coding',
      desc: [
        `You must feel tired when your coding always gives you errors and you're confused about where the error is. What programming language are you using? Let's fix it together.`,

        `I know the frustration of spending hours staring at the screen, hunting for a single missing semicolon or a flawed logic. Don't worry, you are not alone on this journey. Whatever the programming language from the flexibility of Python, the dynamism of JavaScript, the complexity of C++, or even the occasional quirks of markup like HTML/CSS I am here to listen and try to understand your thought process. Sending in error ridden code might feel embarrassing, but trust me, it’s the first step towards a solution.`,

        `So, don't hesitate to share. Tell me a bit about your project and where you're getting stuck. We can talk about everything from data structures, algorithms, best practices, to specific debugging techniques. I may not always have an instant answer (because the world of coding is vast!), but I promise to offer a different perspective, help refine your logical flow, or even just be an effective rubber duck (a sounding board for articulating the problem). Bring your problem, and let's dissect the code together until you can get back to the joy of creation.`
      ],
      link: '/portfolio'
}
  ]

  const handleAnimationComplete = () => {
    console.log('SplitText animation completed!');
  };


  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="">
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
                Hello, I'm <span className="text-blue-300">mahelbee</span>
              </SplitText>
              
              <h2 className="text-xl md:text-2xl text-primary-100 mb-6 animate-slide-in">
                Full-Stack Developer & UI/UX Designer
              </h2>
              <p className="text-lg text-slate-300 mb-8 max-w-xl leading-relaxed animate-slide-in">
                I love the evolution of the modern world, with features that make it easier for me to complete various tasks. Let's learn together and grow to be better.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/portfolio" className="btn-primary inline-flex items-center justify-center animate-slide-in delay-500">
                  View My Work
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
                <button className="btn-secondary inline-flex items-center justify-center animate-slide-in delay-600">
                  Download CV
                  <Download className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute shadow-2xl">
                  <TiltedCard
                    imageSrc="/img/me.png"
                    altText="mahelbee - GNX Album Cover"
                    captionText="it's me brohh.."
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.2}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <p className="tilted-card-demo-text" />
                    }
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

        {/* are you tired? */}
        <section className="py-60">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className='text-center mb-16'>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-300 mb-4">
                        Are You Tired?
                    </h2>
                    <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                        Maybe I can help you with some things. I also get tired sometimes, at that time my friends listen and give the best solution
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-stretch md:gap-[40px] gap-6">                     
                    <PixelTransition 
                        className="custom-pixel-card w-full md:w-[200px] h-full border-2 border-white rounded-lg" 
                        firstContent={
                            <img
                                src="img/me.png"
                                alt="default pixel transition content, a cat!"
                                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                            />
                        }
                        secondContent={
                            <div
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    display: "grid",
                                    placeItems: "center",
                                    backgroundColor: "#111"
                                }}
                            >
                                <p style={{ fontWeight: 900, fontSize: "2rem", color: "#ffffff" }}>Eyyowww</p>
                            </div>
                        }
                        gridSize={12}
                        pixelColor='#ffffff'
                        animationStepDuration={0.4}
                    />
                    
                    {helps.map((help, index) => (
                      
                    <div key={help.title}
                        className="card group hover:transform transition-all duration-300
                                  bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg 
                                  w-full md:flex-1 h-full flex flex-col"> 
                        <div className="mb-6">
                            <p className=" text-slate-300 text-3xl font-bold">
                                {help.title}
                            </p>
                        </div>
                        <h3 className="text-md text-slate-300 mb-3 ">
                            {help.desc.map((paragraph, pIndex) => (
                              <p key={pIndex}
                                className={pIndex < help.desc.length -1 ? 'mb-4 leading-relaxed' : 'leading-relaxed'}>
                                {paragraph}
                              </p>
                            ))}
                        </h3>
                        <Link 
                          href='/portofolio'
                          className="text-slate-300 leading-relaxed flex items-center transition-colors hover:text-blue-300 mt-auto group">
                            more
                            <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" /> 
                        </Link>
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