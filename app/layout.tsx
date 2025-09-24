import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Particles from './Particles';

const inter = Inter({ subsets: ['latin'] });

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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} relative min-h-screen bg-secondary-950`}>
          
<Particles
  particleColors={['#ffffff', '#e5e5e5', '#d4d4d4']}
  particleCount={200}
  particleSpread={15} // Lebih menyebar
  speed={0.1} // Sedikit lebih cepat
  particleBaseSize={120} // Size lebih besar
  moveParticlesOnHover={true}
  particleHoverFactor={1.5} // Efek hover lebih kuat
  alphaParticles={true}
  disableRotation={false}
  className="fixed top-0 left-0 w-full h-screen -z-10"
/>
        <div className="relative z-10 flex flex-col min-h-screen isolate">
          <Navbar />
          
          <main className="flex-grow">
            {children}
            
          </main>
          <Footer />
        </div>  
      </body>
    </html>
  );
}