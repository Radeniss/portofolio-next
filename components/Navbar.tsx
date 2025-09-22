'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Code2 } from 'lucide-react'

// Define a common set of classes for hover and transition effects
const linkHoverClasses = 'hover:bg-white/20 hover:text-secondary-500 transition-colors duration-200'
const activeLinkClasses = 'bg-primary-600 text-white'
const baseLinkClasses = 'px-3 py-2 text-sm font-medium transition-all duration-200'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Projects', path: '/projects' },
    { name: 'Certificates', path: '/certificates' },
    { name: 'Blog', path: '/blog' },
  ]

  const isActive = (path: string) => pathname === path

  return (
    <nav className={`
      fixed top-4 left-1/2 -translate-x-1/2 z-50
      w-11/12 max-w-3xl h-16
      rounded-full border border-white/20
      shadow-md transition-all duration-300
      flex justify-between items-center px-4 sm:px-6 lg:px-8
      ${isScrolled 
        ? 'bg-white/30 backdrop-blur-lg' 
        : 'bg-white/10 backdrop-blur-lg'
      }`}
    >
      {/* Menghapus div lama dan memindahkan isinya ke sini untuk tata letak yang benar */}
      <div className="flex justify-between items-center h-full w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group shrink-0">
          <Code2 className={`h-8 w-8 transition-colors ${
            isScrolled ? 'text-primary-600' : 'text-black'
          } group-hover:text-secondary-500`} />
          <span className={`text-xl font-bold transition-colors whitespace-nowrap ${
            isScrolled ? 'text-slate-800' : 'text-black'
          } group-hover:text-secondary-500`}>
            DevPortfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <div className="flex items-center space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`
                  ${baseLinkClasses} rounded-full
                  ${isActive(item.path) ? activeLinkClasses : isScrolled ? 'text-slate-900 hover:bg-slate-100/50 hover:text-primary-600' : `text-white ${linkHoverClasses}`}
                `}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`p-2 rounded-md transition-colors ${
              isScrolled ? 'text-slate-600 hover:text-primary-600' : 'text-black hover:text-secondary-400'
            }`}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-1/2 -translate-x-1/2 mt-2 w-11/12">
          <div className="px-4 py-4 space-y-2 bg-white/50 backdrop-blur-lg shadow-lg rounded-xl border border-white/20">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? 'bg-primary-600 text-white'
                    : 'text-slate-700 hover:bg-slate-100/50 hover:text-primary-600'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar