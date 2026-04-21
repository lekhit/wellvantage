import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael Torres',
    role: 'Owner, IronPulse Fitness',
    avatar: 'MT',
    content:
      'WellVantage transformed how we manage our gym. The AI lead management alone increased our conversion rate by 40%. The biometric access system eliminated check-in bottlenecks completely.',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Director, Elevate Wellness Studios',
    avatar: 'SC',
    content:
      'The analytics dashboard gives us insights we never had before. We can predict churn, optimize class schedules, and personalize member communications. Our retention improved by 28% in just 3 months.',
    rating: 5,
  },
  {
    name: 'David Park',
    role: 'CEO, FitNation Chain',
    avatar: 'DP',
    content:
      'Managing 12 locations used to be a nightmare. WellVantage unified everything — scheduling, access control, member engagement — into one powerful platform. Best investment we\'ve made.',
    rating: 5,
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-surface-950" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial opacity-20" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Star className="w-4 h-4 text-primary-400 fill-primary-400" />
            <span className="text-sm font-medium text-primary-300">Client Testimonials</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Loved by gym owners{' '}
            <span className="text-gradient">worldwide</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            See how fitness businesses are transforming their operations 
            and growing revenue with WellVantage.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <div className="relative glass-card rounded-2xl p-6 sm:p-8 h-full hover:bg-white/[0.04] transition-all duration-300">
                <Quote className="w-10 h-10 text-primary-500/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-slate-300 leading-relaxed mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500/30 to-accent-500/30 flex items-center justify-center text-sm font-medium text-primary-300">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">{testimonial.name}</div>
                    <div className="text-xs text-slate-500">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
