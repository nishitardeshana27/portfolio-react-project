import { motion } from 'framer-motion'
import { FiCalendar, FiCode, FiCoffee } from 'react-icons/fi'

const About = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="max-w-3xl mx-auto">
          <p className="mb-4 text-gray-700">
            Hello! I'm Nishit, a frontend developer with a passion for creating 
            engaging user experiences on the web. I recently completed my degree 
            in Bachelor of Science in Information Technology and I'm eager to apply my skills in a professional 
            environment.
          </p>
          
          <p className="mb-4 text-gray-700">
            During my studies, I developed a strong interest in web development, 
            particularly in React. I've worked on several personal and academic 
            projects that have helped me build a solid foundation in frontend 
            technologies.
          </p>
          
          <p className="mb-6 text-gray-700">
            As a fresher in the industry, I bring enthusiasm, a strong willingness 
            to learn, and a fresh perspective to problem-solving. I'm looking forward 
            to growing my skills and contributing to meaningful projects.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <div className="text-3xl font-bold text-primary mb-1">1+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <div className="text-3xl font-bold text-primary mb-1">5+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="bg-blue-50 rounded-lg p-5 text-center">
              <div className="text-3xl font-bold text-primary mb-1">3+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About 