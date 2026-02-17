import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, Target, Code2, Briefcase } from 'lucide-react';

const aboutCards = [
  {
    icon: GraduationCap,
    title: 'Education',
    description: 'BCA Final Year Student at EXIS Institute of Higher Education. Focused on building a strong academic foundation in computer science.',
  },
  {
    icon: Target,
    title: 'Career Objective',
    description: 'Seeking opportunities to apply my skills in MERN stack development and contribute to innovative projects at leading tech companies.',
  },
  {
    icon: Code2,
    title: 'Problem Solving',
    description: 'Strong foundation in Data Structures & Algorithms with C++. Passionate about solving complex coding challenges efficiently.',
  },
  {
    icon: Briefcase,
    title: 'Looking For',
    description: 'Full-time opportunities as a Software Developer or MERN Stack Developer at companies like Deloitte, TCS, and other tech firms.',
  },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="py-24 lg:py-32 relative"
      data-testid="about-section"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-cyber-gray/30 to-cyber-black" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-neon-cyan text-sm font-medium tracking-widest uppercase">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl p-8 h-full">
              <h3 className="text-xl font-heading font-semibold text-white mb-4">
                Professional Bio
              </h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                I'm Abhishek Maurya, a dedicated BCA final year student with a passion 
                for building web applications that make a difference. My journey in 
                technology started with curiosity and has grown into expertise in the 
                MERN stack ecosystem.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                With a strong foundation in C++ and Data Structures & Algorithms, I 
                approach every problem with an analytical mindset. I believe in writing 
                clean, efficient code that not only works but is also maintainable.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Currently, I'm focused on expanding my full-stack development skills 
                while actively seeking opportunities to contribute to real-world projects 
                at top tech companies.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/10">
                <div>
                  <span className="text-2xl font-heading font-bold gradient-text">3+</span>
                  <p className="text-gray-500 text-sm mt-1">Projects Completed</p>
                </div>
                <div>
                  <span className="text-2xl font-heading font-bold gradient-text">100+</span>
                  <p className="text-gray-500 text-sm mt-1">DSA Problems Solved</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cards Grid */}
          <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
            {aboutCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="glass rounded-2xl p-6 card-hover group"
                data-testid={`about-card-${index}`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <card.icon className="w-6 h-6 text-neon-cyan" />
                </div>
                <h4 className="text-lg font-heading font-semibold text-white mb-2">
                  {card.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
