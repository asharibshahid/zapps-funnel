'use client'

import { useRouter } from 'next/navigation'
import { ArrowRight, Bot, Globe, LayoutDashboard, ShoppingCart } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface SolutionCard {
  id: string
  name: string
  icon: React.ElementType
  short: string
  idealFor: string
  cta: string
  color: string
  bgColor: string
}

const SOLUTIONS: SolutionCard[] = [
  {
    id: 'ai-automation',
    name: 'AI & Automation',
    icon: Bot,
    short: 'Streamline workflows. Automate tasks. Leverage AI.',
    idealFor: 'Businesses looking to reduce manual work and leverage intelligent automation.',
    cta: 'Explore AI Solutions',
    color: 'from-purple-600 to-blue-600',
    bgColor: 'bg-purple-50',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce System',
    icon: ShoppingCart,
    short: 'Sell online. Manage orders. Grow revenue.',
    idealFor: 'Retailers, brands, and businesses ready to sell products or services online.',
    cta: 'View E-commerce Packages',
    color: 'from-orange-600 to-red-600',
    bgColor: 'bg-orange-50',
  },
  {
    id: 'websites',
    name: 'Online Presence',
    icon: Globe,
    short: 'Get found online. Generate leads. Build credibility.',
    idealFor: 'Small businesses, professionals, and brands ready to launch or upgrade their online presence.',
    cta: 'View Website Packages',
    color: 'from-blue-600 to-cyan-600',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'systems',
    name: 'Business Systems & Solutions',
    icon: LayoutDashboard,
    short: 'Organize your team. Automate processes. See what matters.',
    idealFor: 'Growing teams replacing spreadsheets, manual processes, or disconnected tools.',
    cta: 'View Operations Packages',
    color: 'from-green-600 to-emerald-600',
    bgColor: 'bg-green-50',
  },
]

export default function SolutionsPage() {
  const router = useRouter()

  const handleViewSolution = (id: string) => {
    router.push(`/solutions/${id}`)
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="px-4 py-20 text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 text-balance">
          Solutions Built for Every Business Need
        </h1>
        <p className="text-lg text-slate-600 text-balance">
          Choose the right digital solution to transform your business. From AI automation to e-commerce, we&apos;ve got you covered.
        </p>
      </section>

      {/* Solutions Grid */}
      <section className="px-4 py-12 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SOLUTIONS.map((solution) => {
            const Icon = solution.icon
            return (
              <Card 
                key={solution.id} 
                className={`${solution.bgColor} border-0 overflow-hidden hover:shadow-lg transition-all duration-300`}
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${solution.color} p-3 mb-4`}>
                    <Icon className="w-full h-full text-white" />
                  </div>

                  {/* Content */}
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    {solution.name}
                  </h2>
                  <p className="text-lg font-semibold text-slate-700 mb-3">
                    {solution.short}
                  </p>
                  <p className="text-sm text-slate-600 mb-4 flex-grow">
                    {solution.idealFor}
                  </p>

                  {/* Button */}
                  <Button
                    onClick={() => handleViewSolution(solution.id)}
                    className={`w-full bg-gradient-to-r ${solution.color} text-white hover:opacity-90 transition-opacity`}
                  >
                    {solution.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-12">Why Choose Our Solutions?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Implementation',
                description: 'Our team has years of experience delivering successful solutions across all industries.',
              },
              {
                title: 'Custom Tailored',
                description: 'Every solution is customized to fit your specific business needs and goals.',
              },
              {
                title: 'Full Support',
                description: 'From implementation to training, we&apos;re with you every step of the way.',
              },
            ].map((feature, idx) => (
              <div key={idx} className="text-left">
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">Ready to Transform Your Business?</h2>
        <p className="text-lg text-slate-600 mb-8">
          Let&apos;s find the perfect solution for your needs. Schedule a consultation with our team.
        </p>
        <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800">
          Schedule a Consultation
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </section>
    </main>
  )
}
