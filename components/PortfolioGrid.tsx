'use client' ;

import {useState} from 'react';
import Image from 'next/image';
import GlareHover from './GlareHover';
import AnimatedContent from '../app/AnimatedContent';

export default function PortfolioGrid ({portofolioItems}) {
    // const [isExpanded, setIsExpanded] = useState(false);
    const titleLimit = 50;
    const characterLimit = 250; // Updated character limit for consistency

    return (
        // <div className=''>
        <>
            {portofolioItems.map((item, index) => {

                const isTitleTooLong = item.title.length > titleLimit;
                const displayTitle = isTitleTooLong
                    ? item.title.slice(0, titleLimit) + '...'
                    : item.title;

                const fullText = item.desc.join(' ');
                const isTooLong = fullText.length > characterLimit;
                const displayText = isTooLong ? fullText.slice(0, characterLimit) + '...' : fullText;

            return (
                <AnimatedContent
                    key={item.id}
                    distance={50}
                    direction="vertical"
                    duration={0.8}
                    ease="power3.out"
                    initialOpacity={0}
                    animateOpacity
                    threshold={0.2}
                    delay={index * 0.1}
                >
                                        <GlareHover
                                            glareColor="#ffffff"
                                            glareOpacity={0.3}
                                            glareAngle={-45}
                                            glareSize={300}
                                            transitionDuration={1000}
                                            playOnce={false}
                                            background='bg-white/10'
                                            className='backdrop-blur-md border border-white/20 p-6 rounded-lg h-[550px]'
                                        >
                                            <div
                                                className='h-full flex flex-col'
                                            >
                                                <div className='relative w-full h-48'>
                                                    <Image
                                                        src={item.img}
                                                        alt={item.title}
                                                        fill
                                                        style={{ objectFit: 'cover' }}
                                                        className='transition-transform duration-500 hover:scale-105 rounded-lg'
                                                    />
                                                </div>
                    
                                                <div className='pt-6 flex flex-col flex-grow'>
                                                    <h3 className='text-xl font-semibold text-slate-300 mb-3'>
                                                        {displayTitle}
                                                    </h3>
                                                    <p className='text-slate-300 leading-relaxed flex-grow'>
                                                        {displayText}
                                                    </p>
                                                    <div className='flex items-center justify-between mt-4 border-t pt-4 border-white/20'>
                                                            <div className='flex items-center space-x-3'>
                                                            <img
                                                                className='w-10 h-10 rounded-full object-cover'
                                                                src={item.icon || 'https://via.placeholder.com/40'}
                                                                alt={`${item.author} icon`}
                                                            />
                                                            <p className='text-sm font-semibold text-slate-300'>{item.author}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </GlareHover>                </AnimatedContent>
            );})}
        </>
    );
}
