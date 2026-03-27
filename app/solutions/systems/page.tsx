'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  LayoutDashboard,
  Users,
  TrendingUp,
  Clock3,
  Shield,
  Check,
  Database,
  Zap,
  BarChart3,
  Lock,
  UserCheck,
  GitBranch,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const SYSTEM_FEATURES = [
  { icon: Database, title: 'Centralized Database', description: 'All your business data in one secure location.' },
  { icon: UserCheck, title: 'Role-Based Access', description: 'Control who can see and edit what data.' },
  { icon: BarChart3, title: 'Real-Time Dashboards', description: 'Visual reports that update automatically.' },
  { icon: Zap, title: 'Automated Workflows', description: 'Set up approval flows and automations.' },
  { icon: GitBranch, title: 'API Integration', description: 'Connect with your existing tools seamlessly.' },
  { icon: Lock, title: 'Enterprise Security', description: 'Bank-level encryption and regular backups.' },
]

const SYSTEM_PACKAGES = [
  {
    id: 'core',
    title: 'Core System',
    price: '$2,000',
    timeline: '3-4 weeks',
    bestFor: 'Growing teams needing basic operational efficiency',
    features: ['Up to 3 data modules', 'Basic dashboard & reports', 'CRUD operations', 'User management', 'Mobile responsive', 'Email notifications', 'Data export', 'Basic API', '60 days support'],
    highlighted: false,
  },
  {
    id: 'growth',
    title: 'Growth System',
    price: '$3,500',
    timeline: '4-5 weeks',
    bestFor: 'Scaling businesses with complex workflows',
    features: ['Up to 6 data modules', 'Advanced dashboards & reports', 'Workflow automation', 'Role-based access control', 'Custom fields & forms', 'Approval workflows', 'API integrations', 'Team collaboration', '90 days support'],
    highlighted: true,
  },
  {
    id: 'enterprise',
    title: 'Enterprise System',
    price: '$6,000+',
    timeline: '6-8 weeks',
    bestFor: 'Large organizations with complex needs',
    features: ['Unlimited data modules', 'Full custom development', 'Advanced analytics & BI', 'Multi-user workflows', 'Custom integrations', 'SSO & security features', 'Dedicated support', 'Team training included', '6 months support'],
    highlighted: false,
  },
]

const BUSINESS_IMPACTS = [
  { icon: LayoutDashboard, text: 'Single source of truth for operations' },
  { icon: Users, text: 'Improved team collaboration' },
  { icon: TrendingUp, text: 'Real-time business insights' },
  { icon: Clock3, text: 'Reduced admin time by 50%' },
  { icon: Shield, text: 'Better data security & compliance' },
  { icon: BarChart3, text: 'Data-driven decision making' },
]

const TRANSFORMATION = [
  {
    label: 'Before',
    items: ['Data scattered in multiple spreadsheets', 'Manual data entry & duplication', 'No visibility into team activities', 'Version control nightmares', 'Limited access control', 'Time wasted on admin tasks'],
  },
  {
    label: 'After',
    items: ['Centralized business database', 'Automated data flows & updates', 'Real-time dashboards & reports', 'Single source of truth', 'Role-based access & security', 'Streamlined operations'],
  },
]

export default function SystemsPage() {
  return (
    <main className="relative min-h-screen bg-background overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 float"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 float-delay-1"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-secondary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-50 float-delay-2"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Back Button */}
        <div className="px-4 py-4 max-w-7xl mx-auto">
          <Link href="/solutions">
            <Button variant="ghost" className="text-foreground hover:bg-foreground/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Solutions
            </Button>
          </Link>
        </div>

        {/* Header */}
        <section className="px-4 pt-8 pb-16 max-w-7xl mx-auto">
          <div className="flex items-start gap-8 mb-8">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent p-5 flex-shrink-0 glow hover:scale-110 transition-transform duration-500" style={{animation: 'slideUp 0.8s ease-out'}}>
              <LayoutDashboard className="w-full h-full text-foreground" />
            </div>
            <div style={{animation: 'slideUp 0.8s ease-out 0.1s both'}}>
              <h1 className="text-5xl sm:text-6xl font-bold mb-4 gradient-text">
                Business Systems & Solutions
              </h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                Custom internal systems that replace spreadsheets and give your team visibility, structure, and control.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="glass px-4 py-2 rounded-full text-sm font-semibold text-primary">
                  4-6 weeks delivery
                </div>
                <div className="glass px-4 py-2 rounded-full text-sm font-semibold text-accent">
                  Enterprise Security
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="px-4 py-16 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 gradient-text" style={{animation: 'slideUp 0.8s ease-out 0.2s both'}}>Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SYSTEM_FEATURES.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <div
                  key={idx}
                  className="glass-dark rounded-xl p-6 group hover:bg-black/40 transition-all duration-500 cursor-pointer overflow-hidden"
                  style={{animation: `slideUp 0.6s ease-out ${0.3 + idx * 0.08}s both`}}
                >
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent p-3 mb-4 group-hover:scale-110 transition-transform duration-500 glow">
                      <Icon className="w-full h-full text-foreground" />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:gradient-text transition-all">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">{feature.description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Business Impact */}
        <section className="px-4 py-16 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center" style={{animation: 'slideUp 0.8s ease-out 0.3s both'}}>Business Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BUSINESS_IMPACTS.map((impact, idx) => {
              const Icon = impact.icon
              return (
                <div
                  key={idx}
                  className="glass-dark rounded-xl p-6 group hover:bg-black/40 transition-all duration-500 hover:scale-105"
                  style={{animation: `slideUp 0.6s ease-out ${0.4 + idx * 0.1}s both`}}
                >
                  <div className="flex flex-col items-center gap-3 text-center">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-accent p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-500 glow">
                      <Icon className="w-full h-full text-foreground" />
                    </div>
                    <p className="text-sm font-semibold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all">{impact.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Transformation */}
        <section className="px-4 py-16 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center" style={{animation: 'slideUp 0.8s ease-out 0.4s both'}}>Your Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRANSFORMATION.map((section, idx) => (
              <div key={idx} style={{animation: `slideUp 0.8s ease-out ${0.5 + idx * 0.1}s both`}}>
                <h3 className="text-2xl font-bold gradient-text mb-6">{section.label}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-3 glass-dark rounded-lg p-3">
                      {idx === 0 ? (
                        <span className="text-red-500 flex-shrink-0 text-lg">✕</span>
                      ) : (
                        <Check className="w-5 h-5 text-accent flex-shrink-0" />
                      )}
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="px-4 py-16 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center" style={{animation: 'slideUp 0.8s ease-out 0.5s both'}}>System Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SYSTEM_PACKAGES.map((pkg, idx) => (
              <div
                key={pkg.id}
                className={`glass-dark rounded-2xl p-8 relative overflow-hidden group ${pkg.highlighted ? 'ring-2 ring-accent md:scale-105' : ''} hover:bg-black/40 transition-all duration-500`}
                style={{animation: `slideUp 0.6s ease-out ${0.6 + idx * 0.1}s both`}}
              >
                {pkg.highlighted && (
                  <div className="absolute top-0 right-0 px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-bl-xl text-foreground text-xs font-bold">
                    POPULAR
                  </div>
                )}
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all">{pkg.title}</h3>
                  <p className="text-muted-foreground mb-6 text-sm">{pkg.bestFor}</p>
                  <div className="mb-6">
                    <div className="text-4xl font-bold gradient-text">{pkg.price}</div>
                    <div className="text-sm text-muted-foreground">{pkg.timeline}</div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, fIdx) => (
                      <li key={fIdx} className="flex gap-3 text-sm text-foreground/80 group-hover:text-foreground transition-colors">
                        <Check className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className={`w-full ${pkg.highlighted ? 'bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80' : 'glass hover:bg-black/50'} font-bold py-3 transition-all duration-300 group-hover:shadow-lg`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="max-w-4xl mx-auto mb-24 px-4" style={{animation: 'slideUp 0.8s ease-out 1s both'}}>
          <div className="glass-dark rounded-3xl p-12 text-center relative overflow-hidden group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-4 text-foreground">Ready to Streamline Your Operations?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let&apos;s talk about how a custom system can transform your business workflows and boost productivity.
              </p>
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-foreground font-bold py-6 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/50">
                Schedule Systems Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  )
}
