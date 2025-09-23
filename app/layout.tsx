import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Particles from './Particles';


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'mahelbee - Full Stack Developer',
  description: 'Professional portfolio of Mahelbee, a full-stack developer specializing in modern web technologies.',
  keywords: 'web developer, full stack, React, Next.js, portfolio',
  authors: [{ name: 'mahelbee' }],
  openGraph: {
    title: 'mahelbee - Full Stack Developer',
    description: 'Professional portfolio showcasing modern web development projects',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* <body className={`${inter.className} min-h-screen bg-secondary-950 relative`}> */}
        <body style={{
          width: '100%',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -20,
          backgroundColor: '#03001C',
        }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
            className=""
            ></Particles>

        {/* </div> */}
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}