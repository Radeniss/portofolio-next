import PortfolioGrid from '@/components/PortfolioGrid'
import { prisma } from '@/lib/prisma'

export const metadata = {
  title: 'Portfolio - mahelbee',
  description: 'View my latest web development projects and creative work.',
}

export const revalidate = 60; // Revalidate data every 60 seconds

export default async function Portfolio() {
  const portfolioItems = await prisma.portfolioItem.findMany({
    orderBy: {
      date: 'desc',
    },
  })

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
            <PortfolioGrid portofolioItems={portfolioItems} />
          </div>
        </div>
      </section>
    </div>
  )
}