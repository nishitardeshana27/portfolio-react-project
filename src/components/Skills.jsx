import { motion } from 'framer-motion'
import { 
  FiCode, 
  FiDatabase, 
  FiLayers, 
  FiPackage,
  FiGitBranch, 
  FiMonitor
} from 'react-icons/fi'

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"]
    },
    {
      category: "Tools & Others",
      items: ["Git", "GitHub", "VS Code", "Responsive Design", "Figma"]
    },
    {
      category: "Soft Skills",
      items: ["Problem Solving", "Communication", "Teamwork", "Time Management", "Adaptability"]
    }
  ];

  return (
    <section id="skills" className="section bg-blue-50">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold mb-4 text-primary">{skillGroup.category}</h3>
              
              <ul className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills 