'use client'

import { useRouter } from 'next/navigation'
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Bot,
  Clock3,
  Cpu,
  FileText,
  Mail,
  MessageSquare,
  Phone,
  Search,
  Settings,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
  Check,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

const AI_SOLUTIONS = [
  { id: 1, name: 'AI Chatbots', description: 'Intelligent customer support available 24/7', icon: MessageSquare },
  { id: 2, name: 'Document Processing', description: 'Automated extraction and analysis of documents', icon: FileText },
  { id: 3, name: 'Data Analysis', description: 'AI-powered insights from your business data', icon: BarChart3 },
  { id: 4, name: 'Email Automation', description: 'Smart categorization and response systems', icon: Mail },
  { id: 5, name: 'Content Generation', description: 'AI-powered copywriting and content creation', icon: Sparkles },
  { id: 6, name: 'Workflow Automation', description: 'Connect tools and automate business processes', icon: Zap },
  { id: 7, name: 'Image Recognition', description: 'Computer vision for visual data analysis', icon: Search },
  { id: 8, name: 'Predictive Analytics', description: 'Forecast trends and customer behavior', icon: TrendingUp },
  { id: 9, name: 'Voice Processing', description: 'Transcription, analysis, and synthesis', icon: Phone },
  { id: 10, name: 'Custom ML Models', description: 'Tailored machine learning for unique needs', icon: Cpu },
  { id: 11, name: 'API Integration', description: 'Seamless connection with AI services', icon: Zap },
  { id: 12, name: 'Process Optimization', description: 'Streamline operations with intelligent systems', icon: Settings },
]

const AI_PACKAGES = [
  {
    name: 'Core',
    description: 'Essential AI automation',
    price: '$1,500',
    features: [
      'One AI integration (ChatGPT/Claude)',
      'Basic workflow automation',
      'Setup & configuration',
      '30 days support',
    ],
    highlighted: false,
  },
  {
    name: 'Advanced',
    description: 'Multi-tool automation',
    price: '$3,500',
    features: [
      'Multiple AI integrations',
      'Advanced workflow automation',
      'Custom prompts & templates',
      'Analytics dashboard',
      '90 days support',
      'Training included',
    ],
    highlighted: true,
  },
  {
    name: 'Diamond',
    description: 'Complete AI transformation',
    price: '$7,500',
    features: [
      'Unlimited AI integrations',
      'Custom AI model training',
      'Complex multi-step workflows',
      'Custom development',
      '6 months priority support',
      'Team training',
      'Ongoing optimization',
    ],
    highlighted: false,
  },
  {
    name: 'Custom',
    description: 'Enterprise solutions',
    price: 'Contact us',
    features: [
      'Fully custom implementation',
      'Dedicated team',
      'Custom integrations',
      '12 months support',
      'On-demand scaling',
      'Strategic consulting',
    ],
    highlighted: false,
  },
]

export default function AIAutomationPage() {
  const router = useRouter()

  const businessImpacts = [
    { icon: Clock3, text: 'Save 10+ hours per week on manual tasks' },
    { icon: TrendingUp, text: 'Increase team productivity by 40%' },
    { icon: Users, text: '24/7 customer support capability' },
    { icon: Zap, text: 'Faster response times to inquiries' },
    { icon: Sparkles, text: 'Data-driven decision making' },
  ]

  const transformations = [
    {
      title: 'Before',
      items: [
        'Manual, repetitive tasks eating up time',
        'Slow response to customer inquiries',
        'Data scattered across multiple tools',
        'Human errors in routine processes',
        'Limited capacity to scale operations',
        'No insights from business data',
      ],
    },
    {
      title: 'After',
      items: [
        'Automated workflows running 24/7',
        'Instant AI-powered customer responses',
        'Centralized, automated data processing',
        'Error-free automated processes',
        'Scalable infrastructure ready to grow',
        'AI-driven insights & recommendations',
      ],
    },
  ]

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
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-blue-600 p-4 flex-shrink-0">
            <Bot className="w-full h-full text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              AI & Automation System
            </h1>
            <p className="text-xl text-slate-600 mb-6 text-balance">
              Intelligent automation solutions that streamline your workflows, reduce manual tasks, and leverage AI to boost productivity.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 rounded-full bg-purple-100 text-purple-700 font-semibold">
                3-4 weeks delivery
              </div>
              <div className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
                Full AI Integration
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="px-4 py-12 bg-slate-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Business Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessImpacts.map((impact, idx) => {
              const Icon = impact.icon
              return (
                <Card key={idx} className="p-6 border-0 bg-white">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 p-3 flex-shrink-0">
                      <Icon className="w-full h-full text-white" />
                    </div>
                    <p className="text-slate-700 font-semibold">{impact.text}</p>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* AI Solutions Grid */}
      <section className="px-4 py-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">Available AI Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {AI_SOLUTIONS.map((solution) => {
            const Icon = solution.icon
            return (
              <Card key={solution.id} className="p-6 border-slate-200 hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 p-2 flex-shrink-0">
                    <Icon className="w-full h-full text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900">{solution.name}</h3>
                </div>
                <p className="text-sm text-slate-600">{solution.description}</p>
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
            {transformations.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">{section.title}</h3>
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
        <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">AI Packages</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {AI_PACKAGES.map((pkg, idx) => (
            <Card
              key={idx}
              className={`p-6 ${
                pkg.highlighted
                  ? 'border-2 border-purple-600 bg-purple-50'
                  : 'border-slate-200'
              }`}
            >
              {pkg.highlighted && (
                <div className="mb-3 inline-block px-3 py-1 rounded-full bg-purple-200 text-purple-700 text-xs font-semibold">
                  Most Popular
                </div>
              )}
              <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
              <p className="text-sm text-slate-600 mb-4">{pkg.description}</p>
              <div className="text-3xl font-bold text-slate-900 mb-6">{pkg.price}</div>
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
                    ? 'bg-purple-600 text-white hover:bg-purple-700'
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
      <section className="px-4 py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Workflows?</h2>
          <p className="text-lg mb-8 text-purple-100">
            Let&apos;s discuss how AI automation can save your team time and boost productivity.
          </p>
          <Button size="lg" variant="secondary">
            Schedule a Consultation
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>
    </main>
  )
}
