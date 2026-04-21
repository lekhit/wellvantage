import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Check, Sparkles } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small gyms just getting started',
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      'Up to 200 active members',
      'Basic biometric access control',
      'Lead management (50 leads/mo)',
      'Email & SMS notifications',
      'Basic analytics dashboard',
      'Standard support',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    description: 'For growing fitness centers ready to scale',
    monthlyPrice: 129,
    yearlyPrice: 99,
    features: [
      'Up to 1,000 active members',
      'Advanced biometric + face recognition',
      'Unlimited AI lead nurturing',
      'WhatsApp, SMS & Email automation',
      'AI-powered business intelligence',
      'Smart scheduling & class management',
      'Priority support',
      'Custom branding',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    description: 'Multi-location chains with advanced needs',
    monthlyPrice: 299,
    yearlyPrice: 249,
    features: [
      'Unlimited active members',
      'Multi-location management',
      'White-label mobile app',
      'Advanced AI predictions & forecasting',
      'API access & integrations',
      'Dedicated account manager',
      '24/7 phone support',
      'Custom SLA',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 bg-surface-950" />
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-gradient-radial opacity-20" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Sparkles className="w-4 h-4 text-primary-400" />
            <span className="text-sm font-medium text-primary-300">Pricing Plans</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
            Simple, transparent{' '}
            <span className="text-gradient">pricing</span>
          </h2>
          <p className="mt-6 text-lg text-slate-400 leading-relaxed">
            Choose the plan that fits your business. All plans include a 14-day free trial 
            with no credit card required.
          </p>
        </motion.div>

        {/* Billing toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={`text-sm font-medium ${!isYearly ? 'text-white' : 'text-slate-500'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-14 h-7 rounded-full bg-surface-800 border border-white/10 transition-colors"
          >
            <motion.div
              animate={{ x: isYearly ? 28 : 2 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
              className="absolute top-1 w-5 h-5 rounded-full bg-gradient-to-r from-primary-400 to-primary-500"
            />
          </button>
          <span className={`text-sm font-medium ${isYearly ? 'text-white' : 'text-slate-500'}`}>
            Yearly
          </span>
          {isYearly && (
            <span className="px-2 py-1 text-xs font-medium bg-primary-500/20 text-primary-300 rounded-lg">
              Save 20%
            </span>
          )}
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-1.5 bg-gradient-to-r from-primary-500 to-primary-600 text-white text-xs font-semibold rounded-full shadow-lg shadow-primary-500/25">
                    Most Popular
                  </div>
                </div>
              )}
              <div
                className={`relative rounded-2xl p-6 sm:p-8 h-full flex flex-col ${
                  plan.popular
                    ? 'glass border-primary-500/30 shadow-xl shadow-primary-500/10'
                    : 'glass-card'
                }`}
              >
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                  <p className="mt-2 text-sm text-slate-400">{plan.description}</p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-white">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-slate-500">/mo</span>
                  </div>
                  {isYearly && (
                    <div className="mt-1 text-sm text-slate-500">
                      Billed annually (${plan.yearlyPrice * 12}/year)
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary-400" />
                      </div>
                      <span className="text-sm text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 px-6 rounded-xl font-semibold text-sm transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white shadow-lg shadow-primary-500/25'
                      : 'glass-card hover:bg-white/5 text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
