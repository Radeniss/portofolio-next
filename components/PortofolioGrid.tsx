'use client' ;

import {useState} from 'react';

export default function PortofolioGrid ({portofolioItems}) {
    const [isExpanded, setIsExpanded] = useState(false);
    const fullText = portofolioItems.desc.join('\n\n');
    const characterLimit = 170;
    const isToolong = fullText.length > characterLimit;

    const displayText = isToolong && !isExpanded
    ? fullText.slice(0, characterLimit) + '...'
    : fullText;

    const paragraphs = displayText.split('\n\n');

    return (
        <div className=''>
            {portofolioItems.map((item) => (
                <div 
                    key={item.id}
                    className='bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hier:shadow-x1 border border-gray-100'
                >
                    <div className='realtive w-full h-48'>
                        <img
                            src={item.img}
                            alt={item.title}
                            layout='fill'
                            objectFit='cover'
                            className='trasnsition-transform duration-500 hover:scale-105'
                        />
                    </div>
                </div>
            ))}
        </div>
    );
}