import { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaArrowRight,
  FaServer,
  FaMobileAlt,
  FaDatabase,
  FaGlobe,
  FaCloud,
  FaPaperPlane,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaCrown,
  FaBolt,
} from 'react-icons/fa';
import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNodedotjs,
  SiFirebase,
  SiPostgresql,
} from 'react-icons/si';

/* ─── Design tokens ─────────────────────────────────────────────── */
const C = {
  cyan:    '#00f5ff',
  violet:  '#bf5af2',
  pink:    '#ff2d78',
  green:   '#00ff87',
  gold:    '#ffd700',
  bg:      '#050508',
  surface: 'rgba(255,255,255,0.04)',
  border:  'rgba(255,255,255,0.08)',
};

const glowCyan   = `0 0 24px ${C.cyan}55, 0 0 60px ${C.cyan}22`;
const glowViolet = `0 0 24px ${C.violet}55, 0 0 60px ${C.violet}22`;
const glowPink   = `0 0 24px ${C.pink}55`;

/* ─── Data ───────────────────────────────────────────────────────── */
const taglines = [
  'Co-Founder at Webreich · Full Stack Product Engineer',
  'I build modern web products that drive measurable growth',
  'Automation, SaaS UX, and reliable architecture for real businesses',
];

const skills = [
  { label: 'React & Next.js',     icon: <SiReact />,      level: 'Expert',   color: C.cyan   },
  { label: 'TypeScript',          icon: <SiTypescript />, level: 'Advanced', color: C.violet },
  { label: 'Node.js & APIs',      icon: <SiNodedotjs />,  level: 'Advanced', color: C.green  },
  { label: 'Firebase & Auth',     icon: <SiFirebase />,   level: 'Advanced', color: C.pink   },
  { label: 'PostgreSQL / MongoDB',icon: <SiPostgresql />, level: 'Advanced', color: C.cyan   },
  { label: 'Tailwind CSS',        icon: <SiTailwindcss />,level: 'Expert',   color: C.violet },
  { label: 'Cloud Functions',     icon: <FaCloud />,      level: 'Advanced', color: C.green  },
  { label: 'System Design',       icon: <FaServer />,     level: 'Proven',   color: C.pink   },
];

const projects = [
  {
    title: 'Election Campaign Management System',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Firebase'],
    badge: 'Flagship',
    badgeColor: C.gold,
    highlight: 'Used by 23 panels and contributed to 19 winning candidates.',
    glow: glowCyan,
    accent: C.cyan,
  },
  {
    title: 'Live Gold Rate Display Software',
    stack: ['React', 'Tailwind', 'Firebase', 'Cloud Functions'],
    badge: 'SaaS',
    badgeColor: C.green,
    highlight: 'Boosted trust for jewellery clients with real-time transparent pricing.',
    glow: glowViolet,
    accent: C.violet,
  },
  {
    title: 'Webreich Business Products',
    stack: ['React', 'Next.js', 'Design Systems', 'Automation'],
    badge: 'Webreich',
    badgeColor: C.pink,
    highlight: 'Built and launched client products through Webreich (webreich.in).',
    glow: glowPink,
    accent: C.pink,
  },
];

const services = [
  { title: 'Website Development',       icon: <FaGlobe />,   color: C.cyan,   desc: 'High-converting websites and product pages with premium polish.' },
  { title: 'Business Automation',       icon: <FaServer />,  color: C.violet, desc: 'Billing, CRM, and WhatsApp workflows that reduce manual operations.' },
  { title: 'Custom Software Solutions', icon: <FaMobileAlt />, color: C.pink, desc: 'Scalable SaaS products built with strong performance and clean UX.' },
];

const achievements = [
  { label: 'Projects shipped', value: '25+',  color: C.cyan   },
  { label: 'Efficiency uplift', value: '30%', color: C.violet },
  { label: 'Clients served',    value: '18+', color: C.green  },
  { label: 'Response time',     value: '<24h',color: C.pink   },
];

const contactLinks = [
  { icon: <FaEnvelope />,  label: 'Email',    value: 'akshaybhaltilak989@gmail.com', href: 'mailto:akshaybhaltilak989@gmail.com', color: C.cyan   },
  { icon: <FaWhatsapp />,  label: 'WhatsApp', value: '+91 98341 53020',              href: 'https://wa.me/919834153020',           color: C.green  },
  { icon: <FaLinkedin />,  label: 'LinkedIn', value: 'akshay-bhaltilak',             href: 'https://www.linkedin.com/in/akshay-bhaltilak', color: C.violet },
];

const bgVideo = 'https://www.pexels.com/download/video/33187885/';

/* ─── Helpers ────────────────────────────────────────────────────── */
const fadeIn = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.65, ease: 'easeOut' },
};

/* ─── Neon text component ────────────────────────────────────────── */
const Neon = ({ children, color = C.cyan, as: Tag = 'span', className = '' }) => (
  <Tag
    className={className}
    style={{ color, textShadow: `0 0 10px ${color}cc, 0 0 28px ${color}66, 0 0 60px ${color}33` }}
  >
    {children}
  </Tag>
);

/* ─── Animated scan line ─────────────────────────────────────────── */
const ScanLine = () => (
  <motion.div
    className="pointer-events-none absolute left-0 right-0 h-[2px] opacity-20"
    style={{ background: `linear-gradient(90deg, transparent, ${C.cyan}, transparent)` }}
    animate={{ top: ['0%', '100%'] }}
    transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
  />
);

/* ─── Floating orbs background ───────────────────────────────────── */
const Orbs = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <motion.div
      className="absolute rounded-full"
      style={{ width: 520, height: 520, left: '-10%', top: '-5%', background: `radial-gradient(circle, ${C.violet}18 0%, transparent 70%)`, filter: 'blur(1px)' }}
      animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
      transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute rounded-full"
      style={{ width: 640, height: 640, right: '-15%', top: '10%', background: `radial-gradient(circle, ${C.cyan}14 0%, transparent 70%)`, filter: 'blur(1px)' }}
      animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
      transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute rounded-full"
      style={{ width: 380, height: 380, left: '35%', bottom: '5%', background: `radial-gradient(circle, ${C.pink}12 0%, transparent 70%)`, filter: 'blur(1px)' }}
      animate={{ x: [0, 15, 0], y: [0, -30, 0] }}
      transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
);

/* ─── Section header ─────────────────────────────────────────────── */
const SectionHead = ({ label, color = C.cyan }) => (
  <div className="flex items-center gap-3 mb-6">
    <motion.span
      className="h-8 w-1 rounded-full"
      style={{ background: color, boxShadow: `0 0 12px ${color}` }}
      animate={{ opacity: [1, 0.4, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
    <span className="text-xs uppercase tracking-[0.35em] font-bold" style={{ color, textShadow: `0 0 8px ${color}99` }}>
      {label}
    </span>
  </div>
);

/* ─── Glass card ─────────────────────────────────────────────────── */
const GlassCard = ({ children, className = '', hoverGlow, style = {} }) => (
  <motion.div
    className={`rounded-2xl border ${className}`}
    style={{ background: C.surface, borderColor: C.border, ...style }}
    whileHover={hoverGlow ? { boxShadow: hoverGlow, borderColor: '#ffffff18', y: -4 } : { y: -3 }}
    transition={{ duration: 0.25 }}
  >
    {children}
  </motion.div>
);

/* ═══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════════════════════════════════ */
export default function Home() {
  const [taglineIndex, setTaglineIndex]   = useState(0);
  const [scrolled,     setScrolled]       = useState(false);
  const location = useLocation();

  useEffect(() => {
    const id = setInterval(() => setTaglineIndex(i => (i + 1) % taglines.length), 2800);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }, [location.hash]);

  return (
    <div style={{ background: C.bg, color: '#e8e8f0', fontFamily: "'Syne', 'Space Grotesk', sans-serif", overflowX: 'hidden' }}>

      {/* ── Google fonts ── */}
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Playwrite+AR+Guides&display=swap" rel="stylesheet"/>

      {/* ── Video BG (desktop) ── */}
      <div className="fixed inset-0 z-0 hidden md:block">
        <video className="h-full w-full object-cover" autoPlay muted loop playsInline preload="metadata" aria-hidden="true">
          <source src={bgVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, #050508ee 0%, #050508cc 40%, #050508ee 100%)' }} />
      </div>

      {/* ── Mobile BG ── */}
      <div className="fixed inset-0 z-0 md:hidden" style={{ background: `radial-gradient(ellipse at 20% 20%, ${C.violet}22 0%, transparent 55%), radial-gradient(ellipse at 80% 80%, ${C.cyan}18 0%, transparent 55%), ${C.bg}` }} />
      <motion.div
        className="fixed inset-0 z-0 md:hidden"
        style={{ background: `linear-gradient(125deg, transparent 20%, ${C.pink}12 45%, transparent 70%)` }}
        animate={{ x: ['-35%', '35%', '-35%'] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
      />

      {/* ── Grid overlay ── */}
      <div className="fixed inset-0 z-0 opacity-[0.03]"
        style={{ backgroundImage: `linear-gradient(${C.cyan}44 1px, transparent 1px), linear-gradient(90deg, ${C.cyan}44 1px, transparent 1px)`, backgroundSize: '60px 60px' }} />

      <Orbs />

      {/* ══════════════ NAV ══════════════ */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 sm:px-8 py-4"
        style={{
          background: scrolled ? 'rgba(5,5,8,0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? `1px solid ${C.border}` : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo / Name */}
        <Link to="/" className="flex items-center gap-2 no-underline group">
         <img
    src="/ak.png"
    alt="Akshay Bhaltilak"
    className="w-12 h-12 md:w-14 md:h-14 object-cover rounded-full border-2 transition-all duration-300 group-hover:scale-105"
    style={{
      borderColor: C.cyan,
      boxShadow: `0 0 15px ${C.cyan}`,
    }}
  />
          <div>
            <div className="text-sm font-bold leading-none" style={{ color: '#fff' }}>Akshay Bhaltilak</div>
            <div className="text-[10px] leading-none mt-0.5" style={{ color: C.cyan, textShadow: `0 0 8px ${C.cyan}` }}>Full Stack Engineer</div>
          </div>
        </Link>

        {/* Webreich link only */}
        <motion.a
          href="https://webreich.in"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-wider no-underline"
          style={{ border: `1px solid ${C.cyan}55`, color: C.cyan, boxShadow: `0 0 16px ${C.cyan}22`, fontFamily: 'Space Mono, monospace' }}
          whileHover={{ boxShadow: glowCyan, borderColor: C.cyan, scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaBolt size={10} />
          webreich.in
        </motion.a>
      </motion.nav>

      {/* ══════════════ CONTENT ══════════════ */}
      <main className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-20 space-y-24 sm:space-y-32">

        {/* ── HERO ── */}
        <motion.section id="hero" {...fadeIn} className="grid lg:grid-cols-[1.1fr,0.9fr] gap-10 items-center">
          <div className="space-y-6">
            {/* Badge */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.22em] font-bold"
              style={{ border: `1px solid ${C.violet}55`, background: `${C.violet}11`, color: C.violet, boxShadow: `0 0 18px ${C.violet}22` }}
              animate={{ boxShadow: [`0 0 18px ${C.violet}22`, `0 0 30px ${C.violet}44`, `0 0 18px ${C.violet}22`] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <FaCrown size={10} />
              Co-Founder · Webreich.in
            </motion.div>

            {/* Name */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1]" style={{ fontFamily: 'Syne, sans-serif' }}>
                <span style={{ color: '#ffffff' }}>Akshay</span>
                <br />
                <Neon color={C.cyan} className="block">Bhaltilak</Neon>
              </h1>
              {/* <div className="mt-2 text-base sm:text-lg font-bold" style={{ color: C.violet, textShadow: `0 0 12px ${C.violet}88` }}>
                Full Stack Developer &amp; Product Engineer
              </div> */}
            </div>

            {/* Rotating tagline */}
            <AnimatePresence mode="wait">
              <motion.p
                key={taglineIndex}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.4 }}
                className="text-sm sm:text-base leading-relaxed max-w-xl"
                style={{ color: 'rgba(232,232,240,0.75)' }}
              >
                {taglines[taglineIndex]}
              </motion.p>
            </AnimatePresence>

            <p className="text-sm leading-relaxed max-w-lg" style={{ color: 'rgba(232,232,240,0.6)' }}>
              I help businesses grow with modern software, automation, and high-performance web platforms.
              Through <span style={{ color: C.cyan }}>Webreich</span>, we deliver real-world products that improve operations, customer experience, and revenue.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3">
              <motion.div whileHover={{ scale: 1.04, boxShadow: glowCyan }} whileTap={{ scale: 0.97 }}>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold no-underline"
                  style={{ background: `linear-gradient(135deg, ${C.cyan}, ${C.violet})`, color: C.bg, fontFamily: 'Space Mono, monospace' }}
                >
                  View Projects <FaArrowRight size={12} />
                </a>
              </motion.div>
              <motion.a
                href="https://webreich.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold no-underline"
                style={{ border: `1px solid ${C.border}`, color: '#e8e8f0' }}
                whileHover={{ borderColor: C.violet, color: C.violet, boxShadow: glowViolet, scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Visit Webreich.in
              </motion.a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              {achievements.map((a) => (
                <GlassCard key={a.label} className="p-4 text-center" hoverGlow={`0 0 20px ${a.color}44`}>
                  <p className="text-2xl font-extrabold" style={{ color: a.color, textShadow: `0 0 14px ${a.color}88`, fontFamily: 'Space Mono, monospace' }}>{a.value}</p>
                  <p className="text-[10px] uppercase tracking-wide mt-1" style={{ color: 'rgba(232,232,240,0.5)' }}>{a.label}</p>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Right card */}
          <GlassCard
            className="p-6 sm:p-7 relative overflow-hidden"
            hoverGlow={`0 0 40px ${C.cyan}22`}
            style={{ background: 'rgba(255,255,255,0.03)', borderColor: `${C.cyan}22` }}
          >
            <ScanLine />
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-xs uppercase tracking-widest" style={{ color: 'rgba(232,232,240,0.45)' }}>Business-first execution</p>
                <Neon as="p" color={C.cyan} className="text-xl sm:text-2xl font-bold mt-1" style={{ fontFamily: 'Syne, sans-serif' }}>Proven impact</Neon>
              </div>
              <motion.span
                className="rounded-full px-3 py-1 text-xs font-bold"
                style={{ background: `${C.green}18`, border: `1px solid ${C.green}55`, color: C.green }}
                animate={{ boxShadow: [`0 0 8px ${C.green}33`, `0 0 18px ${C.green}66`, `0 0 8px ${C.green}33`] }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                ● Live & Active
              </motion.span>
            </div>

            <div className="space-y-3">
              {[
                { title: 'Co-Founder at Webreich',    result: 'Built products via webreich.in',         icon: <FaCrown />,   color: C.gold   },
                { title: 'Automation Specialist',     result: 'WhatsApp, billing, CRM workflows',       icon: <FaServer />,  color: C.cyan   },
                { title: 'Product Engineer',          result: 'Reliable web apps for scaling teams',    icon: <FaDatabase />,color: C.violet },
              ].map((item) => (
                <motion.div
                  key={item.title}
                  className="flex items-center gap-3 rounded-xl px-4 py-3 cursor-default"
                  style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${C.border}` }}
                  whileHover={{ x: 5, borderColor: item.color + '55', boxShadow: `0 0 16px ${item.color}22` }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="h-9 w-9 grid place-items-center rounded-lg flex-shrink-0 text-sm" style={{ background: `${item.color}18`, color: item.color, boxShadow: `0 0 12px ${item.color}44` }}>{item.icon}</div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm">{item.title}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(232,232,240,0.5)' }}>{item.result}</p>
                  </div>
                  <FaArrowRight size={12} style={{ color: item.color, flexShrink: 0 }} />
                </motion.div>
              ))}
            </div>

            <div className="mt-5 grid grid-cols-3 gap-2 text-xs">
              {[
                { label: 'Frontend', value: 'React, Next.js', color: C.cyan   },
                { label: 'Backend',  value: 'Node.js, APIs',  color: C.violet },
                { label: 'Venture',  value: 'Webreich.in',    color: C.pink   },
              ].map(t => (
                <div key={t.label} className="rounded-lg p-3 text-center" style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${C.border}` }}>
                  <p className="text-[10px] uppercase tracking-wide" style={{ color: 'rgba(232,232,240,0.4)' }}>{t.label}</p>
                  <p className="font-bold mt-1 text-[11px]" style={{ color: t.color, textShadow: `0 0 8px ${t.color}` }}>{t.value}</p>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.section>

        {/* ── ABOUT ── */}
        <motion.section id="about" {...fadeIn}>
          <SectionHead label="About" color={C.violet} />
          <GlassCard className="p-6 sm:p-10 relative overflow-hidden" hoverGlow={glowViolet}>
            <div className="absolute top-0 right-0 w-72 h-72 rounded-full opacity-10 pointer-events-none" style={{ background: `radial-gradient(circle, ${C.violet} 0%, transparent 70%)`, transform: 'translate(40%,-40%)' }} />
            <h2 className="text-2xl sm:text-4xl font-extrabold mb-4 max-w-2xl" style={{ fontFamily: 'Syne, sans-serif', lineHeight: 1.2 }}>
              I build software that{' '}
              <Neon color={C.violet}>solves business problems</Neon>
            </h2>
            <p className="text-sm sm:text-base leading-relaxed max-w-3xl mb-6" style={{ color: 'rgba(232,232,240,0.65)' }}>
              I am Akshay Bhaltilak, a Full Stack Developer and Co-Founder of Webreich. My focus is practical product delivery,
              from discovery to deployment, with long-term maintainability and measurable business outcomes.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { text: 'Co-Founder at Webreich (webreich.in) building client-focused digital products.',     color: C.cyan   },
                { text: 'Delivered automation systems that reduce manual operations and response time.',       color: C.violet },
                { text: 'Built multi-tenant SaaS platforms for retail, hospitality, and campaign operations.',color: C.pink   },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="rounded-xl p-4 text-sm leading-relaxed"
                  style={{ background: 'rgba(255,255,255,0.03)', border: `1px solid ${item.color}33`, color: 'rgba(232,232,240,0.75)', borderLeft: `3px solid ${item.color}` }}
                  whileHover={{ borderColor: item.color, boxShadow: `0 0 20px ${item.color}22` }}
                >
                  {item.text}
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.section>

        {/* ── SKILLS ── */}
        <motion.section id="skills" {...fadeIn}>
          <SectionHead label="Skills" color={C.cyan} />
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {skills.map((s, i) => (
              <motion.div
                key={s.label}
                className="rounded-2xl p-4 flex items-center gap-3 cursor-default"
                style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${C.border}` }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                whileHover={{ y: -5, borderColor: s.color + '77', boxShadow: `0 0 22px ${s.color}33` }}
              >
                <div className="h-10 w-10 grid place-items-center rounded-xl text-lg flex-shrink-0" style={{ background: `${s.color}18`, color: s.color, boxShadow: `0 0 14px ${s.color}44` }}>
                  {s.icon}
                </div>
                <div>
                  <p className="font-bold text-sm">{s.label}</p>
                  <p className="text-[11px] mt-0.5" style={{ color: s.color, textShadow: `0 0 6px ${s.color}88` }}>{s.level}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── PROJECTS ── */}
        <motion.section id="projects" {...fadeIn}>
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <SectionHead label="Projects" color={C.pink} />
            <motion.a
              href="https://github.com/akshay-bhaltilak"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-bold no-underline"
              style={{ color: C.pink, fontFamily: 'Space Mono, monospace' }}
              whileHover={{ textShadow: `0 0 10px ${C.pink}` }}
            >
              <FaGithub /> GitHub Profile <FaArrowRight size={10} />
            </motion.a>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {projects.map((p) => (
              <motion.div
                key={p.title}
                className="group relative rounded-2xl p-5 overflow-hidden cursor-pointer"
                style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${C.border}` }}
                whileHover={{ y: -6, borderColor: p.accent + '66', boxShadow: p.glow }}
                transition={{ duration: 0.25 }}
              >
                <a href="https://webreich.in" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10" aria-label="View projects on Webreich" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity" style={{ background: `radial-gradient(ellipse at top left, ${p.accent}12, transparent 60%)` }} />
                <div className="relative">
                  <span className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold mb-3" style={{ background: `${p.badgeColor}18`, color: p.badgeColor, border: `1px solid ${p.badgeColor}44`, boxShadow: `0 0 12px ${p.badgeColor}33` }}>
                    {p.badge}
                  </span>
                  <h3 className="text-lg font-extrabold mb-2 leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(232,232,240,0.6)' }}>{p.highlight}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.stack.map(t => (
                      <span key={t} className="text-[11px] px-2 py-1 rounded-full" style={{ background: 'rgba(255,255,255,0.06)', border: `1px solid ${C.border}`, color: 'rgba(232,232,240,0.7)' }}>{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── SERVICES ── */}
        <motion.section id="services" {...fadeIn}>
          <SectionHead label="Services" color={C.green} />
          <div className="grid md:grid-cols-3 gap-5">
            {services.map((s) => (
              <GlassCard key={s.title} className="p-6 space-y-4" hoverGlow={`0 0 28px ${s.color}33`} style={{ borderColor: `${s.color}22` }}>
                <motion.div
                  className="h-12 w-12 grid place-items-center rounded-2xl text-xl"
                  style={{ background: `${s.color}18`, color: s.color, boxShadow: `0 0 18px ${s.color}44` }}
                  animate={{ boxShadow: [`0 0 12px ${s.color}33`, `0 0 22px ${s.color}66`, `0 0 12px ${s.color}33`] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  {s.icon}
                </motion.div>
                <Neon as="h3" color={s.color} className="text-xl font-extrabold" style={{ fontFamily: 'Syne, sans-serif' }}>{s.title}</Neon>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,232,240,0.6)' }}>{s.desc}</p>
                <a href="https://webreich.in" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-bold no-underline"
                  style={{ color: s.color, fontFamily: 'Space Mono, monospace' }}>
                  Build with Webreich <FaArrowRight size={10} />
                </a>
              </GlassCard>
            ))}
          </div>
        </motion.section>

        {/* ── CONTACT ── */}
        <motion.section id="contact" {...fadeIn} className="grid lg:grid-cols-[1fr,0.9fr] gap-6 sm:gap-8 items-start">
          {/* Left */}
          <GlassCard className="p-6 sm:p-8 space-y-5 relative overflow-hidden" style={{ borderColor: `${C.cyan}22` }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at bottom right, ${C.cyan}08, transparent 60%)` }} />
            <SectionHead label="Contact" color={C.cyan} />
            <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight" style={{ fontFamily: 'Syne, sans-serif' }}>
              Let us build your next<br /><Neon color={C.cyan}>product at Webreich</Neon>
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(232,232,240,0.6)' }}>
              Need a fast MVP, automation stack, or production-grade web app? I can help through Webreich with strategy, engineering, and clear execution.
            </p>
            <motion.a
              href="https://webreich.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-3 text-sm font-bold no-underline"
              style={{ background: `${C.cyan}15`, border: `1px solid ${C.cyan}44`, color: C.cyan, fontFamily: 'Space Mono, monospace' }}
              whileHover={{ boxShadow: glowCyan }}
            >
              <FaBolt size={12} /> webreich.in — Official Website
            </motion.a>

            <div className="space-y-3">
              {contactLinks.map(item => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl px-4 py-3 no-underline"
                  style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${C.border}`, color: '#e8e8f0' }}
                  whileHover={{ borderColor: item.color + '77', boxShadow: `0 0 18px ${item.color}22`, x: 4 }}
                >
                  <span className="text-lg" style={{ color: item.color, filter: `drop-shadow(0 0 6px ${item.color})` }}>{item.icon}</span>
                  <div className="min-w-0 flex-1">
                    <p className="text-[10px] uppercase tracking-widest" style={{ color: 'rgba(232,232,240,0.4)' }}>{item.label}</p>
                    <p className="font-semibold text-sm break-all">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="flex gap-3 pt-1">
              {[
                { icon: <FaGithub />, href: 'https://github.com/akshay-bhaltilak', color: C.cyan },
                { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/akshay-bhaltilak', color: C.violet },
              ].map((s, i) => (
                <motion.a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="h-10 w-10 grid place-items-center rounded-xl no-underline"
                  style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${C.border}`, color: '#e8e8f0' }}
                  whileHover={{ color: s.color, borderColor: s.color, boxShadow: `0 0 16px ${s.color}44` }}
                >
                  {s.icon}
                </motion.a>
              ))}
            </div>
          </GlassCard>

          {/* Right – form */}
          <GlassCard className="p-6 sm:p-8 relative overflow-hidden" style={{ borderColor: `${C.violet}22` }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: `radial-gradient(ellipse at top left, ${C.violet}08, transparent 60%)` }} />
            <form action="https://api.web3forms.com/submit" method="POST" className="relative space-y-4">
              <input type="hidden" name="access_key" value="648b11dc-d485-4b99-a68a-24707b1d0665" />
              <input type="hidden" name="subject" value="Portfolio Lead from Webreich Website" />

              <p className="text-lg font-bold" style={{ fontFamily: 'Syne, sans-serif', color: C.violet, textShadow: `0 0 10px ${C.violet}88` }}>Send a message</p>

              <div className="grid sm:grid-cols-2 gap-4">
                {[{ n: 'name', label: 'Name', placeholder: 'Your name', type: 'text' }, { n: 'email', label: 'Email', placeholder: 'you@company.com', type: 'email' }].map(f => (
                  <div key={f.n}>
                    <label className="block text-xs uppercase tracking-wider mb-1" style={{ color: 'rgba(232,232,240,0.5)' }}>{f.label}</label>
                    <input
                      required={f.n !== 'budget'}
                      name={f.n}
                      type={f.type}
                      placeholder={f.placeholder}
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                      style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${C.border}`, color: '#e8e8f0' }}
                      onFocus={e => { e.target.style.borderColor = C.violet; e.target.style.boxShadow = `0 0 14px ${C.violet}33`; }}
                      onBlur={e => { e.target.style.borderColor = C.border; e.target.style.boxShadow = 'none'; }}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider mb-1" style={{ color: 'rgba(232,232,240,0.5)' }}>Budget (optional)</label>
                <input
                  name="budget"
                  placeholder="e.g. ₹50k – ₹1.5L"
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                  style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${C.border}`, color: '#e8e8f0' }}
                  onFocus={e => { e.target.style.borderColor = C.cyan; e.target.style.boxShadow = `0 0 14px ${C.cyan}33`; }}
                  onBlur={e => { e.target.style.borderColor = C.border; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider mb-1" style={{ color: 'rgba(232,232,240,0.5)' }}>Project summary</label>
                <textarea
                  required
                  name="message"
                  rows="4"
                  placeholder="Tell me what we should build through Webreich."
                  className="w-full rounded-xl px-4 py-3 text-sm outline-none resize-none transition-all"
                  style={{ background: 'rgba(255,255,255,0.05)', border: `1px solid ${C.border}`, color: '#e8e8f0' }}
                  onFocus={e => { e.target.style.borderColor = C.violet; e.target.style.boxShadow = `0 0 14px ${C.violet}33`; }}
                  onBlur={e => { e.target.style.borderColor = C.border; e.target.style.boxShadow = 'none'; }}
                />
              </div>

              <motion.button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold"
                style={{ background: `linear-gradient(135deg, ${C.violet}, ${C.cyan})`, color: C.bg, fontFamily: 'Space Mono, monospace' }}
                whileHover={{ scale: 1.02, boxShadow: `0 0 28px ${C.cyan}55` }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message <FaPaperPlane size={13} />
              </motion.button>

              <motion.a
                href="https://wa.me/919834153020?text=Hi%20Akshay%2C%20I%20need%20a%20quote."
                className="block text-center rounded-xl py-3 text-sm font-bold no-underline"
                style={{ border: `1px solid ${C.green}44`, color: C.green, fontFamily: 'Space Mono, monospace' }}
                whileHover={{ boxShadow: `0 0 20px ${C.green}44`, borderColor: C.green }}
              >
                <FaWhatsapp className="inline mr-2" />
                Prefer WhatsApp? Start a chat
              </motion.a>
            </form>
          </GlassCard>
        </motion.section>

        {/* ── FOOTER ── */}
        <motion.footer {...fadeIn} className="text-center py-8 border-t" style={{ borderColor: C.border }}>
          <p className="text-xs" style={{ color: 'rgba(232,232,240,0.35)', fontFamily: 'Space Mono, monospace' }}>
            © {new Date().getFullYear()} <Neon color={C.cyan}>Akshay Bhaltilak</Neon> · Co-Founder <Neon color={C.violet}>Webreich.in</Neon>
          </p>
        </motion.footer>
      </main>
    </div>
  );
}
