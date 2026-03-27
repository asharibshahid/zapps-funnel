'use client'

import Link from 'next/link'
import {
  ArrowLeft,
  ArrowRight,
  Globe,
  Search,
  Users,
  TrendingUp,
  Zap,
  Sparkles,
  Check,
  Smartphone,
  Mail,
  BarChart3,
  MessageSquare,
  Lock,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const WEBSITE_FEATURES = [
  { icon: Smartphone, title: 'Mobile Optimized', description: 'Responsive design that works perfectly on all devices.' },
  { icon: Search, title: 'SEO Ready', description: 'Built for search engines with proper structure and optimization.' },
  { icon: MessageSquare, title: 'Lead Capture', description: 'Contact forms, WhatsApp integration, and lead system.' },
  { icon: Mail, title: 'Email Integration', description: 'Automatic email alerts when you receive inquiries.' },
  { icon: BarChart3, title: 'Analytics', description: 'Track visitor behavior and understand your audience.' },
  { icon: Lock, title: 'Secure & Fast', description: 'SSL encrypted, optimized for speed, and auto-backed up.' },
]

const WEBSITE_PACKAGES = [
  {
    id: 'starter',
    title: 'Starter Site',
    price: '$500',
    timeline: '2-3 weeks',
    bestFor: 'Solo entrepreneurs & small service businesses',
    features: ['Up to 5 pages', 'Professional design', 'Mobile responsive', 'Basic SEO setup', 'Contact form', 'Google Analytics', '30 days support'],
    highlighted: false,
  },
  {
    id: 'growth',
    title: 'Growth Site',
    price: '$1,000',
    timeline: '2-3 weeks',
    bestFor: 'Growing businesses with multiple services',
    features: ['Up to 7 pages', 'Custom design', 'Lead capture forms', 'WhatsApp integration', 'Email notifications', 'Advanced SEO', 'Chatbot integration', '30 days support'],
    highlighted: true,
  },
  {
    id: 'premium',
    title: 'Premium Site',
    price: '$2,000',
    timeline: '3-4 weeks',
    bestFor: 'Established businesses needing advanced features',
    features: ['Up to 10 pages', 'Full custom design', 'Advanced lead funnels', 'CRM integration', 'Email marketing setup', 'Advanced analytics', 'Blog functionality', '60 days support'],
    highlighted: false,
  },
]

const BUSINESS_IMPACTS = [
  { icon: TrendingUp, text: 'More inquiries from potential clients' },
  { icon: Users, text: 'Increased trust & credibility' },
  { icon: Globe, text: 'Better visibility in your local market' },
  { icon: Zap, text: 'Faster response to customer leads' },
  { icon: Sparkles, text: 'Strong foundation to scale online' },
  { icon: BarChart3, text: 'Measure your online performance' },
]

const TRANSFORMATION = [
  {
    label: 'Before',
    items: ['No proper online presence', 'Clients cannot find you online', 'No system to capture leads', 'Unprofessional or outdated look', 'Slow / non-mobile-friendly website', 'No clear business information'],
  },
  {
    label: 'After',
    items: ['Professional business website', 'Visible on Google & searchable', 'Automated lead capture (forms + WhatsApp)', 'Clean, modern & trusted brand image', 'Fast, mobile-optimized experience', 'Structured pages with clear messaging'],
  },
]

export default function WebsitesPage() {
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
              <Globe className="w-full h-full text-foreground" />
            </div>
            <div style={{animation: 'slideUp 0.8s ease-out 0.1s both'}}>
              <h1 className="text-5xl sm:text-6xl font-bold mb-4 gradient-text">
                Online Presence System
              </h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                Build a professional website that represents your business and turns visitors into real inquiries.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="glass px-4 py-2 rounded-full text-sm font-semibold text-primary">
                  2-3 weeks delivery
                </div>
                <div className="glass px-4 py-2 rounded-full text-sm font-semibold text-accent">
                  Lead Capture Built-In
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="px-4 py-16 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 gradient-text" style={{animation: 'slideUp 0.8s ease-out 0.2s both'}}>Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {WEBSITE_FEATURES.map((feature, idx) => {
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
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center" style={{animation: 'slideUp 0.8s ease-out 0.5s both'}}>Website Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {WEBSITE_PACKAGES.map((pkg, idx) => (
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
              <h2 className="text-4xl font-bold mb-4 text-foreground">Ready to Build Your Online Presence?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let&apos;s create a professional website that captures leads and grows your business.
              </p>
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-foreground font-bold py-6 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/50">
                Schedule Website Consultation
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
