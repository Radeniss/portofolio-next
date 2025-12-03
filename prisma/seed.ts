import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import { portfolioItems } from '../lib/portfolioData';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import * as bcrypt from 'bcrypt';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const projects = [
  {
    title: 'AI-Powered Code Assistant',
    description: 'An intelligent code assistant that provides real-time suggestions, bug detection, and performance optimizations. Built with modern AI models.',
    status: 'Active',
    technologies: ['Next.js', 'TypeScript', 'Prisma', 'GraphQL', 'Docker'],
    stars: 1200,
    forks: 250,
    imageUrl: '/img/1.jpg',
    githubUrl: 'https://github.com/mahelbee/ai-code-assistant',
    liveUrl: 'https://ai-code-assistant.example.com',
  },
  {
    title: 'Decentralized Social Network',
    description: 'A social media platform built on blockchain technology, ensuring user privacy and data ownership. Supports encrypted messaging and decentralized identity.',
    status: 'Maintenance',
    technologies: ['React', 'Solidity', 'ethers.js', 'IPFS', 'The Graph'],
    stars: 850,
    forks: 150,
    imageUrl: '/img/2.png',
    githubUrl: 'https://github.com/mahelbee/decentralized-social',
    liveUrl: 'https://decentralized-social.example.com',
  },
  {
    title: 'Real-time Analytics Dashboard',
    description: 'A dashboard for visualizing real-time data streams. Features customizable widgets, alerts, and historical data analysis.',
    status: 'Complete',
    technologies: ['Vue.js', 'Node.js', 'WebSocket', 'Redis', 'Chart.js'],
    stars: 640,
    forks: 95,
    imageUrl: '/img/3.png',
    githubUrl: 'https://github.com/mahelbee/analytics-dashboard',
    liveUrl: 'https://analytics-dashboard.example.com',
  },
  {
    title: 'Mobile Fitness Tracker',
    description: 'A cross-platform mobile app for tracking workouts, setting fitness goals, and competing with friends. Includes GPS tracking and health data integration.',
    status: 'Active',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Google Fit API'],
    stars: 980,
    forks: 210,
    imageUrl: '/img/4.png',
    githubUrl: 'https://github.com/mahelbee/fitness-tracker',
    liveUrl: 'https://fitness-tracker.example.com',
  },
  {
    title: 'Open Source 3D Game Engine',
    description: 'A lightweight and modular 3D game engine built from scratch in C++. Features a modern rendering pipeline and a flexible entity-component system.',
    status: 'Active',
    technologies: ['C++', 'OpenGL', 'CMake', 'GLFW'],
    stars: 2500,
    forks: 600,
    imageUrl: '/img/background.png',
    githubUrl: 'https://github.com/mahelbee/3d-engine',
    liveUrl: null,
  },
  {
    title: 'E-Learning Platform',
    description: 'A comprehensive platform for online courses, with video streaming, quizzes, and student progress tracking. Integrated with payment gateways.',
    status: 'Complete',
    technologies: ['Django', 'Python', 'React', 'PostgreSQL', 'Stripe'],
    stars: 720,
    forks: 180,
    imageUrl: '/img/me.png',
    githubUrl: 'https://github.com/mahelbee/elearning-platform',
    liveUrl: 'https://elearning-platform.example.com',
  },
];

const certificates = [
    {
      title: 'AWS Certified Solutions Architect',
      issuer: 'Amazon Web Services',
      date: new Date('2024-02-15'),
      validUntil: '2027-02-15',
      credentialId: 'AWS-SAA-2024-001234',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Demonstrates expertise in designing distributed systems on AWS platform',
      skills: ['Cloud Architecture', 'AWS Services', 'Security', 'Cost Optimization'],
      verifyUrl: '#',
      downloadUrl: '#',
    },
    {
      title: 'Professional Scrum Master I (PSM I)',
      issuer: 'Scrum.org',
      date: new Date('2023-11-20'),
      validUntil: 'Lifetime',
      credentialId: 'PSM-2023-567890',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Validates knowledge of Scrum framework and ability to support teams',
      skills: ['Scrum Framework', 'Agile Methodologies', 'Team Leadership', 'Product Management'],
      verifyUrl: '#',
      downloadUrl: '#',
    },
    {
      title: 'Google Cloud Professional Developer',
      issuer: 'Google Cloud',
      date: new Date('2023-09-10'),
      validUntil: '2025-09-10',
      credentialId: 'GCP-DEV-2023-112233',
      image: 'https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Expertise in developing scalable applications on Google Cloud Platform',
      skills: ['GCP Services', 'Container Orchestration', 'DevOps', 'Microservices'],
      verifyUrl: '#',
      downloadUrl: '#',
    },
    {
      title: 'Meta Frontend Developer Professional',
      issuer: 'Meta (Coursera)',
      date: new Date('2023-06-30'),
      validUntil: 'Lifetime',
      credentialId: 'META-FE-2023-445566',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Comprehensive frontend development skills including React and modern practices',
      skills: ['React', 'JavaScript', 'HTML/CSS', 'UI/UX Design'],
      verifyUrl: '#',
      downloadUrl: '#',
    },
    {
      title: 'MongoDB Developer Certification',
      issuer: 'MongoDB University',
      date: new Date('2023-04-15'),
      validUntil: '2025-04-15',
      credentialId: 'MONGO-DEV-2023-778899',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Proficiency in MongoDB database design, development, and administration',
      skills: ['MongoDB', 'Database Design', 'Query Optimization', 'Data Modeling'],
      verifyUrl: '#',
      downloadUrl: '#',
    },
    {
      title: 'Docker Certified Associate',
      issuer: 'Docker Inc.',
      date: new Date('2023-02-28'),
      validUntil: '2025-02-28',
      credentialId: 'DOCKER-CA-2023-334455',
      image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Validates skills in containerization and Docker ecosystem management',
      skills: ['Docker', 'Containerization', 'DevOps', 'CI/CD'],
      verifyUrl: '#',
      downloadUrl: '#',
    }
];

async function main() {
  console.log(`Start seeding ...`);

  // Clear existing data to avoid duplicates on re-seed
  await prisma.user.deleteMany({});
  console.log('Deleted existing user data.');
  await prisma.certificate.deleteMany({});
  console.log('Deleted existing certificate data.');
  await prisma.project.deleteMany({});
  console.log('Deleted existing project data.');
  await prisma.portfolioItem.deleteMany({});
  console.log('Deleted existing portfolio data.');

  // Seed Admin User
  console.log('Seeding admin user...');
  const hashedPassword = await bcrypt.hash('password123', 12);
  await prisma.user.upsert({
    where: { email: 'admin@example.com' },
    update: {},
    create: {
      email: 'admin@example.com',
      name: 'Admin User',
      password: hashedPassword,
    },
  });
  console.log('Admin user created.');


  for (const item of portfolioItems) {
    const portfolioItem = await prisma.portfolioItem.create({
      data: {
        id: item.id,
        title: item.title,
        author: item.author,
        date: new Date(item.date),
        icon: item.icon,
        images: { set: item.images },
        desc: { set: item.desc },
      },
    });
    console.log(`Created portfolio item with id: ${portfolioItem.id}`);
  }

  for (const projectData of projects) {
    const project = await prisma.project.create({
      data: projectData,
    });
    console.log(`Created project with id: ${project.id} - ${project.title}`);
  }

  for (const certData of certificates) {
    const certificate = await prisma.certificate.create({
        data: certData
    });
    console.log(`Created certificate with id: ${certificate.id} - ${certificate.title}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });