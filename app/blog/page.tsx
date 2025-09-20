import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react'

export const metadata = {
  title: 'Blog - mahelbee',
  description: 'Thoughts and insights on web development, technology trends, and best practices.',
}

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications with Next.js 14',
      excerpt: 'Explore the latest features in Next.js 14 and learn how to build performant, scalable React applications with the new App Router.',
      content: 'Next.js 14 introduces groundbreaking features that revolutionize how we build React applications...',
      author: 'Alex Johnson',
      date: '2024-03-15',
      readTime: '8 min read',
      category: 'React',
      tags: ['Next.js', 'React', 'Performance', 'App Router'],
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true,
      slug: 'building-scalable-react-applications-nextjs-14'
    },
    {
      id: 2,
      title: 'Mastering TypeScript: Advanced Patterns and Best Practices',
      excerpt: 'Deep dive into advanced TypeScript patterns that will make your code more robust, maintainable, and type-safe.',
      content: 'TypeScript has become essential for modern web development. Let\'s explore advanced patterns...',
      author: 'Alex Johnson',
      date: '2024-03-08',
      readTime: '12 min read',
      category: 'TypeScript',
      tags: ['TypeScript', 'JavaScript', 'Best Practices', 'Type Safety'],
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true,
      slug: 'mastering-typescript-advanced-patterns'
    },
    {
      id: 3,
      title: 'The Complete Guide to Tailwind CSS in 2024',
      excerpt: 'Everything you need to know about Tailwind CSS, from basic concepts to advanced customization and optimization techniques.',
      content: 'Tailwind CSS has transformed how we approach styling in modern web applications...',
      author: 'Alex Johnson',
      date: '2024-02-28',
      readTime: '10 min read',
      category: 'CSS',
      tags: ['Tailwind CSS', 'CSS', 'Design Systems', 'UI Development'],
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: true,
      slug: 'complete-guide-tailwind-css-2024'
    },
    {
      id: 4,
      title: 'Optimizing Web Performance: Core Web Vitals and Beyond',
      excerpt: 'Learn how to optimize your website\'s performance using modern techniques and tools to improve Core Web Vitals scores.',
      content: 'Web performance is crucial for user experience and SEO. Let\'s explore optimization strategies...',
      author: 'Alex Johnson',
      date: '2024-02-20',
      readTime: '15 min read',
      category: 'Performance',
      tags: ['Performance', 'Core Web Vitals', 'SEO', 'Optimization'],
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
      slug: 'optimizing-web-performance-core-web-vitals'
    },
    {
      id: 5,
      title: 'Building RESTful APIs with Node.js and Express',
      excerpt: 'A comprehensive guide to creating robust, scalable APIs using Node.js, Express, and modern best practices.',
      content: 'APIs are the backbone of modern web applications. Learn how to build them effectively...',
      author: 'Alex Johnson',
      date: '2024-02-12',
      readTime: '11 min read',
      category: 'Backend',
      tags: ['Node.js', 'Express', 'API Development', 'Backend'],
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
      slug: 'building-restful-apis-nodejs-express'
    },
    {
      id: 6,
      title: 'Modern CSS Grid and Flexbox Layout Techniques',
      excerpt: 'Master CSS Grid and Flexbox to create complex, responsive layouts with clean, maintainable code.',
      content: 'CSS Grid and Flexbox have revolutionized how we approach layout in CSS...',
      author: 'Alex Johnson',
      date: '2024-01-30',
      readTime: '9 min read',
      category: 'CSS',
      tags: ['CSS Grid', 'Flexbox', 'Layout', 'Responsive Design'],
      image: 'https://images.pexels.com/photos/326508/pexels-photo-326508.jpeg?auto=compress&cs=tinysrgb&w=600',
      featured: false,
      slug: 'modern-css-grid-flexbox-layout-techniques'
    }
  ]

  const featuredPosts = blogPosts.filter(post => post.featured)
  const regularPosts = blogPosts.filter(post => !post.featured)

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      'React': 'bg-blue-100 text-blue-800',
      'TypeScript': 'bg-purple-100 text-purple-800',
      'CSS': 'bg-green-100 text-green-800',
      'Performance': 'bg-orange-100 text-orange-800',
      'Backend': 'bg-indigo-100 text-indigo-800',
    }
    return colors[category] || 'bg-slate-100 text-slate-800'
  }

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20"
      style={{ 
          backgroundImage: "url('/img/background.png')",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Warna hitam dengan opacity 50%
          backgroundBlendMode: "overlay"}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-slide-in">
            Developer Blog
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto animate-fade-in">
            Thoughts, tutorials, and insights on modern web development and technology trends
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Featured Articles
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <article 
                key={post.id} 
                className="card group hover:shadow-2xl transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={240}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                      {post.category}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center text-sm text-slate-500 mb-3">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.slice(0, 3).map((tag) => (
                    <span 
                      key={tag} 
                      className="inline-flex items-center px-2 py-1 bg-slate-100 text-slate-600 rounded text-sm hover:bg-primary-100 hover:text-primary-700 transition-colors"
                    >
                      <Tag className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                {/* <Link 
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold group-hover:translate-x-1 transition-transform"
                >
                  Read More 
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link> */}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Posts */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-800 mb-12 text-center">
            Recent Articles
          </h2>
          
          <div className="space-y-8">
            {regularPosts.map((post, index) => (
              <article 
                key={post.id} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="md:col-span-1">
                    <div className="relative overflow-hidden rounded-lg">
                      <Image
                        src={post.image}
                        alt={post.title}
                        width={300}
                        height={200}
                        className="w-full h-32 md:h-24 object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-4 mb-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(post.category)}`}>
                        {post.category}
                      </span>
                      <div className="flex items-center text-sm text-slate-500">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span className="mr-4">{new Date(post.date).toLocaleDateString()}</span>
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-slate-800 mb-3 hover:text-primary-600 transition-colors">
                      <Link href={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </h3>
                    
                    <p className="text-slate-600 mb-4 leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap items-center justify-between">
                      <div className="flex flex-wrap gap-2 mb-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span 
                            key={tag} 
                            className="inline-flex items-center px-2 py-1 bg-slate-100 text-slate-600 rounded text-sm"
                          >
                            <Tag className="h-3 w-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                      </div>
                      
                      {/* <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold hover:translate-x-1 transition-transform"
                      >
                        Read More 
                        <ArrowRight className="h-4 w-4 ml-1" />
                      </Link> */}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Get the latest articles and tutorials delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-none focus:ring-4 focus:ring-primary-300 focus:outline-none"
            />
            <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}