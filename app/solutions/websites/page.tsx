'use client'

import { useRouter } from 'next/navigation'
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
import { Card } from '@/components/ui/card'

const WEBSITE_FEATURES = [
  {
    icon: Smartphone,
    title: 'Mobile Optimized',
    description: 'Responsive design that works perfectly on all devices and screen sizes.'
  },
  {
    icon: Search,
    title: 'SEO Ready',
    description: 'Built for search engines with proper structure and optimization from day one.'
  },
  {
    icon: MessageSquare,
    title: 'Lead Capture',
    description: 'Contact forms, WhatsApp integration, and lead notification system built-in.'
  },
  {
    icon: Mail,
    title: 'Email Integration',
    description: 'Automatic email alerts when you receive new inquiries and messages.'
  },
  {
    icon: BarChart3,
    title: 'Analytics',
    description: 'Track visitor behavior, conversions, and understand your audience better.'
  },
  {
    icon: Lock,
    title: 'Secure & Fast',
    description: 'SSL encrypted, optimized for speed, and fully backed up automatically.'
  },
]

const WEBSITE_PACKAGES = [
  {
    id: 'starter',
    title: 'Starter Site',
    badge: 'Recommended',
    price: '$500',
    timeline: '2-3 weeks',
    bestFor: 'Solo entrepreneurs & small service businesses',
    features: [
      'Up to 5 pages',
      'Professional design',
      'Mobile responsive',
      'Basic SEO setup',
      'Contact form',
      'Google Analytics',
      'Mobile-optimized',
      '30 days support',
    ],
    highlighted: false,
  },
  {
    id: 'growth',
    title: 'Growth Site',
    badge: 'Most Popular',
    price: '$1,000',
    timeline: '2-3 weeks',
    bestFor: 'Growing businesses with multiple services',
    features: [
      'Up to 7 pages',
      'Custom design',
      'Lead capture forms',
      'WhatsApp integration',
      'Email notifications',
      'Advanced SEO',
      'Chatbot integration',
      'Google Business setup',
      '30 days support',
    ],
    highlighted: true,
  },
  {
    id: 'premium',
    title: 'Premium Site',
    badge: 'Advanced',
    price: '$2,000',
    timeline: '3-4 weeks',
    bestFor: 'Established businesses needing advanced features',
    features: [
      'Up to 10 pages',
      'Full custom design',
      'Advanced lead funnels',
      'CRM integration',
      'Email marketing setup',
      'Advanced analytics',
      'Blog functionality',
      'Team collaboration',
      '60 days support',
    ],
    highlighted: false,
  },
]

const TRANSFORMATION = [
  {
    label: 'Before',
    items: [
      'No proper online presence',
      'Clients cannot find you online',
      'No system to capture leads',
      'Unprofessional or outdated look',
      'Slow / non-mobile-friendly website',
      'No clear business information',
    ],
  },
  {
    label: 'After',
    items: [
      'Professional business website',
      'Visible on Google & searchable',
      'Automated lead capture (forms + WhatsApp)',
      'Clean, modern & trusted brand image',
      'Fast, mobile-optimized experience',
      'Structured pages with clear messaging',
    ],
  },
]

export default function WebsitesPage() {
  const router = useRouter()

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Back Button */}
      <div className="px-4 py-4 max-w-6xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => router.back()}
          className="text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Solutions
        </Button>
      </div>

      {/* Header */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <div className="flex items-start gap-6 mb-8">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 p-4 flex-shrink-0">
            <Globe className="w-full h-full text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Online Presence System
            </h1>
            <p className="text-xl text-slate-600 mb-6 text-balance">
              Build a professional website that represents your business and turns visitors into real inquiries.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
                2-3 weeks delivery
              </div>
              <div className="px-4 py-2 rounded-full bg-cyan-100 text-cyan-700 font-semibold">
                Lead Capture Built-In
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="px-4 py-16 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WEBSITE_FEATURES.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <Card key={idx} className="p-6 border-0 bg-white">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 p-3 mb-4">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Business Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: TrendingUp, text: 'More inquiries from potential clients' },
            { icon: Users, text: 'Increased trust & credibility' },
            { icon: Globe, text: 'Better visibility in your local market' },
            { icon: Zap, text: 'Faster response to customer leads' },
            { icon: Sparkles, text: 'Strong foundation to scale online' },
            { icon: BarChart3, text: 'Measure your online performance' },
          ].map((impact, idx) => {
            const Icon = impact.icon
            return (
              <Card key={idx} className="p-6 border-slate-200">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 p-3 flex-shrink-0">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <p className="text-slate-700 font-semibold">{impact.text}</p>
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Transformation */}
      <section className="px-4 py-16 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Your Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TRANSFORMATION.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{section.label}</h3>
                <ul className="space-y-3">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex gap-3">
                      {idx === 0 ? (
                        <span className="text-red-500 flex-shrink-0">✕</span>
                      ) : (
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      )}
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Website Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {WEBSITE_PACKAGES.map((pkg) => (
            <Card
              key={pkg.id}
              className={`p-6 ${
                pkg.highlighted
                  ? 'border-2 border-blue-600 bg-blue-50'
                  : 'border-slate-200'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-900">{pkg.title}</h3>
                <span className="px-2 py-1 rounded-full bg-blue-200 text-blue-700 text-xs font-semibold">
                  {pkg.badge}
                </span>
              </div>
              <p className="text-sm text-slate-600 mb-4">{pkg.bestFor}</p>
              <div className="mb-6">
                <div className="text-3xl font-bold text-slate-900">{pkg.price}</div>
                <div className="text-sm text-slate-600">{pkg.timeline}</div>
              </div>
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex gap-2 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full ${
                  pkg.highlighted
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-slate-200 text-slate-900 hover:bg-slate-300'
                }`}
              >
                Get Started
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Online Presence?</h2>
          <p className="text-lg mb-8 text-blue-100">
            Let&apos;s create a professional website that captures leads and grows your business.
          </p>
          <Button size="lg" variant="secondary">
            Schedule a Website Consultation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </main>
  )
}
