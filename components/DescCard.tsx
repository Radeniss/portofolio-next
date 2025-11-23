'use client';

import {useState} from 'react';
import PixelTransition from '../app/PixelTransition';
import AnimatedContent from '../app/AnimatedContent';
import GlareHover from './GlareHover';


export default function DescCard ({descData, index}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const fullText = descData.desc.join('\n\n');
    const characterLimit = 170;
    const isTooLong = fullText.length > characterLimit;

    const displayText = isTooLong && !isExpanded
        ? fullText.slice(0, characterLimit) + '...'
        : fullText;

    const paragraphs = displayText.split('\n\n');

    return (
        <div className="flex flex-row items-start gap-6">
            <AnimatedContent
                distance={100}
                direction="horizontal"
                duration={0.8}
                initialOpacity={0}
                animateOpacity
                threshold={0.2}
                delay={index * 0.2}
            >
                <PixelTransition 
                    className="custom-pixel-card w-[80px] h-[80px] md:w-[200px] md:h-[200px] mx-auto border-2 border-white rounded-lg flex-none flex-shrink-0"
                    firstContent={
                        <img
                            src={descData.img}
                            alt={descData.title}
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
                            <p style={{ fontWeight: 900, fontSize: "2rem", color: "#ffffff" }} >{descData.quote}</p>
                        </div>
                    }
                    gridSize={12}
                    pixelColor='#ffffff'
                    animationStepDuration={0.4}
                />
            </AnimatedContent>

            {/* 2. Kartu Deskripsi */}
            <AnimatedContent
                distance={100}
                direction="horizontal"
                reverse={true}
                duration={0.8}
                initialOpacity={0}
                animateOpacity
                threshold={0.2}
                delay={(index * 0.2) + 0.1}
            >
                <GlareHover
                    glareColor="#ffffff" 
                    glareOpacity={0.3}  
                    glareAngle={-45}    
                    glareSize={300}     
                    transitionDuration={1000}
                    playOnce={false}
                    background='none'
                    className='h-full'
                >
                <div 
                    className="card group hover:transform transition-all duration-300
                    bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg 
                    w-full md:flex-1 h-full flex flex-col"
                > 
                <div className="mb-6">
                    <p className=" text-slate-300 text-3xl font-bold">
                        {descData.title}
                    </p>
                </div>
                <div className="text-md text-slate-300 flex-1"> 
                    {paragraphs.map((paragraph, pIndex) => (
                    <p 
                        key={pIndex} 
                        className={pIndex < paragraphs.length - 1 ? 'mb-4 leading-relaxed' : 'leading-relaxed'}
                    >
                        {paragraph}
                    </p>
                    ))}
                </div>

                {/* Tombol More/Less */}
                {isTooLong && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-blue-300 font-semibold text-left mt-4 hover:underline"
                >
                    {isExpanded ? 'Show Less' : 'More...'}
                </button>
                )}
                </div>
                </GlareHover>
            </AnimatedContent>
        </div>
    );

}