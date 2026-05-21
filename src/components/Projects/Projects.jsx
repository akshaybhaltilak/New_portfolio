import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';
import { Pagination } from '../pagination/Pagination';

const projects = [
  {
    title: 'Election Campaign Management System',
    description:
      'A full-stack platform to run political campaigns at scale: outreach, automation, and real-time tracking built for high-stakes elections.',
    features: [
      'WhatsApp bulk messaging automation',
      'Contact data & segmentation',
      'Campaign progress dashboards',
      'High-throughput delivery engine'
    ],
    impacts: [
      'Used by 23 Nagarsevak panels in Akola',
      '19 candidates WON using this system',
      'Massively improved voter engagement'
    ],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Firebase', 'Twilio API'],
    badge: 'Flagship',
    impactBadge: 'Real Impact',
    highlight: 'High engagement & outreach achieved'
  },
  {
    title: 'Live Gold Rate Display Software',
    description:
      'SaaS for jewellery stores to broadcast trustworthy live gold rates across in-store screens and websites.',
    features: [
      'Real-time price feed & refresh',
      'Custom display themes per shop',
      'Multi-client tenancy',
      'Plug-and-play embeddable widget'
    ],
    impacts: [
      'Adopted by multiple jewellery clients',
      'Boosts customer trust & transparency',
      'Zero-manual updates for staff'
    ],
    stack: ['React', 'Tailwind', 'Firebase', 'Cloud Functions'],
    badge: 'SaaS',
    impactBadge: 'Trust Driver',
    highlight: 'Increases customer trust at the counter'
  },
  {
    title: 'Hotel CRM & Booking Platform',
    description:
      'Scalable CRM built for small/mid-size hotels: bookings, guest lifecycle, and revenue analytics in one dashboard.',
    features: [
      'End-to-end booking flow',
      'Guest data & retention tracking',
      'Revenue and occupancy analytics',
      'Role-based access for teams'
    ],
    impacts: [
      'Built as a multi-tenant SaaS',
      'Designed for fast onboarding',
      'Improves visibility on revenue drivers'
    ],
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Redis'],
    badge: 'Product',
    impactBadge: 'Built for Scale',
    highlight: 'Designed for small to mid-scale hotels'
  },
  {
    title: 'Smart Billing & Customer Engagement System',
    description:
      'Billing suite that issues invoices and instantly delivers them via WhatsApp—no manual follow-up required.',
    features: [
      'Automatic bill generation',
      'WhatsApp receipt delivery',
      'Excel data export & storage',
      'Customer tracking & re-engagement'
    ],
    impacts: [
      'Automates customer communication',
      'Cuts post-sale follow-up time',
      'Improves customer experience'
    ],
    stack: ['React', 'Node.js', 'Express', 'Firebase', 'WhatsApp API'],
    badge: 'Automation',
    impactBadge: 'CX Uplift',
    highlight: 'Communication automated from invoice to receipt'
  },
  {
    title: 'Webreich Community & Business Growth',
    description:
      'Co-founded Webreich to build and launch digital products for real businesses while growing a tech community in tier-3 cities.',
    features: [
      'Multiple client-facing SaaS products delivered',
      'Community programs for developers',
      'Product discovery and GTM for local businesses'
    ],
    impacts: [
      'Helped businesses go digital',
      'Shipped real-world client projects',
      'Built a talent pipeline in tier-3 cities'
    ],
    stack: ['React', 'Next.js', 'Firebase', 'Design Systems'],
    badge: 'Growth',
    impactBadge: 'Ecosystem',
    highlight: 'Driving business digitization + community building'
  }
];

export function Projects() {
  return (
    <div className="bg-deep text-sand min-h-screen">
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16 space-y-12">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.35em] text-sand/60">Portfolio</p>
          <h1 className="text-3xl sm:text-4xl font-semibold">Real-World Projects & Products</h1>
          <p className="text-sand/70 text-base sm:text-lg max-w-3xl mx-auto">
            Solutions built for real clients, delivering measurable results.
          </p>
        </div>

        <motion.div
          className="grid gap-6 sm:gap-7 md:grid-cols-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {projects.map((project, idx) => (
            <ProjectCard key={project.title} project={project} index={idx} />
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <Pagination result={'Projects'} next={'/contact'} prev={'/about'} />
        </div>
      </section>
    </div>
  );
}
