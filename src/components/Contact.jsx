import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Mail, Github, Linkedin, Send, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner';
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'abhishek.maurya5101@gmail.com',
    href: 'mailto:abhishek.maurya5101@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/Abhishek-2-maurya',
    href: 'https://github.com/Abhishek-2-maurya',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/abhishek-maurya',
    href: 'https://www.linkedin.com/in/abhishek-maurya-472603336/',
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      );


      toast.success("Message sent successfully!", {
        description: "I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });

    } catch (error) {
      toast.error("Failed to send message.");
    }

    setIsSubmitting(false);
  };


  return (
    <section
      id="contact"
      className="py-24 lg:py-32 relative"
      data-testid="contact-section"
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
          className="mb-16 text-center"
        >
          <span className="text-neon-cyan text-sm font-medium tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-2">
            Let's Work Together
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll do my best to get back to you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="glass rounded-2xl p-8">
              <h3 className="text-xl font-heading font-semibold text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-neon-cyan/50 hover:bg-white/10 transition-all group"
                    data-testid={`contact-${info.label.toLowerCase()}`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <info.icon className="w-5 h-5 text-neon-cyan" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-500 text-sm">{info.label}</p>
                      <p className="text-white text-sm truncate">{info.value}</p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-500 group-hover:text-neon-cyan transition-colors" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="glass rounded-2xl p-8"
            >
              <h4 className="text-lg font-heading font-semibold text-white mb-4">
                Quick Connect
              </h4>
              <p className="text-gray-400 text-sm mb-6">
                Feel free to reach out through any platform. I'm most responsive on email and LinkedIn.
              </p>
              <div className="flex gap-3">
                <a
                  href="mailto:abhishek.maurya5101@gmail.com"
                  className="flex-1 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center text-sm font-medium hover:opacity-90 transition-opacity"
                  data-testid="quick-email-btn"
                >
                  Send Email
                </a>
                <a
                  href="https://www.linkedin.com/in/abhishek-maurya-472603336/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 rounded-full border border-white/10 bg-white/5 text-white text-center text-sm font-medium hover:bg-white/10 transition-colors"
                  data-testid="quick-linkedin-btn"
                >
                  LinkedIn
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8" data-testid="contact-form">
              <h3 className="text-xl font-heading font-semibold text-white mb-6">
                Send a Message
              </h3>

              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-neon-cyan focus:ring-neon-cyan/20"
                    data-testid="contact-name-input"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-neon-cyan focus:ring-neon-cyan/20"
                    data-testid="contact-email-input"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label htmlFor="subject" className="block text-sm text-gray-400 mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  placeholder="Job Opportunity / Collaboration / General Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-neon-cyan focus:ring-neon-cyan/20"
                  data-testid="contact-subject-input"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-neon-cyan focus:ring-neon-cyan/20 resize-none"
                  data-testid="contact-message-input"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(6,182,212,0.3)] py-6"
                data-testid="contact-submit-btn"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
