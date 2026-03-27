'use client'

import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  ShoppingCart,
  CreditCard,
  TrendingUp,
  Globe,
  Zap,
  Check,
  Package,
  Truck,
  BarChart3,
  Users,
  Clock3,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

const ECOMMERCE_FEATURES = [
  {
    icon: ShoppingCart,
    title: 'Product Management',
    description: 'Easy-to-use product catalog with unlimited items, variants, and inventory tracking.'
  },
  {
    icon: CreditCard,
    title: 'Secure Payments',
    description: 'Multiple payment gateways including Stripe, PayPal, and local payment options.'
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'Automated shipping zones, rates calculation, and real-time tracking integration.'
  },
  {
    icon: BarChart3,
    title: 'Advanced Analytics',
    description: 'Detailed sales reports, conversion tracking, and customer behavior insights.'
  },
  {
    icon: Users,
    title: 'Customer Management',
    description: 'Build customer profiles, loyalty programs, and personalized marketing campaigns.'
  },
  {
    icon: Zap,
    title: 'Marketing Automation',
    description: 'Abandoned cart recovery, email campaigns, and promotional workflows.'
  },
]

const ECOMMERCE_PACKAGES = [
  {
    id: 'starter',
    title: 'Starter Store',
    badge: 'Recommended',
    price: '$800',
    timeline: '2-3 weeks',
    bestFor: 'Small businesses launching their first online store',
    features: [
      'Up to 50 products setup',
      'Shopify or WooCommerce',
      'Basic theme customization',
      'Payment gateway setup',
      'Mobile-responsive design',
      'Basic SEO setup',
    ],
    highlighted: false,
  },
  {
    id: 'growth',
    title: 'Growth Store',
    badge: 'Most Selected',
    price: '$1,500',
    timeline: '3-4 weeks',
    bestFor: 'Established businesses scaling their online sales',
    features: [
      'Up to 200 products setup',
      'Custom storefront design',
      'Advanced payment options',
      'Inventory management',
      'Abandoned cart recovery',
      'Analytics & reporting',
    ],
    highlighted: true,
  },
  {
    id: 'premium',
    title: 'Premium Store',
    badge: 'Advanced',
    price: '$3,000',
    timeline: '4-6 weeks',
    bestFor: 'Large retailers with complex needs',
    features: [
      'Unlimited products',
      'Custom design & branding',
      'Multi-currency & language support',
      'Advanced inventory management',
      'Customer loyalty programs',
      '24/7 support included',
    ],
    highlighted: false,
  },
]

const TRANSFORMATION = [
  {
    label: 'Before',
    items: [
      'No online sales channel',
      'Manual order processing',
      'Limited customer reach',
      'No inventory tracking',
      'Missed sales opportunities',
      'No customer data insights',
    ],
  },
  {
    label: 'After',
    items: [
      'Professional online store live',
      'Automated order & fulfillment flow',
      'Global customer reach',
      'Real-time inventory management',
      'Abandoned cart recovery',
      'Customer purchase analytics',
    ],
  },
]

export default function EcommercePage() {
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
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-600 to-red-600 p-4 flex-shrink-0">
            <ShoppingCart className="w-full h-full text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              E-commerce System
            </h1>
            <p className="text-xl text-slate-600 mb-6 text-balance">
              Complete online store setup with product management, secure payments, and customer experience optimization.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-full bg-orange-100 text-orange-700 font-semibold">
                3-4 weeks delivery
              </div>
              <div className="px-4 py-2 rounded-full bg-red-100 text-red-700 font-semibold">
                Secure Payment Processing
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
            {ECOMMERCE_FEATURES.map((feature, idx) => {
              const Icon = feature.icon
              return (
                <Card key={idx} className="p-6 border-0 bg-white">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-600 to-red-600 p-3 mb-4">
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
            { icon: ShoppingCart, text: 'Start selling online immediately' },
            { icon: CreditCard, text: 'Secure payment processing' },
            { icon: TrendingUp, text: 'Increase revenue with online sales' },
            { icon: Globe, text: 'Reach customers worldwide' },
            { icon: Zap, text: 'Automated order processing' },
            { icon: BarChart3, text: 'Track sales and customer metrics' },
          ].map((impact, idx) => {
            const Icon = impact.icon
            return (
              <Card key={idx} className="p-6 border-slate-200">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-600 to-red-600 p-3 flex-shrink-0">
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
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">E-Commerce Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ECOMMERCE_PACKAGES.map((pkg) => (
            <Card
              key={pkg.id}
              className={`p-6 ${
                pkg.highlighted
                  ? 'border-2 border-orange-600 bg-orange-50'
                  : 'border-slate-200'
              }`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold text-slate-900">{pkg.title}</h3>
                <span className="px-2 py-1 rounded-full bg-orange-200 text-orange-700 text-xs font-semibold">
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
                    ? 'bg-orange-600 text-white hover:bg-orange-700'
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
      <section className="px-4 py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Selling Online?</h2>
          <p className="text-lg mb-8 text-orange-100">
            Our e-commerce experts are ready to help you build and launch your online store.
          </p>
          <Button size="lg" variant="secondary">
            Schedule a Store Consultation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </main>
  )
}
