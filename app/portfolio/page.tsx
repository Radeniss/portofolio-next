import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'

export const metadata = {
  title: 'Portfolio - mahelbee',
  description: 'View my latest web development projects and creative work.',
}

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: 'Learn Together',
      img: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      desc : [`The students were very enthusiastic about learning, and many of them wanted to listen and try. We learned how to grow watermelons, with a learning target of approximately three weeks. The students learned how to select good watermelon seeds, sow them, and prepare a nutritious and suitable growing medium for watermelons.`]
    },
    {
      id: 2,
      title: 'Learning Python Language with Students',
      img: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      desc : [`I learned the basics of Python and introduced a bit to OOP. Many students still dont understand what coding is or what its functions are. However, many of them are curious, which motivates me to teach and mentor.`]
    }
  ]

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20"
      style={{ 
          backgroundBlendMode: "overlay"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in">
            My Portfolio
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto animate-fade-in">
            I feel better when I gather with friends, share and help each other, experience joy and sorrow together, and solve complicated problems together, I think that's a fun thing.
          </p>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-5">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>

          </div>
        </div>
      </section>
    </div>
  )
}