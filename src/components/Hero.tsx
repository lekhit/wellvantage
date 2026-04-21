import { motion } from 'framer-motion';
import { ArrowRight, Play, Apple, Smartphone } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-surface-950">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-radial opacity-60" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial-cyan opacity-40" />
        <div className="absolute inset-0 grid-pattern opacity-50" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float-delayed" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
              <span className="text-sm font-medium text-primary-300">
                Trusted by 500+ fitness centers worldwide
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight"
            >
              Power Your Gym with{' '}
              <span className="text-gradient">AI-Driven</span>{' '}
              Member Engagement
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              Automate operations, boost retention, and drive revenue with cutting-edge 
              AI-powered tools designed specifically for modern fitness businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#pricing"
                className="group px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 text-white font-semibold rounded-2xl shadow-xl shadow-primary-500/25 hover:shadow-primary-500/40 transition-all duration-300 flex items-center gap-2"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <button className="group px-8 py-4 glass-card hover:bg-white/5 text-white font-semibold rounded-2xl transition-all duration-300 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <Play className="w-4 h-4 fill-white" />
                </div>
                Watch Demo
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-10 flex items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card hover:bg-white/5 transition-colors"
              >
                <Apple className="w-5 h-5 text-white" />
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 leading-none">Download on the</div>
                  <div className="text-sm font-semibold text-white leading-tight">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl glass-card hover:bg-white/5 transition-colors"
              >
                <Smartphone className="w-5 h-5 text-white" />
                <div className="text-left">
                  <div className="text-[10px] text-slate-400 leading-none">Get it on</div>
                  <div className="text-sm font-semibold text-white leading-tight">Google Play</div>
                </div>
              </a>
            </motion.div>
          </div>

          {/* Right content - Dashboard preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow effect behind */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-3xl blur-2xl" />
              
              {/* Main dashboard card */}
              <div className="relative glass rounded-3xl p-6 shadow-2xl shadow-black/40">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary-400 to-accent-500 flex items-center justify-center">
                      <span className="text-white font-bold text-sm">W</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white">WellVantage Dashboard</div>
                      <div className="text-xs text-slate-400">Live Analytics</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs text-emerald-400 font-medium">Online</span>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[
                    { label: 'Active Members', value: '2,847', change: '+12%', positive: true },
                    { label: 'Monthly Revenue', value: '$48.2K', change: '+8.4%', positive: true },
                    { label: 'Retention Rate', value: '94.2%', change: '+3.1%', positive: true },
                  ].map((stat) => (
                    <div key={stat.label} className="glass-card rounded-2xl p-4">
                      <div className="text-xs text-slate-400 mb-1">{stat.label}</div>
                      <div className="text-lg font-bold text-white">{stat.value}</div>
                      <div className={`text-xs font-medium ${stat.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                        {stat.change}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Chart placeholder */}
                <div className="glass-card rounded-2xl p-4 mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold text-white">Member Growth</div>
                    <div className="flex gap-2">
                      {['7D', '30D', '90D'].map((period) => (
                        <button
                          key={period}
                          className={`px-2 py-1 text-xs rounded-lg transition-colors ${
                            period === '30D'
                              ? 'bg-primary-500/20 text-primary-300'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {period}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-end gap-2 h-28">
                    {[40, 55, 45, 70, 60, 85, 75, 90, 80, 95, 88, 100].map((height, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-lg bg-gradient-to-t from-primary-500/40 to-primary-400/60 hover:from-primary-400/60 hover:to-primary-300/80 transition-colors"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Recent activity */}
                <div className="glass-card rounded-2xl p-4">
                  <div className="text-sm font-semibold text-white mb-3">Recent Check-ins</div>
                  <div className="space-y-3">
                    {[
                      { name: 'Sarah Mitchell', time: '2 min ago', avatar: 'SM' },
                      { name: 'James Cooper', time: '5 min ago', avatar: 'JC' },
                      { name: 'Emma Wilson', time: '8 min ago', avatar: 'EW' },
                    ].map((user) => (
                      <div key={user.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-500/30 to-accent-500/30 flex items-center justify-center text-xs font-medium text-primary-300">
                            {user.avatar}
                          </div>
                          <span className="text-sm text-slate-300">{user.name}</span>
                        </div>
                        <span className="text-xs text-slate-500">{user.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
