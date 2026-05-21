import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, ArrowRight, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const menuItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

const services = ['Webreich Product Development', 'Business Automation', 'Custom Software'];

const socialLinks = [
  { icon: Github, href: 'https://github.com/akshay-bhaltilak', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/akshay-bhaltilak', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/akshay-bhaltilak', label: 'Twitter' },
  { icon: Mail, href: 'mailto:akshaybhaltilak989@gmail.com', label: 'Email' }
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-deep border-t border-white/5 mt-0">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-glow"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sand/60">Build with Webreich</p>
            <h3 className="text-2xl font-semibold mt-2 text-sand">Co-Founder of Webreich and Full Stack Engineer</h3>
            <p className="text-sand/70 mt-2 max-w-xl">
              I help startups and businesses launch reliable products with strong UX, automation, and measurable growth.
            </p>
          </div>
          <a
            href="https://webreich.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-deep px-5 py-3 font-semibold shadow-glow hover:translate-y-[-1px] transition"
          >
            Visit Webreich <Globe size={16} />
          </a>
        </motion.div>

        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="https://avatars.githubusercontent.com/u/99380793?s=400&v=4"
                alt="Akshay Bhaltilak"
                className="h-12 w-12 rounded-full border border-primary/60"
              />
              <div>
                <p className="text-sand font-semibold">Akshay Bhaltilak</p>
                <p className="text-xs text-sand/60">Co-Founder, Webreich</p>
              </div>
            </div>
            <p className="text-sand/70 text-sm leading-relaxed">
              Building modern web apps and automations through Webreich for businesses that want faster growth.
            </p>
            <div className="flex gap-3 pt-1">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/5 border border-white/10 text-sand hover:text-primary transition"
                  whileHover={{ scale: 1.05 }}
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sand/60 mb-3">Navigate</p>
            <div className="space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={`/${item.href}`}
                  className="block text-sand/80 hover:text-primary transition text-sm"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sand/60 mb-3">Services</p>
            <div className="space-y-2">
              {services.map((item) => (
                <p key={item} className="text-sand/80 text-sm">
                  {item}
                </p>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.2em] text-sand/60 mb-3">Contact</p>
            <div className="space-y-2 text-sm text-sand/80">
              <a href="mailto:akshaybhaltilak989@gmail.com" className="hover:text-primary transition break-all">
                akshaybhaltilak989@gmail.com
              </a>
              <a href="tel:+919834153020" className="block hover:text-primary transition">
                +91 98341 53020
              </a>
              <a
                href="https://webreich.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-semibold"
              >
                webreich.in <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-sand/50 border-t border-white/5 pt-6 gap-3">
          <p>{year} Akshay Bhaltilak | Co-Founder Webreich | React, Vite, Tailwind.</p>
          <div className="flex gap-4">
            <span>Portfolio by Webreich.</span>
            <span>Based in India.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
