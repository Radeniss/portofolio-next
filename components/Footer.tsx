import { Github, Linkedin, Mail, Twitter, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">DevPortfolio</h3>
            <p className="text-slate-300 mb-6 max-w-md">
              A passionate full-stack developer crafting digital experiences with modern technologies.
              Let&apos;s build something amazing together.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-6 w-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Twitter Profile"
              >
                <Twitter className="h-6 w-6" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-slate-400 hover:text-white transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/portfolio" className="text-slate-300 hover:text-white transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/projects" className="text-slate-300 hover:text-white transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="/blog" className="text-slate-300 hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-2 text-slate-300">
              <li>radenis354@gmail.com</li>
              <li>+62 82267281439</li>
              <li>Takengon, Center Aceh</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © 2024 DevPortfolio. All rights reserved.
          </p>
          <p className="text-slate-400 text-sm flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 mx-1 text-red-500" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer