import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub, FiFilter } from 'react-icons/fi'
import { image } from 'framer-motion/client'
import p11 from '../assets/p11.png'

import p22 from '../assets/p22.png'

import p33 from '../assets/p33.png'


const Projects = () => {
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      title: "Personal Portfolio",
      description: "A responsive personal portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
      image: p11,
      technologies: ["React", "Tailwind CSS", "Vite"],
      github: "https://github.com/yourusername/portfolio",
      demo: "https://your-portfolio.com"
    },
    {
      title: "Task Tracker App",
      description: "A simple task tracking application that allows users to add, delete, and mark tasks as complete.",
      image: p22,
      technologies: ["React", "CSS", "Local Storage"],
      github: "https://github.com/yourusername/task-tracker",
      demo: "https://your-task-tracker.com"
    },
    {
      title: "Weather Dashboard",
      description: "A weather application that fetches data from a weather API and displays current conditions and forecasts.",
      image:p33,
      technologies: ["React", "API Integration", "CSS"],
      github: "https://github.com/yourusername/weather-app",
      demo: "https://your-weather-app.com"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Applications' },
    { id: 'app', name: 'Mobile Apps' },
    { id: 'ui', name: 'UI/UX Design' },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="section bg-white">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === category.id
                  ? 'bg-primary text-white'
                  : 'bg-light text-dark hover:bg-primary/10'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="bg-blue-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-xs px-2 py-1 bg-blue-100 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    GitHub
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 