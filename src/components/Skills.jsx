import { FiCode, FiTool, FiUserCheck } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    {
      icon: <FiCode className="text-3xl text-blue-600" />,
      category: "Frontend",
      badge: "Intermediate",
      items: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "React.js", level: 90 },
        { name: "Tailwind CSS", level: 80 }
      ]
    },
    {
      icon: <FiTool className="text-3xl text-purple-600" />,
      category: "Tools & Others",
      badge: "Learning",
      items: [
        { name: "Git", level: 70 },
        { name: "GitHub", level: 80 },
        { name: "VS Code", level: 90 },
        { name: "Responsive Design", level: 75 },
        { name: "Figma", level: 70 }
      ]
    },
    {
      icon: <FiUserCheck className="text-3xl text-green-600" />,
      category: "Soft Skills",
      badge: "Strong",
      items: [
        { name: "Problem Solving", level: 85 },
        { name: "Communication", level: 90 },
        { name: "Teamwork", level: 88 },
        { name: "Time Management", level: 80 },
        { name: "Adaptability", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-br from-slate-100 to-blue-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-extrabold text-blue-700 mb-16">My Real Skills</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {skills.map((group, index) => (
            <motion.div
              key={index}
              className="rounded-2xl backdrop-blur-lg border border-slate-200 bg-white/70 shadow-xl p-8 hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6, type: 'spring' }}
            >
              <div className="flex items-center justify-center gap-3 mb-4">
                {group.icon}
                <h3 className="text-2xl font-bold text-gray-800">{group.category}</h3>
              </div>
              <p className="mb-6 text-sm inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">{group.badge}</p>

              <div className="space-y-5">
                {group.items.map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-sm font-medium text-gray-700 mb-1">
                      <span>{item.name}</span>
                      <span>{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full">
                      <motion.div
                        className="h-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-700"
                        style={{ width: `${item.level}%` }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
