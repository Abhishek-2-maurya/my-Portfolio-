import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Code2, GraduationCap, Award, Target, Zap } from 'lucide-react';

const achievements = [
  {
    icon: Code2,
    title: 'DSA Problem Solver',
    description: 'Solved 100+ Data Structures and Algorithms problems across various platforms',
    metric: '100+',
    label: 'Problems Solved',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    icon: GraduationCap,
    title: 'Academic Excellence',
    description: 'Final year BCA student at EXIS Institute with consistent academic performance',
    metric: 'BCA',
    label: 'Final Year',
    color: 'from-purple-500 to-pink-600',
  },
  {
    icon: Award,
    title: 'MERN Stack Projects',
    description: 'Successfully built and deployed multiple full-stack web applications',
    metric: '3+',
    label: 'Projects Deployed',
    color: 'from-green-500 to-teal-600',
  },
  {
    icon: Target,
    title: 'C++ Proficiency',
    description: 'Strong command over C++ programming with focus on competitive coding',
    metric: 'Expert',
    label: 'Skill Level',
    color: 'from-orange-500 to-red-600',
  },
];

const highlights = [
  'Strong problem-solving abilities with DSA',
  'Full-stack development using MERN stack',
  'Clean and maintainable code practices',
  'Quick learner and adaptable to new technologies',
];

export const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="achievements"
      className="py-24 lg:py-32 relative"
      data-testid="achievements-section"
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
            Achievements
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2">
            Milestones & Recognition
          </h2>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="group glass rounded-2xl p-6 card-hover text-center"
              data-testid={`achievement-card-${index}`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${achievement.color} p-4 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <achievement.icon className="w-8 h-8 text-white" />
              </div>

              {/* Metric */}
              <div className="mb-4">
                <span className="text-3xl font-heading font-bold gradient-text">
                  {achievement.metric}
                </span>
                <p className="text-gray-500 text-sm mt-1">{achievement.label}</p>
              </div>

              {/* Content */}
              <h3 className="text-lg font-heading font-semibold text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Key Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="glass rounded-2xl p-8 lg:p-12"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan to-neon-purple p-3 flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-heading font-semibold text-white">
                Key Highlights
              </h3>
              <p className="text-gray-500 text-sm">What sets me apart</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <div className="w-2 h-2 rounded-full bg-neon-cyan flex-shrink-0" />
                <span className="text-gray-300 text-sm">{highlight}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Trophy Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-neon-cyan/10 to-neon-purple/10 border border-white/10 text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-8 h-8 text-yellow-500" />
            <h3 className="text-xl font-heading font-semibold text-white">
              Ready for New Challenges
            </h3>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I'm constantly learning and pushing my boundaries. Currently preparing for placements 
            at top tech companies while building real-world projects.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
