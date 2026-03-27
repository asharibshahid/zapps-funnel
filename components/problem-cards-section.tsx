'use client'

import Link from 'next/link'
import { Target, LayoutDashboard, Users, Calendar, Settings, MonitorSmartphone } from 'lucide-react'
import { ArrowRight } from 'lucide-react'

const PROBLEM_CARDS = [
  {
    problem: 'Need more leads from your website?',
    description: 'Turn your website into a lead generation machine with conversion-focused design.',
    solution: 'websites',
    solutionLabel: 'AI & Automation',
    icon: Target,
  },
  {
    problem: 'Need an internal system instead of spreadsheets?',
    description: 'Replace messy spreadsheets with a custom system your team will actually use.',
    solution: 'systems',
    solutionLabel: 'Business Systems',
    icon: LayoutDashboard,
  },
  {
    problem: 'Need a customer portal or dashboard?',
    description: 'Give your customers a professional self-service experience.',
    solution: 'ai-automation',
    solutionLabel: 'AI & Automation',
    icon: Users,
  },
  {
    problem: 'Need booking or order management?',
    description: 'Automate appointments, orders, and customer flow.',
    solution: 'websites',
    solutionLabel: 'Online Presence',
    icon: Calendar,
  },
  {
    problem: 'Need automation between sales and operations?',
    description: 'Connect your tools and eliminate manual data entry.',
    solution: 'ai-automation',
    solutionLabel: 'AI & Automation',
    icon: Settings,
  },
  {
    problem: 'Need a custom staff or customer app?',
    description: 'Build exactly what your business needs, no compromises.',
    solution: 'systems',
    solutionLabel: 'Business Systems',
    icon: MonitorSmartphone,
  },
]

export function ProblemCardsSection() {
  return (
    <section className="py-16 bg-gray-50 border-t border-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Problem Can We Solve?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find the right solution for your business challenge.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROBLEM_CARDS.map((card) => {
            const Icon = card.icon
            const solutionPath = `/solutions/${card.solution}`
            
            return (
              <div
                key={card.problem}
                className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600 flex-shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {card.problem}
                </h3>
                <p className="text-sm text-gray-600 mb-6">
                  {card.description}
                </p>

                <Link href={solutionPath}>
                  <button className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-semibold transition-colors">
                    View solutions <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
