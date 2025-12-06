import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { useTheme } from '../contexts/ThemeContext';
import emailjs from '@emailjs/browser';

const Contact: React.FC = () => {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setStatusMessage('Please fill in all fields');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSubmitStatus('error');
      setStatusMessage('Please enter a valid email address');
      setTimeout(() => setSubmitStatus('idle'), 3000);
      return;
    }

    setIsLoading(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration
      // Use environment variables if available, otherwise use placeholder values
      // Set these in .env file: VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

      // Check if EmailJS is configured
      if (serviceId === 'YOUR_SERVICE_ID' || templateId === 'YOUR_TEMPLATE_ID' || publicKey === 'YOUR_PUBLIC_KEY') {
        // Fallback to mailto if EmailJS is not configured
        const subject = encodeURIComponent(`Contact Form Message from ${formData.name}`);
        const body = encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        const mailtoLink = `mailto:kk3777096@gmail.com?subject=${subject}&body=${body}`;
        
        // Open default email client
        window.location.href = mailtoLink;
        
        setSubmitStatus('success');
        setStatusMessage('Opening your email client... Please send the message manually.');
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => {
          setSubmitStatus('idle');
          setStatusMessage('');
        }, 5000);
        setIsLoading(false);
        return;
      }

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'kk3777096@gmail.com',
          reply_to: formData.email,
        },
        publicKey
      );

      setSubmitStatus('success');
      setStatusMessage('Message sent successfully! I\'ll get back to you soon.');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setSubmitStatus('error');
      setStatusMessage('Failed to send message. Please try again or email me directly.');
      
      setTimeout(() => {
        setSubmitStatus('idle');
        setStatusMessage('');
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <footer id="contact" className={`pt-12 sm:pt-16 md:pt-20 pb-8 md:pb-10 border-t ${
      theme === 'dark' 
        ? 'bg-navy-900 border-white/5' 
        : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12 md:mb-16">
            
            {/* Contact Info */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <h2 className={`text-2xl sm:text-3xl font-display font-bold mb-4 md:mb-6 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>Let's Connect</h2>
                <p className={`mb-6 md:mb-8 max-w-md text-sm sm:text-base ${
                  theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                }`}>
                    I'm currently looking for new opportunities in Data Science and Analysis. 
                    Whether you have a question or just want to say hi, I'll try my best to get back to you!
                </p>

                <div className="space-y-3 md:space-y-4">
                    <div className={`flex items-center gap-3 md:gap-4 ${
                      theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
                    }`}>
                        <div className={`p-2 sm:p-3 rounded-full text-neon-teal ${
                          theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'
                        }`}><Mail size={18} className="sm:w-5 sm:h-5"/></div>
                        <span className="text-sm sm:text-base break-all">{PERSONAL_INFO.email}</span>
                    </div>
                    <div className={`flex items-center gap-3 md:gap-4 ${
                      theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
                    }`}>
                        <div className={`p-2 sm:p-3 rounded-full text-neon-purple ${
                          theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'
                        }`}><Phone size={18} className="sm:w-5 sm:h-5"/></div>
                        <span className="text-sm sm:text-base">{PERSONAL_INFO.phone}</span>
                    </div>
                     <div className={`flex items-center gap-3 md:gap-4 ${
                       theme === 'dark' ? 'text-slate-300' : 'text-gray-700'
                     }`}>
                        <div className={`p-2 sm:p-3 rounded-full text-neon-cyan ${
                          theme === 'dark' ? 'bg-white/5' : 'bg-gray-100'
                        }`}><MapPin size={18} className="sm:w-5 sm:h-5"/></div>
                        <span className="text-sm sm:text-base">{PERSONAL_INFO.location}</span>
                    </div>
                </div>

                 <div className="mt-8 flex gap-4">
                    <motion.a 
                      href={PERSONAL_INFO.linkedin} 
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.15, rotate: [0, -5, 5, -5, 0], y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className={`premium-link magnetic-hover p-3 rounded-lg border transition-all relative overflow-hidden group ${
                        theme === 'dark' 
                          ? 'bg-navy-800 border-white/10 text-slate-400 hover:text-white' 
                          : 'bg-white border-gray-200 text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Linkedin size={20} className="relative z-10" />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-cyan to-blue-500 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"></div>
                      <div className="absolute inset-0 rounded-lg border-2 border-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow"></div>
                    </motion.a>
                    <motion.a 
                      href="#" 
                      whileHover={{ scale: 1.15, rotate: [0, 5, -5, 5, 0], y: -3 }}
                      whileTap={{ scale: 0.9 }}
                      className={`premium-link magnetic-hover p-3 rounded-lg border transition-all relative overflow-hidden group ${
                        theme === 'dark' 
                          ? 'bg-navy-800 border-white/10 text-slate-400 hover:text-white' 
                          : 'bg-white border-gray-200 text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      <Github size={20} className="relative z-10" />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-purple to-pink-500 opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"></div>
                      <div className="absolute inset-0 rounded-lg border-2 border-neon-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow"></div>
                    </motion.a>
                </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className={`p-4 sm:p-6 md:p-8 rounded-2xl border shadow-2xl ${
                  theme === 'dark' 
                    ? 'bg-navy-800 border-white/5' 
                    : 'bg-white border-gray-200'
                }`}
            >
                <form className="space-y-3 md:space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className={`block text-xs sm:text-sm font-medium mb-1 ${
                          theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                        }`}>Name</label>
                        <input 
                          type="text" 
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className={`w-full border rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:border-neon-teal transition-colors ${
                            theme === 'dark' 
                              ? 'bg-navy-900 border-white/10 text-white' 
                              : 'bg-gray-50 border-gray-200 text-gray-900'
                          }`} 
                          placeholder="John Doe" 
                        />
                    </div>
                    <div>
                        <label className={`block text-xs sm:text-sm font-medium mb-1 ${
                          theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                        }`}>Email</label>
                        <input 
                          type="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className={`w-full border rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:border-neon-teal transition-colors ${
                            theme === 'dark' 
                              ? 'bg-navy-900 border-white/10 text-white' 
                              : 'bg-gray-50 border-gray-200 text-gray-900'
                          }`} 
                          placeholder="john@example.com" 
                        />
                    </div>
                    <div>
                        <label className={`block text-xs sm:text-sm font-medium mb-1 ${
                          theme === 'dark' ? 'text-slate-400' : 'text-gray-600'
                        }`}>Message</label>
                        <textarea 
                          rows={4} 
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          className={`w-full border rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:border-neon-teal transition-colors resize-none ${
                            theme === 'dark' 
                              ? 'bg-navy-900 border-white/10 text-white' 
                              : 'bg-gray-50 border-gray-200 text-gray-900'
                          }`} 
                          placeholder="Your message..." 
                        />
                    </div>

                    {/* Status Message */}
                    {submitStatus !== 'idle' && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className={`p-3 rounded-lg flex items-center gap-2 ${
                          submitStatus === 'success'
                            ? theme === 'dark' 
                              ? 'bg-green-500/20 border border-green-500/50 text-green-400'
                              : 'bg-green-50 border border-green-200 text-green-700'
                            : theme === 'dark'
                              ? 'bg-red-500/20 border border-red-500/50 text-red-400'
                              : 'bg-red-50 border border-red-200 text-red-700'
                        }`}
                      >
                        {submitStatus === 'success' ? (
                          <CheckCircle2 size={18} />
                        ) : (
                          <AlertCircle size={18} />
                        )}
                        <span className="text-sm">{statusMessage}</span>
                      </motion.div>
                    )}

                    <motion.button 
                      type="submit"
                      disabled={isLoading}
                      whileHover={!isLoading ? { 
                        scale: 1.02, 
                        y: -2,
                        rotateX: [0, -10, 0],
                        rotateY: [0, 5, 0],
                        transition: { duration: 0.3 }
                      } : {}}
                      whileTap={!isLoading ? { scale: 0.98 } : {}}
                      style={{
                        transformStyle: 'preserve-3d',
                        backgroundSize: '200% 200%',
                        animation: isLoading ? 'none' : 'gradient 3s ease infinite',
                        opacity: isLoading ? 0.7 : 1,
                        cursor: isLoading ? 'not-allowed' : 'pointer',
                      }}
                      className="premium-link ripple-effect w-full bg-gradient-to-r from-neon-teal via-neon-cyan to-neon-purple text-navy-900 font-bold py-3 rounded-lg transition-all flex justify-center items-center gap-2 relative overflow-hidden group glow-on-hover"
                    >
                      <span className="relative z-10 flex items-center gap-2">
                        {isLoading ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Sending...
                          </>
                        ) : (
                          <>
                            Send Message 
                            <motion.div
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            >
                              <Send size={18} />
                            </motion.div>
                          </>
                        )}
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer-bg"></div>
                    </motion.button>
                </form>
            </motion.div>
        </div>

        <div className={`border-t pt-8 text-center text-sm ${
          theme === 'dark' 
            ? 'border-white/5 text-slate-500' 
            : 'border-gray-200 text-gray-500'
        }`}>
            <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;