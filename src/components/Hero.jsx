import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center hero-bg grid-bg"
      data-testid="hero-section"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/10 rounded-full filter blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full filter blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neon-cyan text-sm font-medium mb-6">
                Open to Work
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 tracking-tight"
              data-testid="hero-title"
            >
              Hi, I'm{' '}
              <span className="gradient-text">Abhishek Maurya</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl text-gray-400 mb-6 font-medium"
              data-testid="hero-subtitle"
            >
              MERN Stack Developer | DSA Enthusiast
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 leading-relaxed mb-8 max-w-lg"
              data-testid="hero-description"
            >
              A passionate BCA Final Year student with a strong foundation in full-stack web development 
              and Data Structures & Algorithms. I build scalable, user-centric web applications 
              that solve real-world problems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-10"
            >
              <Button
                onClick={scrollToContact}
                className="rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(6,182,212,0.4)] px-6 py-6"
                data-testid="contact-me-btn"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors backdrop-blur-sm px-6 py-6"
                data-testid="hero-download-resume-btn"
              >
                <a
                  href="https://customer-assets.emergentagent.com/job_mern-dev-showcase-6/artifacts/h6vq172d_Abhishek_Maurya_resume.pdf"
                  download="Abhishek_Maurya_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <span className="text-gray-500 text-sm">Find me on</span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Abhishek-2-maurya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-neon-cyan/50 transition-colors"
                  data-testid="hero-github-link"
                >
                  <Github className="w-5 h-5 text-gray-400 hover:text-neon-cyan" />
                </a>
                <a
                  href="https://www.linkedin.com/in/abhishek-maurya-472603336/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-neon-cyan/50 transition-colors"
                  data-testid="hero-linkedin-link"
                >
                  <Linkedin className="w-5 h-5 text-gray-400 hover:text-neon-cyan" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 blur-2xl" />
              
              {/* Profile image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-2 border-white/10 shadow-2xl">
                <img
                  src="https://customer-assets.emergentagent.com/job_mern-dev-showcase-6/artifacts/ncuy3k4f_abhi.jpg"
                  alt="Abhishek Maurya"
                  className="w-full h-full object-cover"
                  data-testid="profile-image"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/40 to-transparent" />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 px-4 py-2 rounded-full glass border border-white/10"
              >
                <span className="text-sm font-medium text-white">MERN Stack</span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 rounded-full glass border border-white/10"
              >
                <span className="text-sm font-medium text-white">DSA Expert</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden lg:block"
        >
          <button
            onClick={scrollToAbout}
            className="flex flex-col items-center gap-2 text-gray-500 hover:text-neon-cyan transition-colors cursor-pointer"
            data-testid="scroll-down-btn"
          >
            <span className="text-sm">Scroll Down</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
