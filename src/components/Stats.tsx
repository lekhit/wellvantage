import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Fitness Centers' },
  { value: 2.5, suffix: 'M+', label: 'Members Managed', isDecimal: true },
  { value: 98, suffix: '%', label: 'Uptime SLA' },
  { value: 35, suffix: '%', label: 'Avg. Revenue Increase' },
];

function AnimatedNumber({ value, suffix, isDecimal, inView }: { value: number; suffix: string; isDecimal?: boolean; inView: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      start = eased * value;
      setDisplay(start);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [inView, value]);

  const formatted = isDecimal ? display.toFixed(1) : Math.floor(display).toString();

  return (
    <span>
      {formatted}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="relative py-16 sm:py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-surface-950 via-surface-900/50 to-surface-950" />
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gradient">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} isDecimal={stat.isDecimal} inView={inView} />
                </div>
                <div className="mt-2 text-sm text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
