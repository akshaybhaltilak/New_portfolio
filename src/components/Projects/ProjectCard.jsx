import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: 'easeOut' }
  })
};

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      variants={cardVariants}
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ y: -6 }}
      className="relative rounded-2xl bg-white/5 border border-white/10 p-5 sm:p-6 shadow-glow overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -right-10 -top-10 h-40 w-40 bg-primary/8 blur-3xl" />
        <div className="absolute left-4 bottom-4 h-24 w-24 bg-accent/10 blur-2xl" />
      </div>

      <div className="relative space-y-3">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-primary/15 text-primary border border-primary/30">
            {project.badge}
          </span>
          {project.impactBadge && (
            <span className="inline-flex items-center px-3 py-1 text-xs font-semibold rounded-full bg-accent/20 text-primary border border-accent/40">
              {project.impactBadge}
            </span>
          )}
        </div>

        <h3 className="text-xl sm:text-2xl font-semibold text-sand">{project.title}</h3>
        <p className="text-sand/75 text-sm sm:text-base leading-relaxed">{project.description}</p>

        <div className="grid sm:grid-cols-2 gap-3">
          <div className="rounded-xl bg-white/5 border border-white/10 p-4">
            <p className="text-xs uppercase tracking-[0.25em] text-sand/50 mb-2">Features</p>
            <ul className="space-y-2 text-sm text-sand/80">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-white/5 border border-white/10 p-4">
            <p className="text-xs uppercase tracking-[0.25em] text-sand/50 mb-2">Impact</p>
            <ul className="space-y-2 text-sm text-sand/80">
              {project.impacts.map((impact) => (
                <li key={impact} className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">◆</span>
                  <span>{impact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-full bg-white/10 border border-white/10 text-sand/80"
            >
              {tech}
            </span>
          ))}
        </div>

        {project.link && (
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary mt-2"
            whileHover={{ x: 4 }}
          >
            View live <FaExternalLinkAlt size={12} />
          </motion.a>
        )}
      </div>

      {project.highlight && (
        <div className="mt-4 rounded-xl border border-primary/40 bg-primary/10 text-primary px-4 py-3 text-sm font-semibold flex items-center gap-2 relative">
          <FaArrowRight size={12} />
          {project.highlight}
        </div>
      )}
    </motion.article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
    impacts: PropTypes.arrayOf(PropTypes.string).isRequired,
    stack: PropTypes.arrayOf(PropTypes.string).isRequired,
    badge: PropTypes.string,
    impactBadge: PropTypes.string,
    highlight: PropTypes.string,
    link: PropTypes.string
  }).isRequired,
  index: PropTypes.number
};
