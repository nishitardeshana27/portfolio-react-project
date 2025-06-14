import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiHeart, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B1120] text-white py-12 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Branding */}
          <div className="md:col-span-2">
            <motion.a
              href="#home"
              className="text-3xl font-bold text-white mb-4 inline-block"
              whileHover={{ scale: 1.05 }}
            >
              NWeb
            </motion.a>
            <p className="text-white/70 mb-6 max-w-md leading-relaxed">
              Hi, I’m Nishit — a passionate React Frontend Developer crafting modern, responsive, and accessible web apps. 
              Let’s collaborate to build seamless digital experiences.
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-blue-600 transition-colors"
                whileHover={{ y: -3 }}
              >
                <FiGithub className="text-xl" />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/nishit-ardeshana"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-blue-600 transition-colors"
                whileHover={{ y: -3 }}
              >
                <FiLinkedin className="text-xl" />
              </motion.a>
              <motion.a
                href="https://x.com/Nishitardeshana"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 p-2 rounded-full hover:bg-blue-600 transition-colors"
                whileHover={{ y: -3 }}
              >
                <FiTwitter className="text-xl" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-white/70">
              <li><a href="#home" className="hover:text-blue-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-blue-400 transition">About</a></li>
              <li><a href="#skills" className="hover:text-blue-400 transition">Skills</a></li>
              <li><a href="#projects" className="hover:text-blue-400 transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-4 text-white/70 text-sm">
              <li className="flex items-center gap-2">
                <FiMail className="text-blue-400" />
                <a href="mailto:nishitardeshana27@gmail.com" className="hover:text-blue-400 transition">
                  nishitardeshana27@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="text-blue-400" />
                <a href="tel:+919725237537" className="hover:text-blue-400 transition">
                  +91 97252 37537
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMapPin className="text-blue-400" />
                Vadodara, Gujarat, India
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center text-white/50 text-sm">
          <p>© {currentYear} Nishit Ardeshana. All rights reserved.</p>
          <p className="flex items-center mt-2 sm:mt-0">
            Made with <FiHeart className="text-blue-400 mx-1" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
