'use client'

import Link from 'next/link'
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
  const businessImpacts = [
    { icon: Clock3, text: 'Save 10+ hours per week on manual tasks' },
    { icon: TrendingUp, text: 'Increase team productivity by 40%' },
    { icon: Users, text: '24/7 customer support capability' },
    { icon: Zap, text: 'Faster response times to inquiries' },
    { icon: Sparkles, text: 'Data-driven decision making' },
  ]

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
              <Bot className="w-full h-full text-foreground" />
            </div>
            <div style={{animation: 'slideUp 0.8s ease-out 0.1s both'}}>
              <h1 className="text-5xl sm:text-6xl font-bold mb-4 gradient-text">
                AI & Automation
              </h1>
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                Intelligent automation solutions that streamline your workflows, reduce manual tasks, and leverage AI to boost productivity by 40%+.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="glass px-4 py-2 rounded-full text-sm font-semibold text-primary">
                  3-4 weeks delivery
                </div>
                <div className="glass px-4 py-2 rounded-full text-sm font-semibold text-accent">
                  Full AI Integration
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="px-4 py-16 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center" style={{animation: 'slideUp 0.8s ease-out 0.2s both'}}>Business Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {businessImpacts.map((impact, idx) => {
              const Icon = impact.icon
              return (
                <div
                  key={idx}
                  className="glass-dark rounded-xl p-6 group hover:bg-black/40 transition-all duration-500 hover:scale-105"
                  style={{animation: `slideUp 0.6s ease-out ${0.3 + idx * 0.1}s both`}}
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

        {/* AI Solutions Grid */}
        <section className="px-4 py-16 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 gradient-text" style={{animation: 'slideUp 0.8s ease-out 0.3s both'}}>Available AI Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {AI_SOLUTIONS.map((solution, idx) => {
              const Icon = solution.icon
              return (
                <div
                  key={solution.id}
                  className="glass-dark rounded-xl p-6 group hover:bg-black/40 transition-all duration-500 cursor-pointer overflow-hidden"
                  style={{animation: `slideUp 0.6s ease-out ${0.4 + idx * 0.08}s both`}}
                >
                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent p-2 flex-shrink-0 group-hover:scale-110 transition-transform duration-500 glow">
                      <Icon className="w-full h-full text-foreground" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-semibold text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text mb-1 transition-all">{solution.name}</h3>
                      <p className="text-sm text-muted-foreground group-hover:text-foreground/70 transition-colors">{solution.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Pricing */}
        <section className="px-4 py-16 max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 gradient-text text-center" style={{animation: 'slideUp 0.8s ease-out 0.5s both'}}>AI Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AI_PACKAGES.map((pkg, idx) => (
              <div
                key={idx}
                className={`glass-dark rounded-2xl p-8 relative overflow-hidden group ${pkg.highlighted ? 'ring-2 ring-accent lg:scale-105' : ''} hover:bg-black/40 transition-all duration-500`}
                style={{animation: `slideUp 0.6s ease-out ${0.6 + idx * 0.1}s both`}}
              >
                {pkg.highlighted && (
                  <div className="absolute top-0 right-0 px-4 py-2 bg-gradient-to-r from-primary to-accent rounded-bl-xl text-foreground text-xs font-bold">
                    POPULAR
                  </div>
                )}
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all">{pkg.name}</h3>
                  <p className="text-muted-foreground mb-6">{pkg.description}</p>
                  <div className="text-4xl font-bold gradient-text mb-8">{pkg.price}</div>
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
              <h2 className="text-4xl font-bold mb-4 text-foreground">Ready to Transform?</h2>
              <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let&apos;s discuss how AI automation can save your team time and boost productivity.
              </p>
              <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-foreground font-bold py-6 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/50">
                Schedule Consultation
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
