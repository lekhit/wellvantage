import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Zap } from 'lucide-react';

export default function CTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-surface-950" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-transparent" />

      <div ref={ref} className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl glass border border-primary-500/20 p-8 sm:p-12 lg:p-16 text-center"
        >
          {/* Background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-radial opacity-40" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8">
              <Zap className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-300">Ready to transform your gym?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
              Start your{' '}
              <span className="text-gradient">14-day free trial</span>{' '}
              today
            </h2>
            <p className="mt-6 text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              Join 500+ fitness centers already using WellVantage to automate operations, 
              engage members, and grow revenue. No credit card required.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#pricing"
                className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white font-semibold rounded-2xl shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 flex items-center gap-2"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#"
                className="px-8 py-4 glass-card hover:bg-white/5 text-white font-semibold rounded-2xl transition-all duration-300"
              >
                Schedule a Demo
              </a>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No credit card
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Cancel anytime
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Full features
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
