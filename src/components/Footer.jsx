import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

const socialLinks = [
  {
    icon: Github,
    label: 'GitHub',
    href: 'https://github.com/Abhishek-2-maurya',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abhishek-maurya-472603336/',
  },
  {
    icon: Mail,
    label: 'Email',
    href: 'mailto:abhishek.maurya5101@gmail.com',
  },
];

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative pt-16 pb-8" data-testid="footer-section">
      {/* Background */}
      <div className="absolute inset-0 bg-cyber-gray/50 border-t border-white/5" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div>
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-2xl font-heading font-bold gradient-text">
                Abhishek Maurya
              </span>
            </motion.a>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              MERN Stack Developer | BCA Final Year Student
              <br />
              Building scalable web applications with modern technologies.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:border-neon-cyan/50 transition-all group"
                  data-testid={`footer-${link.label.toLowerCase()}-link`}
                >
                  <link.icon className="w-4 h-4 text-gray-400 group-hover:text-neon-cyan transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-neon-cyan transition-colors text-sm"
                    data-testid={`footer-nav-${link.name.toLowerCase()}`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-semibold mb-4">Get In Touch</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:abhishek.maurya5101@gmail.com"
                  className="text-gray-400 hover:text-neon-cyan transition-colors text-sm flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  abhishek.maurya5101@gmail.com
                </a>
              </li>
              <li className="text-gray-400 text-sm">
                <span className="text-gray-500">Status:</span>{' '}
                <span className="text-neon-cyan">Open to Work</span>
              </li>
            </ul>

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="mt-6 flex items-center gap-2 text-gray-400 hover:text-neon-cyan transition-colors text-sm group"
              data-testid="back-to-top-btn"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Abhishek Maurya. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-red-500" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
