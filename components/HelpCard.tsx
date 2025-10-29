'use client';

import {useState} from 'react';
import PixelTransition from '../app/PixelTransition';
import AnimatedContent from '../app/AnimatedContent';
import GlareHover from './GlareHover';


export default function HelpCard ({helpData}) {
    const [isExpanded, setIsExpanded] = useState(false);

    const fullText = helpData.desc.join('\n\n');
    const characterLimit = 170;
    const isTooLong = fullText.length > characterLimit;

    const displayText = isTooLong && !isExpanded
        ? fullText.slice(0, characterLimit) + '...'
        : fullText;

    const paragraphs = displayText.split('\n\n');

    return (
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
                <div className="flex flex-col md:flex-row items-stretch md:gap-[40px] gap-6">
                    <PixelTransition 
                        className="custom-pixel-card w-1/2 mx-auto md:w-[200px] h-full border-2 border-white rounded-lg" 
                        firstContent={
                            <img
                                src={helpData.img}
                                alt={helpData.title}
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
                                <p style={{ fontWeight: 900, fontSize: "2rem", color: "#ffffff" }} >{helpData.quote}</p>
                            </div>
                        }
                        gridSize={12}
                        pixelColor='#ffffff'
                        animationStepDuration={0.4}
                    />

                    {/* 2. Kartu Deskripsi */}
                    <GlareHover
                        glareColor="#ffffff" 
                        glareOpacity={0.3}  
                        glareAngle={-45}    
                        glareSize={300}     
                        transitionDuration={500}
                        playOnce={false}
                    >
                    <div 
                        className="card group hover:transform transition-all duration-300
                        bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-lg 
                        w-full md:flex-1 h-full flex flex-col"
                    > 
                    <div className="mb-6">
                        <p className=" text-slate-300 text-3xl font-bold">
                            {helpData.title}
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

                </div>
            </div>
        </AnimatedContent>
    );

}