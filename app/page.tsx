'use client';

import Link from 'next/link'
import { ArrowRight, Download, Code, Palette, Globe } from 'lucide-react'
import SplitText from './SplitText'
import TiltedCard from './TilteCard';
import HelpCard from '../components/HelpCard';
import SkillCard from './SkillCard';
import { useState } from 'react';
import AnimatedContent from './AnimatedContent';


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
            title: 'Coding Help',
            img:'/img/2.png',
            quote:'CODE FIX',
            desc: [
                `You must feel tired when your coding always gives you errors and you're confused about where the error is. What programming language are you using? Let's fix it together.`,

                `I know the frustration of spending hours staring at the screen, hunting for a single missing semicolon or a flawed logic. Don't worry, you are not alone on this journey. Whatever the programming language from the flexibility of Python, the dynamism of JavaScript, the complexity of C++, or even the occasional quirks of markup like HTML/CSS I am here to listen and try to understand your thought process.`,
            ],
        },
        {
            title: 'Design Review',
            img:'/img/3.png',
            quote:'DESIGN',
            desc: [
                `I can help review your UI/UX design concepts in depth, not just by providing brief feedback, but also by offering strategic guidance on overall usability, aesthetics, and user flow.`,

                `A great design isn't just about looks; it's about making the user experience seamless and enjoyable. Bring your Figma links or mockups, and we can discuss color theory, typography, accessibility, and modern design principles. Let's make your interface beautiful and highly functional.`,
            ],
        },

        {
            title: 'Learn Mechine Learning',
            img:'/img/4.png',
            quote:'ML',
            desc: [
                `Machine Learning (ML) is truly exciting, especially when we see our models learning and performing well. But honestly, have you ever been in the middle of training a model and then been hit by an error that makes your head spin? Whether it's a dataset full of noise requiring extra preprocessing, or the model we chose suddenly acts up and doesn't meet expectations.`,

                `That frustration is totally normal, because behind every successful, sophisticated model lies a ton of experiments and debugging. Those moments when we have to spend hours just cleaning up messy data, or trying out various hyperparameters without any significant results, often test our patience. This process—which involves models failing to converge, predictions being completely off the mark, or the emergence of the inevitable Bias Variance Trade off is a crucial part of a data scientist's journey. Never feel alone; every ML professional has been at that point where they had to scrap an entire notebook and start over. These very challenges are what teach us persistence and a deeper understanding of the intricacies of data and algorithms. So, you’ve been on that emotional roller coaster too, right?`],
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
                <div> 
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <AnimatedContent
                                distance={150}
                                direction="vertical"
                                reverse={false}
                                duration={0.8}
                                ease=""
                                initialOpacity={0.2}
                                animateOpacity
                                scale={1.1}
                                threshold={0.2}
                                delay={0.15}
                                >
                                <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-300 mb-4">
                                    What I Do
                                </h2>
                                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                                    I specialize in creating comprehensive digital solutions from concept to deployment
                                </p>
                                </div>
                            </AnimatedContent>
                        </div>

                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {skills.map((skill, index) => (
                                <SkillCard 
                                    key={skill.name}
                                    icon={skill.icon}
                                    name={skill.name}
                                    desc={skill.desc}
                                    index={index}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Are You Tired? Section (Help Section) */}
            <section className="py-60">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className='text-center mb-16'>
                        <AnimatedContent
                            distance={150}
                            direction="vertical"
                            reverse={false}
                            duration={0.8}
                            ease=""
                            initialOpacity={0.2}
                            animateOpacity
                            scale={1.1}
                            threshold={0.2}
                            delay={0.15}
                            >
                            <div>
                                <h2 className="text-3xl md:text-4xl font-bold text-slate-300 mb-4">
                                    Are You Tired?
                                </h2>
                                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                                    Maybe I can help you with some things. I also get tired sometimes, at that time my friends listen and give the best solution
                                </p>        
                            </div>
                        </AnimatedContent>
                    </div>

                    <div className="flex flex-col space-y-8">
                        {helps.map((help, index) => (
                            <HelpCard key={index} helpData={help}
                        />
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