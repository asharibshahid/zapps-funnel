'use client'

import { useRouter } from 'next/navigation'
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
import { Card } from '@/components/ui/card'

const SYSTEM_FEATURES = [
  {
    icon: Database,
    title: 'Centralized Database',
    description: 'All your business data in one secure, organized location instead of scattered spreadsheets.'
  },
  {
    icon: UserCheck,
    title: 'Role-Based Access',
    description: 'Control who can see and edit what data with granular permission management.'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Dashboards',
    description: 'Visual reports and analytics that update automatically as your data changes.'
  },
  {
    icon: Zap,
    title: 'Automated Workflows',
    description: 'Set up approval flows, notifications, and automations that eliminate manual work.'
  },
  {
    icon: GitBranch,
    title: 'API Integration',
    description: 'Connect with your existing tools and platforms seamlessly through APIs.'
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'Bank-level encryption, regular backups, and compliance with data regulations.'
  },
]

const SYSTEM_PACKAGES = [
  {
    id: 'core',
    title: 'Core System',
    badge: 'Recommended',
    price: '$2,000',
    timeline: '3-4 weeks',
    bestFor: 'Growing teams needing basic operational efficiency',
    features: [
      'Up to 3 data modules',
      'Basic dashboard & reports',
      'CRUD operations',
      'User management',
      'Mobile responsive',
      'Email notifications',
      'Data export',
      'Basic API',
      '60 days support',
    ],
    highlighted: false,
  },
  {
    id: 'growth',
    title: 'Growth System',
    badge: 'Most Popular',
    price: '$3,500',
    timeline: '4-5 weeks',
    bestFor: 'Scaling businesses with complex workflows',
    features: [
      'Up to 6 data modules',
      'Advanced dashboards & reports',
      'Workflow automation',
      'Role-based access control',
      'Custom fields & forms',
      'Approval workflows',
      'API integrations',
      'Team collaboration',
      '90 days support',
    ],
    highlighted: true,
  },
  {
    id: 'enterprise',
    title: 'Enterprise System',
    badge: 'Advanced',
    price: '$6,000+',
    timeline: '6-8 weeks',
    bestFor: 'Large organizations with complex needs',
    features: [
      'Unlimited data modules',
      'Full custom development',
      'Advanced analytics & BI',
      'Multi-user workflows',
      'Custom integrations',
      'SSO & security features',
      'Dedicated support',
      'Team training included',
      '6 months support',
    ],
    highlighted: false,
  },
]

const TRANSFORMATION = [
  {
    label: 'Before',
    items: [
      'Data scattered in multiple spreadsheets',
      'Manual data entry & duplication',
      'No visibility into team activities',
      'Version control nightmares',
      'Limited access control',
      'Time wasted on admin tasks',
    ],
  },
  {
    label: 'After',
    items: [
      'Centralized business database',
      'Automated data flows & updates',
      'Real-time dashboards & reports',
      'Single source of truth',
      'Role-based access & security',
      'Streamlined operations',
    ],
  },
]

export default function SystemsPage() {
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
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-600 to-emerald-600 p-4 flex-shrink-0">
            <LayoutDashboard className="w-full h-full text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Business Systems & Solutions
            </h1>
            <p className="text-xl text-slate-600 mb-6 text-balance">
              Custom internal systems that replace spreadsheets and give your team visibility, structure, and control.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-full bg-green-100 text-green-700 font-semibold">
                4-6 weeks delivery
              </div>
              <div className="px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 font-semibold">
                Enterprise Security
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
            {SYSTEM_FEATURES.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <Card key={idx} className="p-6 border-0 bg-white">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 p-3 mb-4">
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
            { icon: LayoutDashboard, text: 'Single source of truth for operations' },
            { icon: Users, text: 'Improved team collaboration' },
            { icon: TrendingUp, text: 'Real-time business insights' },
            { icon: Clock3, text: 'Reduced admin time by 50%' },
            { icon: Shield, text: 'Better data security & compliance' },
            { icon: BarChart3, text: 'Data-driven decision making' },
          ].map((impact, idx) => {
            const Icon = impact.icon
            return (
              <Card key={idx} className="p-6 border-slate-200">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 p-3 flex-shrink-0">
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
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">System Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SYSTEM_PACKAGES.map((pkg) => (
            <Card
              key={pkg.id}
              className={`p-6 ${
                pkg.highlighted
                  ? 'border-2 border-green-600 bg-green-50'
                  : 'border-slate-200'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-900">{pkg.title}</h3>
                <span className="px-2 py-1 rounded-full bg-green-200 text-green-700 text-xs font-semibold">
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
                    ? 'bg-green-600 text-white hover:bg-green-700'
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
      <section className="px-4 py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Operations?</h2>
          <p className="text-lg mb-8 text-green-100">
            Let&apos;s talk about how a custom system can transform your business workflows and boost productivity.
          </p>
          <Button size="lg" variant="secondary">
            Schedule a Systems Consultation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </main>
  )
}
