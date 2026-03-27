'use client'

import Link from 'next/link'
import { ArrowRight, Zap, Globe, Package, BarChart3 } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SolutionsPage() {
  const solutions = [
    {
      id: 1,
      title: 'AI & Automation',
      description: 'Intelligent systems powered by artificial intelligence to automate your workflows',
      icon: Zap,
      href: '/solutions/ai-automation',
      gradient: 'from-primary to-accent',
      stats: '12 Solutions'
    },
    {
      id: 2,
      title: 'E-Commerce',
      description: 'Complete online selling solutions with inventory, payments, and analytics',
      icon: Package,
      href: '/solutions/ecommerce',
      gradient: 'from-accent via-primary to-secondary',
      stats: '6 Features'
    },
    {
      id: 3,
      title: 'Online Presence',
      description: 'Professional websites and digital presence to showcase your business',
      icon: Globe,
      href: '/solutions/websites',
      gradient: 'from-secondary to-primary',
      stats: '6 Packages'
    },
    {
      id: 4,
      title: 'Business Systems',
      description: 'Custom software solutions tailored to your business needs',
      icon: BarChart3,
      href: '/solutions/systems',
      gradient: 'from-primary to-secondary',
      stats: '6 Systems'
    },
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
        {/* Header */}
        <div className="pt-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center mb-20">
            <div className="inline-block mb-6 animate-[fadeIn_0.6s_ease-out]">
              <div className="glass px-4 py-2 rounded-full text-sm font-semibold gradient-text">
                NEXT-GEN SOLUTIONS
              </div>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance" style={{animation: 'slideUp 0.8s ease-out 0.2s both'}}>
              <span className="gradient-text">Transformative</span>
              <span className="block text-foreground mt-2">Digital Solutions</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8" style={{animation: 'slideUp 0.8s ease-out 0.4s both'}}>
              Unlock your business potential with cutting-edge technology and expert strategy. 
              Choose the perfect solution to accelerate your growth.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="max-w-7xl mx-auto mb-32">
            <div className="grid md:grid-cols-2 gap-8">
              {solutions.map((solution, index) => {
                const IconComponent = solution.icon
                return (
                  <Link key={solution.id} href={solution.href}>
                    <div 
                      className="group relative h-full cursor-pointer"
                      style={{
                        animation: `slideUp 0.6s ease-out ${0.6 + index * 0.1}s both`
                      }}
                    >
                      {/* Animated gradient border */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-accent/50 to-secondary/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                      
                      {/* Card */}
                      <div className="relative glass-dark rounded-2xl p-8 h-full overflow-hidden group-hover:bg-black/40 transition-all duration-500">
                        {/* Shine effect */}
                        <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                        {/* Content */}
                        <div className="relative z-10 flex flex-col h-full">
                          {/* Icon */}
                          <div className="mb-6">
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.gradient} p-3 group-hover:scale-110 transition-transform duration-500 glow`}>
                              <IconComponent className="w-full h-full text-foreground" />
                            </div>
                          </div>

                          {/* Text */}
                          <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300 max-w-xs">
                            {solution.title}
                          </h3>
                          
                          <p className="text-muted-foreground mb-8 flex-grow group-hover:text-foreground/80 transition-colors">
                            {solution.description}
                          </p>

                          {/* Stats and CTA */}
                          <div className="flex items-center justify-between mt-auto">
                            <span className="text-sm font-semibold text-primary/80 group-hover:text-accent transition-colors">
                              {solution.stats}
                            </span>
                            <div className="w-10 h-10 rounded-full bg-primary/20 group-hover:bg-accent group-hover:scale-110 flex items-center justify-center transition-all duration-300 group-hover:shadow-lg group-hover:shadow-accent/50">
                              <ArrowRight className="w-5 h-5 text-foreground group-hover:text-background transition-colors" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto mb-24" style={{animation: 'slideUp 0.8s ease-out 1.2s both'}}>
            <div className="glass-dark rounded-3xl p-12 text-center relative overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4 text-foreground">Ready to Transform?</h2>
                <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
                  Get started with a personalized consultation. Our experts will help you choose the perfect solution for your business goals.
                </p>
                <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/80 hover:to-accent/80 text-foreground font-bold py-6 px-8 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/50">
                  Schedule Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
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

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </main>
  )
}
