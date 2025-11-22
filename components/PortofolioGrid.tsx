'use client' ;

import {useState} from 'react';
import Image from 'next/image';

export default function PortofolioGrid ({portofolioItems}) {
    // const [isExpanded, setIsExpanded] = useState(false);
    const titleLimit = 50;
    const characterLimit = 120;

    // create displayText in one valid statement (was split across lines causing a syntax error)

    // const paragraphs = displayText.split('\n\n');

    return (
        // <div className=''>
        <>
            {portofolioItems.map((item) => {

                const isTitleTooLong = item.title.length > titleLimit;
                const displayTitle = isTitleTooLong
                    ? item.title.slice(0, titleLimit) + '...'
                    : item.title;

                const fullText = item.desc.join(' ');
                const isTooLong = fullText.length > characterLimit;
                const displayText = isTooLong ? fullText.slice(0, characterLimit) + '...' : fullText;

            return (
                <div 
                    key={item.id}
                    className='bg-white rounded-xl shadow-lg overflow-hidden transition-shadow duration-300 hover:shadow-xl border border-gray-100'
                >
                    <div className='relative w-full h-48'>
                        <Image
                            src={item.img}
                            alt={item.title}
                            fill
                            style={{ objectFit: 'cover' }}
                            className='transition-transform duration-500 hover:scale-105'
                        />
                    </div>

                    <div className='p-6'>
                        <h3 className='text-xl font-bold mb-2 text-gray-800'>
                            {displayTitle}
                        </h3>
                        <p className='text-gray-600 mb-4 text-sm'>
                            {displayText}
                        </p>
                        <div className='flex items-center justify-between mt-4 border-t pt-4'>

                            <img 
                                className='w-10 h-10 rounded-full object-cover' 
                                src="" 
                                alt="" 
                            />
                            <div>
                                <p className='text-sm font-semibold text-gray-900'>johan</p>
                                <p className='text-xs text-gray-500'>ceo comander</p>
                            </div>
                        </div>
                    </div>
                </div>
            );})}
        </>
    );
}