import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Github, Home, BookOpen, CheckSquare } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'NestStay',
    subtitle: 'Property Rental Platform',
    description: 'A full-featured accommodation booking platform similar to Airbnb. Users can browse listings, view property details, and manage bookings seamlessly.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js', 'CSS'],
    icon: Home,
    github: 'https://github.com/Abhishek-2-maurya/nestStay',
    live: 'https://neststay-tiq0.onrender.com/listings',
    featured: true,
    color: 'from-cyan-500 to-blue-600',
  },
  {
    title: 'ExamPrep',
    subtitle: 'Online Exam Management System',
    description: 'A comprehensive exam management system that helps students prepare for exams with practice tests, timed assessments, and performance tracking.',
    techStack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    icon: BookOpen,
    github: 'https://github.com/Abhishek-2-maurya/Examprep',
    live: null,
    featured: true,
    color: 'from-purple-500 to-pink-600',
  },
  {
    title: 'To-Do App',
    subtitle: 'Task Management Application',
    description: 'A clean and intuitive task management app to organize daily activities, set priorities, and track productivity with a modern interface.',
    techStack: ['React', 'JavaScript', 'CSS', 'LocalStorage'],
    icon: CheckSquare,
    github: 'https://github.com/Abhishek-2-maurya/To-Do-App',
    live: 'https://to-do-app-delta-one-63.vercel.app/',
    featured: false,
    color: 'from-green-500 to-teal-600',
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      className="py-24 lg:py-32 relative"
      data-testid="projects-section"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyber-black via-cyber-gray/20 to-cyber-black" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <span className="text-neon-cyan text-sm font-medium tracking-widest uppercase">
            My Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2">
            Featured Projects
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Here are some of my recent projects that showcase my skills in full-stack development using the MERN stack.
          </p>
        </motion.div>

        {/* Projects Grid - Bento Style */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`group relative rounded-2xl overflow-hidden ${
                project.featured && index === 0 ? 'md:col-span-2 lg:col-span-2 lg:row-span-2' : ''
              }`}
              data-testid={`project-card-${index}`}
            >
              <div className="glass border border-white/10 rounded-2xl h-full p-8 flex flex-col hover:border-white/20 transition-all duration-300">
                {/* Icon and Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${project.color} p-3.5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <project.icon className="w-7 h-7 text-white" />
                  </div>
                  {project.featured && (
                    <span className="px-3 py-1 text-xs font-medium text-neon-cyan bg-neon-cyan/10 rounded-full border border-neon-cyan/20">
                      Featured
                    </span>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl lg:text-2xl font-heading font-semibold text-white mb-2 group-hover:text-neon-cyan transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{project.subtitle}</p>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-medium text-gray-300 bg-white/5 rounded-full border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3 mt-auto">
                  <Button
                    asChild
                    variant="outline"
                    className="flex-1 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 hover:border-neon-cyan/50 transition-colors"
                    data-testid={`project-github-${index}`}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  {project.live && (
                    <Button
                      asChild
                      className="flex-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:opacity-90"
                      data-testid={`project-live-${index}`}
                    >
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            asChild
            variant="outline"
            className="rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 px-8"
            data-testid="view-all-projects-btn"
          >
            <a
              href="https://github.com/Abhishek-2-maurya"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
