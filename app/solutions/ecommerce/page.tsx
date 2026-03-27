'use client'

import Link from 'next/link'
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

const BUSINESS_IMPACTS = [
  { icon: ShoppingCart, text: 'Start selling online immediately' },
  { icon: CreditCard, text: 'Secure payment processing' },
  { icon: TrendingUp, text: 'Increase revenue with online sales' },
  { icon: Globe, text: 'Reach customers worldwide' },
  { icon: Zap, text: 'Automated order processing' },
  { icon: BarChart3, text: 'Track sales and customer metrics' },
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
              <ShoppingCart className="w-full h-full text-foreground" />
            </div>
            <div style={{animation: 'slideUp 0.8s ease-out 0.1s both'}}>
              <h1 className="text-5xl sm:text-6xl font-bold mb-4 gradient-text">
                E-Commerce System
              </h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                Complete online store setup with product management, secure payments, and customer experience optimization.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="glass px-4 py-2 rounded-full text-sm font-semibold text-primary">
                  3-4 weeks delivery
                </div>
                <div className="glass px-4 py-2 rounded-full text-sm font-semibold text-accent">
                  Secure Payment Processing
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="px-4 py-16 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 gradient-text" style={{animation: 'slideUp 0.8s ease-out 0.2s both'}}>Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {ECOMMERCE_FEATURES.map((feature, idx) => {
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
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center" style={{animation: 'slideUp 0.8s ease-out 0.5s both'}}>E-Commerce Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ECOMMERCE_PACKAGES.map((pkg, idx) => (
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
              <h2 className="text-4xl font-bold mb-4 text-foreground">Ready to Start Selling Online?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Our e-commerce experts are ready to help you build and launch your online store.
              </p>
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-foreground font-bold py-6 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/50">
                Schedule Store Consultation
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
