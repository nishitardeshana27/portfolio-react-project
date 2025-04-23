import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-dark text-white py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <motion.a
              href="#home"
              className="text-2xl font-bold text-white mb-4 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              NWeb
            </motion.a>
            <p className="text-white/70 mb-6 max-w-md">
              Building exceptional digital experiences with clean, efficient, and accessible code.
              Let's collaborate to bring your vision to life.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full text-white hover:bg-primary hover:text-white transition-colors"
                whileHover={{ y: -3 }}
              >
                <FiGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/nishit-ardeshana"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full text-white hover:bg-primary hover:text-white transition-colors"
                whileHover={{ y: -3 }}
              >
                <FiLinkedin />
              </motion.a>
              <motion.a
                href="https://x.com/Nishitardeshana"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full text-white hover:bg-primary hover:text-white transition-colors"
                whileHover={{ y: -3 }}
              >
                <FiTwitter />
              </motion.a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-white/70 hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white/70 hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white/70 hover:text-primary transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white/70 hover:text-primary transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/70 hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-white/70">
                <a href="mailto:nishitardeshana27@gmail.com" className="hover:text-primary transition-colors">
                  nishitardeshana27@gmail.com
                </a>
              </li>
              <li className="text-white/70">
                <a href="tel:+919725237537" className="hover:text-primary transition-colors">
                  +91 9725237537
                </a>
              </li>
              <li className="text-white/70">
                Vadodara, Gujarat, India
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-white/50 text-sm">
            © {currentYear} Nishit Ardeshana. All rights reserved.
          </p>
          <p className="text-white/50 text-sm flex items-center mt-2 sm:mt-0">
            Made with <FiHeart className="text-primary mx-1" /> using React
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 