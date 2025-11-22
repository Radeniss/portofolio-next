import Image from 'next/image'
import { ExternalLink, Github } from 'lucide-react'
import PortofolioGrid from '@/components/PortofolioGrid'

export const metadata = {
  title: 'Portfolio - mahelbee',
  description: 'View my latest web development projects and creative work.',
}

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      title: 'Learn Together',
      author : 'mahelbee',
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
      img: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
      desc : [`The students were very enthusiastic about learning, and many of them wanted to listen and try. We learned how to grow watermelons, with a learning target of approximately three weeks. The students learned how to select good watermelon seeds, sow them, and prepare a nutritious and suitable growing medium for watermelons.`]
    },
    {
      id: 2,
      title: 'Learning Python Language with Students',
      author : 'mahelbee',
      icon : 'https://cdn-icons-png.flaticon.com/512/5968/5968350.png',
      img: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
      desc : [`I learned the basics of Python and introduced a bit to OOP. Many students still dont understand what coding is or what its functions are. However, many of them are curious, which motivates me to teach and mentor.`]
    },
    {
      id: 3,
      title: 'Introduction to Artificial Intelligence',
      author: 'mahelbee',
      icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055685.png',
      img: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600',
      desc: ['Exploring the fundamentals of AI, including machine learning and neural networks. This session covers the basic concepts and real-world applications of AI technology.']
    },
    {
      id: 4,
      title: 'Web Development Bootcamp: HTML & CSS',
      author: 'mahelbee',
      icon: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
      img: 'https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600',
      desc: ['A hands-on workshop for beginners to learn the building blocks of the web. We will create a simple, beautiful webpage from scratch using HTML and CSS.']
    },
    {
      id: 5,
      title: 'Gardening 101: Preparing Your Soil',
      author: 'mahelbee',
      icon: 'https://cdn-icons-png.flaticon.com/512/2382/2382428.png',
      img: 'https://images.pexels.com/photos/60883/soil-dirt-agriculture-natural-60883.jpeg?auto=compress&cs=tinysrgb&w=600',
      desc: ['Learn how to prepare the perfect soil mix for your plants. This lesson covers composting, soil types, and nutrients needed for a thriving garden.']
    },
    {
      id: 6,
      title: 'The Magic of Photosynthesis',
      author: 'mahelbee',
      icon: 'https://cdn-icons-png.flaticon.com/512/2382/2382428.png',
      img: 'https://images.pexels.com/photos/220357/pexels-photo-220357.jpeg?auto=compress&cs=tinysrgb&w=600',
      desc: ['A deep dive into how plants create their own food using sunlight. An essential topic for anyone interested in botany and the natural world.']
    },
    {
      id: 7,
      title: 'Physics Fun: Understanding Kinetic Energy',
      author: 'mahelbee',
      icon: 'https://cdn-icons-png.flaticon.com/512/3304/3304400.png',
      img: 'https://images.pexels.com/photos/1542/pen-notes-school-stationery.jpg?auto=compress&cs=tinysrgb&w=600',
      desc: ['An interactive session explaining kinetic energy with simple experiments. We will explore how motion translates to energy in everyday objects.']
    },
    {
      id: 8,
      title: 'Introduction to JavaScript Algorithms',
      author: 'mahelbee',
      icon: 'https://cdn-icons-png.flaticon.com/512/5968/5968292.png',
      img: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600',
      desc: ['Learn fundamental programming algorithms and data structures using JavaScript. This session is perfect for those looking to sharpen their problem-solving skills.']
    },
    {
      id: 9,
      title: 'Urban Farming: Growing in Small Spaces',
      author: 'mahelbee',
      icon: 'https://cdn-icons-png.flaticon.com/512/2382/2382428.png',
      img: 'https://images.pexels.com/photos/2519374/pexels-photo-2519374.jpeg?auto=compress&cs=tinysrgb&w=600',
      desc: ['Discover techniques for growing your own food in an urban environment. We will cover vertical gardening, container gardening, and hydroponics basics.']
    },
    {
      id: 10,
      title: 'Exploring Neural Networks',
      author: 'mahelbee',
      icon: 'https://cdn-icons-png.flaticon.com/512/1055/1055685.png',
      img: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=600',
      desc: ['A follow-up to our AI intro, this session focuses specifically on the architecture and function of neural networks, the backbone of deep learning.']
    },
    {
      id: 11,
      title: 'The Science of Composting',
      author: 'mahelbee',
      icon: 'https://cdn-icons-png.flaticon.com/512/2382/2382428.png',
      img: 'https://images.pexels.com/photos/3952048/pexels-photo-3952048.jpeg?auto=compress&cs=tinysrgb&w=600',
      desc: ['Turn your kitchen scraps into nutrient-rich soil. This workshop covers the do\'s and don\'ts of composting to help you reduce waste and feed your garden.']
    },
    {
      id: 12,
      title: 'Advanced CSS: Animations and Transitions',
      author: 'mahelbee',
      icon: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
      img: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600',
      desc: ['Take your web design skills to the next level by learning how to create fluid animations and transitions with pure CSS.']
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
      <section className="py-5 mb-20">
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <PortofolioGrid portofolioItems={portfolioItems} />
          </div>
        </div>
      </section>
    </div>
  )
}