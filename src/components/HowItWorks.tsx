import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { UserPlus, Brain, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    number: '01',
    title: 'Onboard Your Gym',
    description:
      'Set up your facility in minutes. Import member data, configure access points, and customize your dashboard to match your brand.',
    color: 'bg-emerald-500/20 text-emerald-400',
  },
  {
    icon: Brain,
    number: '02',
    title: 'Let AI Take Over',
    description:
      'Our AI engine learns your operations, automates lead nurturing, schedules classes, and sends personalized communications to members.',
    color: 'bg-cyan-500/20 text-cyan-400',
  },
  {
    icon: TrendingUp,
    number: '03',
    title: 'Watch Your Business Grow',
    description:
      'Track real-time analytics, identify at-risk members, optimize pricing, and make data-backed decisions that drive revenue.',
    color: 'bg-violet-500/20 text-violet-400',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-surface-950" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-radial-cyan opacity-20" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <ArrowRight className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-300">Simple Process</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Get started in{' '}
            <span className="text-gradient">3 easy steps</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            No complex setup required. WellVantage is designed to get your gym 
            running smarter from day one.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-white/10 to-transparent" />
              )}

              <div className="relative">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center`}
                  >
                    <step.icon className="w-7 h-7" />
                  </div>
                  <span className="text-4xl font-bold text-white/10">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
