import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Layout, 
  GitBranch, 
  Terminal,
  FileCode,
  Cpu
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Layout,
    skills: [
      { name: 'React.js', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 90 },
      { name: 'Tailwind CSS', level: 85 },
    ],
    color: 'from-cyan-400 to-cyan-600',
  },
  {
    title: 'Backend',
    icon: Server,
    skills: [
      { name: 'Node.js', level: 80 },
      { name: 'Express.js', level: 85 },
      { name: 'REST APIs', level: 85 },
    ],
    color: 'from-purple-400 to-purple-600',
  },
  {
    title: 'Database',
    icon: Database,
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'Mongoose', level: 75 },
    ],
    color: 'from-green-400 to-green-600',
  },
  {
    title: 'Programming',
    icon: Code,
    skills: [
      { name: 'C++', level: 85 },
      { name: 'DSA', level: 80 },
      { name: 'OOP Concepts', level: 85 },
    ],
    color: 'from-orange-400 to-orange-600',
  },
];

const toolsAndTech = [
  { name: 'Git', icon: GitBranch },
  { name: 'VS Code', icon: FileCode },
  { name: 'Terminal', icon: Terminal },
  { name: 'GitHub', icon: Cpu },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="skills"
      className="py-24 lg:py-32 relative"
      data-testid="skills-section"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 grid-bg" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-neon-cyan text-sm font-medium tracking-widest uppercase">
            My Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2">
            Technical Expertise
          </h2>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
              className="glass rounded-2xl p-8 card-hover"
              data-testid={`skill-category-${category.title.toLowerCase()}`}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${category.color} p-3 flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-white">
                  {category.title}
                </h3>
              </div>

              {/* Skills List */}
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm font-medium">
                        {skill.name}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar">
                      <motion.div
                        className="skill-bar-fill"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          duration: 1, 
                          delay: 0.3 + (categoryIndex * 0.1) + (skillIndex * 0.1),
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-xl font-heading font-semibold text-white mb-6 text-center">
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {toolsAndTech.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3 px-5 py-3 rounded-full glass border border-white/10 hover:border-neon-cyan/50 transition-colors"
                data-testid={`tool-${tool.name.toLowerCase()}`}
              >
                <tool.icon className="w-5 h-5 text-neon-cyan" />
                <span className="text-gray-300 text-sm font-medium">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skill Tags Cloud */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-16 pt-16 border-t border-white/10"
        >
          <div className="flex flex-wrap justify-center gap-3">
            {['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'HTML5', 'CSS3', 'C++', 'DSA', 'Git', 'REST APIs', 'Tailwind'].map((tag, index) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm text-gray-400 bg-white/5 rounded-full border border-white/10 hover:text-neon-cyan hover:border-neon-cyan/30 transition-colors cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
