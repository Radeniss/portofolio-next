import Image from 'next/image'
import { portfolioItems } from '@/lib/portfolioData'
import Link from 'next/link'

type PortfolioDetailProps = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: PortfolioDetailProps) {
  const item = portfolioItems.find(p => p.id.toString() === params.id)
  if (!item) {
    return {
      title: 'Portfolio Item Not Found'
    }
  }
  return {
    title: `${item.title} - My Portfolio`
  }
}

const PortfolioSection = ({ text, imageUrl, imageAlt, reverse = false }) => (
    <div className={`flex flex-col md:flex-row items-center gap-8 ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <div className="md:w-5/6"> 
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-8">
                <p className="text-gray-300">{text}</p>
            </div>
        </div>
        <div className="md:w-1/2"> 
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-lg"> 
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    fill 
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-300 ease-in-out hover:scale-105"
                />
            </div>
        </div>
    </div>
)

export default function PortfolioDetail({ params }: PortfolioDetailProps) {
  const item = portfolioItems.find(p => p.id.toString() === params.id)

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-center">
        <h1 className="text-4xl font-bold mb-4 pt-20">Portfolio Item Not Found</h1>
        <Link href="/portfolio" className="text-lg text-blue-500 hover:underline pt-20">
          Back to Portfolio
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 pt-20">
          <Link href="/portfolio" className="text-sm text-gray-400 hover:text-white transition-colors">
            &larr; Back to Portfolio
          </Link>
        </div>
        
        <article className='mb-20'>
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {item.title}
            </h1>
            <div className="flex items-center justify-center mb-6">
              <Image 
                src={item.icon}
                alt={`${item.author}'s icon`}
                width={40}
                height={40}
                className="rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-white">{item.author}</p>
                <p className="text-sm text-gray-400">Author</p>
              </div>
            </div>
          </header>

          <div className="space-y-16">
            {item.desc.map((text, index) => (
                <PortfolioSection 
                    key={index}
                    text={text}
                    imageUrl={item.images[index]}
                    imageAlt={`${item.title} - Image ${index + 1}`}
                    reverse={index % 2 === 0}
                />
            ))}
          </div>
        </article>
      </div>
    </div>
  )
}