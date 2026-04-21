import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Fingerprint,
  Users,
  BarChart3,
  CalendarDays,
  MessageSquare,
  Shield,
  Zap,
} from 'lucide-react';

const features = [
  {
    icon: Fingerprint,
    title: 'Biometric Access Control',
    description:
      'Seamless, secure check-ins with fingerprint & face recognition. Smart attendance tracking ensures quick and accurate member verification.',
    color: 'from-emerald-400/20 to-teal-500/20',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Users,
    title: 'AI-Powered Lead Management',
    description:
      'Convert prospects into loyal members with automated nurturing. Create leads in just 3 simple steps and let AI handle the follow-up.',
    color: 'from-cyan-400/20 to-blue-500/20',
    iconColor: 'text-cyan-400',
  },
  {
    icon: BarChart3,
    title: 'Data-Driven Insights',
    description:
      'Maximize revenue & retention with AI-powered business intelligence. Get actionable insights on member behavior, churn prediction, and revenue forecasting.',
    color: 'from-violet-400/20 to-purple-500/20',
    iconColor: 'text-violet-400',
  },
  {
    icon: CalendarDays,
    title: 'Smart Scheduling',
    description:
      'Automate trainer assignments, prevent overlaps, and keep your members and staff in sync effortlessly. Optimize your fitness center\'s workflow.',
    color: 'from-amber-400/20 to-orange-500/20',
    iconColor: 'text-amber-400',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp & SMS Communication',
    description:
      'Engage members with auto-reminders, promotions & workout tips. Multi-channel communication keeps your community connected and motivated.',
    color: 'from-rose-400/20 to-pink-500/20',
    iconColor: 'text-rose-400',
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description:
      'Bank-grade encryption, role-based access control, and compliance with GDPR & HIPAA standards. Your member data is always protected.',
    color: 'from-sky-400/20 to-indigo-500/20',
    iconColor: 'text-sky-400',
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="features" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-surface-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial opacity-30" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Zap className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-300">Powerful Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Everything you need to{' '}
            <span className="text-gradient">run your gym</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            From biometric access to AI-driven analytics, WellVantage provides a complete 
            suite of tools to streamline operations and grow your fitness business.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative"
            >
              <div className="relative glass-card rounded-2xl p-6 sm:p-8 h-full hover:bg-white/[0.04] transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/5">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
