import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import myImage from './assets/profile4.jpg';

const Hero = () => {
  return (
    <section id="home" className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-dark mb-4">
              Hi, I'm <span className="text-primary">Nishit</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-secondary mb-6">
              Frontend React Developer
            </h2>
            <p className="text-gray-600 mb-8 max-w-lg">
              A passionate frontend developer specializing in building modern, 
              responsive web applications with React. I enjoy creating intuitive 
              and dynamic user experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="btn-primary">
                Contact Me
              </a>
              <a href="#projects" className="btn-outline">
                View Projects
              </a>
            </div>
            <div className="flex mt-8 space-x-4">
              <a 
                href="https://github.com/yourusername" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/nishit-ardeshana" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <div className="flex justify-center order-first md:order-last ">
            <div className="relative w-60 h-60 md:w-72 md:h-72 overflow-hidden rounded-full border-4 border-blue-300">
              <img
                src={myImage}
                alt="Profile Photo"
                className="w-100 h-100 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero 
