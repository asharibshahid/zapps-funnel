"use client"

import { useEffect, useMemo, useState } from 'react';
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  Briefcase,
  Building,
  Building2,
  Calculator,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleDollarSign,
  Clock3,
  Cpu,
  CreditCard,
  FileText,
  Globe,
  Headphones,
  HelpCircle,
  Layers3,
  LayoutDashboard,
  LifeBuoy,
  LineChart,
  Lock,
  Mail,
  Megaphone,
  MessageSquare,
  MonitorSmartphone,
  Phone,
  Plus,
  Rocket,
  Search,
  Settings,
  Shield,
  ShieldCheck,
  ShoppingCart,
  SlidersHorizontal,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Users,
  Wallet,
  X,
  Zap,
  type LucideIcon,
} from 'lucide-react';

const SERVICE_CATEGORIES = [
  {
    id: 'ai-automation',
    name: 'AI & Automation',
    icon: Bot,
    short: 'Streamline workflows. Automate tasks. Leverage AI.',
    idealFor: 'Businesses looking to reduce manual work and leverage intelligent automation.',
    description:
      'Smart AI-powered solutions to automate repetitive tasks, increase productivity, and provide actionable insights.',
    cta: 'Explore AI solutions',
    result: 'Automated workflows that save time and reduce errors.',
  },
  {
    id: 'ecommerce',
    name: 'E-commerce System',
    icon: ShoppingCart,
    short: 'Sell online. Manage orders. Grow revenue.',
    idealFor: 'Retailers, brands, and businesses ready to sell products or services online.',
    description:
      'E-commerce platforms that handle products, payments, orders, and customer management with professional shopping experiences.',
    cta: 'View e-commerce packages',
    result: 'An online store that converts visitors into customers.',
  },
  {
    id: 'websites',
    name: 'Online Presence',
    icon: Globe,
    short: 'Get found online. Generate leads. Build credibility.',
    idealFor: 'Small businesses, professionals, and brands ready to launch or upgrade their online presence.',
    description:
      'Professional websites that turn visitors into leads, build trust with your audience, and give your business a polished home online.',
    cta: 'View website packages',
    result: 'A site that looks professional, ranks well, and captures inquiries.',
  },
  {
    id: 'systems',
    name: 'Business Systems & Solutions',
    icon: LayoutDashboard,
    short: 'Organize your team. Automate processes. See what matters.',
    idealFor: 'Growing teams replacing spreadsheets, manual processes, or disconnected tools.',
    description:
      'Internal systems that give your team visibility, structure, and control over operations, records, and workflows.',
    cta: 'View operations packages',
    result: 'A system your team actually uses to run the business better.',
  },
];

// AI Solutions - 12 AI service types
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
  { id: 11, name: 'API Integration', description: 'Seamless connection with AI services', icon: Layers3 },
  { id: 12, name: 'Process Optimization', description: 'Streamline operations with intelligent systems', icon: Settings },
];

// AI Packages
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
];

// Dynamic Package Data for each category
const PACKAGES_DATA: Record<string, {
  title: string;
  price: string;
  description: string;
  perfectFor: string;
  icon: LucideIcon;
  features: { feature: string; details: string }[];
  outcomes: string[];
  businessImpact: { icon: LucideIcon; text: string }[];
  before: string[];
  after: string[];
}> = {
  'ai-automation': {
    title: 'AI & Automation System',
    price: '$2,500',
    description: 'Intelligent automation solutions that streamline your workflows, reduce manual tasks, and leverage AI to boost productivity.',
    perfectFor: 'Growing businesses ready to automate repetitive tasks',
    icon: Bot,
    features: [
      { feature: 'Scope', details: 'Custom AI workflow design & implementation' },
      { feature: 'AI Integration', details: 'ChatGPT, Claude, or custom AI model integration' },
      { feature: 'Automation', details: 'Zapier/Make.com workflow automation setup' },
      { feature: 'Data Processing', details: 'Automated data extraction & processing pipelines' },
      { feature: 'Chatbot', details: 'AI-powered customer support chatbot' },
      { feature: 'Document AI', details: 'Automated document processing & summarization' },
      { feature: 'Email Automation', details: 'Smart email responses & categorization' },
      { feature: 'Analytics', details: 'AI-powered insights dashboard' },
      { feature: 'Integration', details: 'Connect with existing tools (CRM, email, etc.)' },
      { feature: 'Training', details: 'Team training on AI tools & workflows' },
      { feature: 'Timeline', details: '3-4 weeks delivery' },
      { feature: 'Support', details: '60 days post-launch support' },
    ],
    outcomes: [
      'Automated repetitive tasks saving 10+ hours/week',
      'AI-powered customer support available 24/7',
      'Smart data processing & insights',
      'Reduced human error in workflows',
      'Scalable automation infrastructure',
    ],
    businessImpact: [
      { icon: Clock3, text: 'Save 10+ hours per week on manual tasks' },
      { icon: TrendingUp, text: 'Increase team productivity by 40%' },
      { icon: Users, text: '24/7 customer support capability' },
      { icon: Zap, text: 'Faster response times to inquiries' },
      { icon: Sparkles, text: 'Data-driven decision making' },
    ],
    before: [
      'Manual, repetitive tasks eating up time',
      'Slow response to customer inquiries',
      'Data scattered across multiple tools',
      'Human errors in routine processes',
      'Limited capacity to scale operations',
      'No insights from business data',
    ],
    after: [
      'Automated workflows running 24/7',
      'Instant AI-powered customer responses',
      'Centralized, automated data processing',
      'Error-free automated processes',
      'Scalable infrastructure ready to grow',
      'AI-driven insights & recommendations',
    ],
  },
  'ecommerce': {
    title: 'E-commerce System',
    price: '$1,500',
    description: 'Complete online store setup with product management, secure payments, and customer experience optimization.',
    perfectFor: 'Retailers & brands ready to sell online',
    icon: ShoppingCart,
    features: [
      { feature: 'Platform', details: 'Shopify, WooCommerce, or custom solution' },
      { feature: 'Products', details: 'Up to 100 products setup with variants' },
      { feature: 'Design', details: 'Custom storefront design & branding' },
      { feature: 'Payments', details: 'Stripe, PayPal, and local payment gateways' },
      { feature: 'Shipping', details: 'Shipping zones, rates & tracking setup' },
      { feature: 'Inventory', details: 'Stock management & low-stock alerts' },
      { feature: 'Mobile', details: 'Mobile-optimized shopping experience' },
      { feature: 'SEO', details: 'Product SEO & Google Shopping setup' },
      { feature: 'Email', details: 'Abandoned cart & order confirmation emails' },
      { feature: 'Analytics', details: 'Sales dashboard & conversion tracking' },
      { feature: 'Timeline', details: '3-4 weeks delivery' },
      { feature: 'Support', details: '45 days post-launch support' },
    ],
    outcomes: [
      'Professional online store ready to sell',
      'Secure payment processing setup',
      'Automated order & inventory management',
      'Mobile-optimized shopping experience',
      'Marketing automation for sales growth',
    ],
    businessImpact: [
      { icon: ShoppingCart, text: 'Start selling online immediately' },
      { icon: CreditCard, text: 'Secure payment processing' },
      { icon: TrendingUp, text: 'Increase revenue with online sales' },
      { icon: Globe, text: 'Reach customers worldwide' },
      { icon: Zap, text: 'Automated order processing' },
    ],
    before: [
      'No online sales channel',
      'Manual order processing',
      'Limited customer reach',
      'No inventory tracking',
      'Missed sales opportunities',
      'No customer data insights',
    ],
    after: [
      'Professional online store live',
      'Automated order & fulfillment flow',
      'Global customer reach',
      'Real-time inventory management',
      'Abandoned cart recovery',
      'Customer purchase analytics',
    ],
  },
  'websites': {
    title: 'Online Presence System',
    price: '$500',
    description: 'Build a professional website that represents your business and turns visitors into real inquiries.',
    perfectFor: 'Startups, service businesses & local brands',
    icon: Globe,
    features: [
      { feature: 'Scope', details: 'Up to 7 pages (Home, About, Services, Contact, etc.)' },
      { feature: 'CMS', details: 'WordPress setup' },
      { feature: 'Design', details: 'Professionally customized theme-based design (clean & modern, no generic look)' },
      { feature: 'Mobile Optimization', details: 'Fully responsive (mobile, tablet, desktop)' },
      { feature: 'Performance', details: 'Fast loading + image & asset optimization' },
      { feature: 'SEO', details: 'Basic SEO setup (meta tags, structure, Google indexing ready)' },
      { feature: 'Conversion Setup', details: 'CTA sections (Call, Get Quote, WhatsApp)' },
      { feature: 'Integrations', details: 'Basic tools integration (CRM / booking / email tools if required)' },
      { feature: 'Lead Capture', details: 'Contact forms + WhatsApp integration' },
      { feature: 'Chatbot', details: 'Chatbot integration' },
      { feature: 'Social Integration', details: 'Social media links integration' },
      { feature: 'Analytics', details: 'Google Analytics setup' },
      { feature: 'Google Presence', details: 'Google Business Profile setup' },
      { feature: 'Notifications', details: 'Email alerts for new leads' },
      { feature: 'Security', details: 'SSL certificate + basic security configuration' },
      { feature: 'Backup', details: 'Website backup setup' },
      { feature: 'Domain & Hosting', details: 'Setup guidance + deployment support (domain & hosting charges paid by client)' },
      { feature: 'Content', details: 'Client provides content (we assist with structure & formatting)' },
      { feature: 'Timeline', details: '2-3 weeks delivery' },
      { feature: 'Revisions', details: '2 revision rounds included' },
      { feature: 'Training', details: 'Basic training for website management' },
      { feature: 'Ownership', details: 'Full ownership handover' },
      { feature: 'Support', details: '30 days free support after launch' },
      { feature: 'Exclusions', details: 'No e-commerce or advanced custom features included' },
    ],
    outcomes: [
      'A professional, modern website for your business',
      'A system to capture leads (forms + WhatsApp)',
      'Strong online presence on Google & social platforms',
      'A fast, mobile-optimized website',
      'Full control with easy content management',
    ],
    businessImpact: [
      { icon: TrendingUp, text: 'More inquiries from potential clients' },
      { icon: Users, text: 'Increased trust & credibility' },
      { icon: Globe, text: 'Better visibility in your local market' },
      { icon: Zap, text: 'Faster response to customer leads' },
      { icon: Sparkles, text: 'Strong foundation to scale online' },
    ],
    before: [
      'No proper online presence',
      'Clients cannot find you online',
      'No system to capture leads',
      'Unprofessional or outdated look',
      'Slow / non-mobile-friendly website',
      'No clear business information',
    ],
    after: [
      'Professional business website',
      'Visible on Google & searchable',
      'Automated lead capture (forms + WhatsApp)',
      'Clean, modern & trusted brand image',
      'Fast, mobile-optimized experience',
      'Structured pages with clear messaging',
    ],
  },
  'systems': {
    title: 'Business Systems & Solutions',
    price: '$3,000',
    description: 'Custom internal systems that replace spreadsheets and give your team visibility, structure, and control.',
    perfectFor: 'Growing teams needing operational efficiency',
    icon: LayoutDashboard,
    features: [
      { feature: 'Discovery', details: 'Business process analysis & requirements gathering' },
      { feature: 'Architecture', details: 'Custom system design & database structure' },
      { feature: 'Dashboard', details: 'Admin dashboard with role-based access' },
      { feature: 'Data Management', details: 'CRUD operations for all business entities' },
      { feature: 'Workflows', details: 'Automated approval & notification workflows' },
      { feature: 'Reporting', details: 'Custom reports & data export functionality' },
      { feature: 'Integration', details: 'API integrations with existing tools' },
      { feature: 'User Management', details: 'Team accounts with permissions' },
      { feature: 'Mobile Access', details: 'Responsive design for field access' },
      { feature: 'Data Migration', details: 'Import existing data from spreadsheets' },
      { feature: 'Training', details: 'Team training & documentation' },
      { feature: 'Timeline', details: '4-6 weeks delivery' },
      { feature: 'Support', details: '90 days post-launch support' },
    ],
    outcomes: [
      'Centralized system replacing multiple spreadsheets',
      'Real-time visibility into operations',
      'Automated workflows reducing manual work',
      'Team collaboration with proper access controls',
      'Data-driven insights for better decisions',
    ],
    businessImpact: [
      { icon: LayoutDashboard, text: 'Single source of truth for operations' },
      { icon: Users, text: 'Improved team collaboration' },
      { icon: TrendingUp, text: 'Real-time business insights' },
      { icon: Clock3, text: 'Reduced admin time by 50%' },
      { icon: Shield, text: 'Better data security & compliance' },
    ],
    before: [
      'Data scattered in multiple spreadsheets',
      'Manual data entry & duplication',
      'No visibility into team activities',
      'Version control nightmares',
      'Limited access control',
      'Time wasted on admin tasks',
    ],
    after: [
      'Centralized business database',
      'Automated data flows & updates',
      'Real-time dashboards & reports',
      'Single source of truth',
      'Role-based access & security',
      'Streamlined operations',
    ],
  },
};

// E-commerce Specific Package Tiers
const ECOMMERCE_PACKAGES = {
  starter: {
    id: 'starter',
    title: 'Starter Store',
    badge: 'Recommended',
    badgeColor: 'bg-green-100 text-green-700',
    price: '$800',
    timeline: '2-3 weeks',
    bestFor: 'Small businesses launching their first online store',
    shortDescription: 'Everything you need to start selling online with a professional storefront.',
    keyFeatures: [
      'Up to 50 products setup',
      'Shopify or WooCommerce',
      'Basic theme customization',
      'Payment gateway setup',
      'Mobile-responsive design',
      'Basic SEO setup',
    ],
    fullFeatures: [
      { feature: 'Platform', details: 'Shopify or WooCommerce setup' },
      { feature: 'Products', details: 'Up to 50 products with variants' },
      { feature: 'Design', details: 'Professional theme customization' },
      { feature: 'Payments', details: 'Stripe + PayPal integration' },
      { feature: 'Shipping', details: 'Basic shipping zones & rates' },
      { feature: 'Mobile', details: 'Fully responsive storefront' },
      { feature: 'SEO', details: 'Basic product SEO setup' },
      { feature: 'Email', details: 'Order confirmation emails' },
      { feature: 'Training', details: 'Store management training' },
      { feature: 'Support', details: '30 days post-launch support' },
    ],
    deliverables: [
      'Fully functional online store',
      'Product catalog setup',
      'Payment processing ready',
      'Mobile-optimized storefront',
      'Basic analytics dashboard',
    ],
    support: '30 days',
  },
  growth: {
    id: 'growth',
    title: 'Growth Store',
    badge: 'Most Selected',
    badgeColor: 'bg-red-100 text-red-700',
    price: '$1,500',
    timeline: '3-4 weeks',
    bestFor: 'Established businesses scaling their online sales',
    shortDescription: 'Advanced e-commerce features to maximize conversions and grow revenue.',
    keyFeatures: [
      'Up to 200 products setup',
      'Custom storefront design',
      'Advanced payment options',
      'Inventory management',
      'Abandoned cart recovery',
      'Analytics & reporting',
    ],
    fullFeatures: [
      { feature: 'Platform', details: 'Shopify, WooCommerce, or custom solution' },
      { feature: 'Products', details: 'Up to 200 products with variants' },
      { feature: 'Design', details: 'Custom storefront design & branding' },
      { feature: 'Payments', details: 'Multiple gateways + local options' },
      { feature: 'Shipping', details: 'Advanced shipping rules & tracking' },
      { feature: 'Inventory', details: 'Stock management & low-stock alerts' },
      { feature: 'Mobile', details: 'Mobile-optimized shopping experience' },
      { feature: 'SEO', details: 'Product SEO & Google Shopping setup' },
      { feature: 'Email', details: 'Abandoned cart + order emails' },
      { feature: 'Analytics', details: 'Sales dashboard & conversion tracking' },
      { feature: 'Discounts', details: 'Coupon & discount system' },
      { feature: 'Training', details: 'Comprehensive store training' },
      { feature: 'Support', details: '45 days post-launch support' },
    ],
    deliverables: [
      'Custom-designed online store',
      'Complete product catalog',
      'Multi-payment processing',
      'Automated inventory system',
      'Marketing automation setup',
      'Conversion tracking dashboard',
    ],
    support: '45 days',
  },
  enterprise: {
    id: 'enterprise',
    title: 'Enterprise',
    badge: 'Enterprise Ready',
    badgeColor: 'bg-purple-100 text-purple-700',
    price: '$3,500',
    timeline: '4-6 weeks',
    bestFor: 'Large catalogs and high-volume sales operations',
    shortDescription: 'Full-scale e-commerce platform with advanced integrations and custom features.',
    keyFeatures: [
      'Unlimited products',
      'Custom development',
      'ERP/CRM integration',
      'Multi-currency support',
      'Advanced analytics',
      'Priority support',
    ],
    fullFeatures: [
      { feature: 'Platform', details: 'Custom solution or headless commerce' },
      { feature: 'Products', details: 'Unlimited products & variants' },
      { feature: 'Design', details: 'Fully custom design & UX' },
      { feature: 'Payments', details: 'Enterprise payment solutions' },
      { feature: 'Shipping', details: 'Multi-carrier integration' },
      { feature: 'Inventory', details: 'Advanced inventory & warehousing' },
      { feature: 'Integration', details: 'ERP, CRM, PIM integration' },
      { feature: 'Multi-currency', details: 'International sales support' },
      { feature: 'B2B Features', details: 'Wholesale pricing & accounts' },
      { feature: 'Analytics', details: 'Advanced reporting & BI tools' },
      { feature: 'Performance', details: 'Speed optimization & CDN' },
      { feature: 'Security', details: 'Enhanced security & compliance' },
      { feature: 'Training', details: 'Full team training program' },
      { feature: 'Support', details: '90 days priority support' },
    ],
    deliverables: [
      'Enterprise e-commerce platform',
      'Custom feature development',
      'Third-party integrations',
      'Advanced analytics suite',
      'Performance optimization',
      'Dedicated account manager',
    ],
    support: '90 days priority',
  },
};

const PROBLEM_CARDS = [
  {
    problem: 'Need more leads from your website?',
    description: 'Turn your website into a lead generation machine with conversion-focused design.',
    solution: 'websites',
    icon: Target,
  },
  {
    problem: 'Need an internal system instead of spreadsheets?',
    description: 'Replace messy spreadsheets with a custom system your team will actually use.',
    solution: 'systems',
    icon: LayoutDashboard,
  },
  {
    problem: 'Need a customer portal or dashboard?',
    description: 'Give your customers a professional self-service experience.',
    solution: 'apps',
    icon: Users,
  },
  {
    problem: 'Need booking or order management?',
    description: 'Automate appointments, orders, and customer flow.',
    solution: 'websites',
    icon: Calendar,
  },
  {
    problem: 'Need automation between sales and operations?',
    description: 'Connect your tools and eliminate manual data entry.',
    solution: 'systems',
    icon: Settings,
  },
  {
    problem: 'Need a custom staff or customer app?',
    description: 'Build exactly what your business needs, no compromises.',
    solution: 'apps',
    icon: MonitorSmartphone,
  },
];

const CLIENT_LOGOS = [
  'TechCorp Industries',
  'GrowthFirst Agency',
  'Retail Plus',
  'HealthServe Medical',
  'BuildRight Construction',
  'EduLearn Academy',
];

const CASE_STUDIES = [
  {
    client: 'TechCorp Industries',
    industry: 'Technology',
    result: '340% increase in qualified leads',
    description: 'Complete website rebuild with integrated CRM and lead scoring system.',
    image: '/api/placeholder/400/300',
  },
  {
    client: 'Retail Plus',
    industry: 'E-commerce',
    result: '$2.4M in online revenue',
    description: 'Custom e-commerce platform with inventory management and analytics dashboard.',
    image: '/api/placeholder/400/300',
  },
  {
    client: 'HealthServe Medical',
    industry: 'Healthcare',
    result: '60% reduction in admin time',
    description: 'Patient portal and appointment booking system with automated reminders.',
    image: '/api/placeholder/400/300',
  },
];

const TESTIMONIALS = [
  {
    quote: 'Zapps delivered exactly what we needed - a system that our team actually uses every day. The ROI was visible within the first month.',
    name: 'Sarah Chen',
    role: 'Operations Director',
    company: 'TechCorp Industries',
  },
  {
    quote: 'Professional, responsive, and they truly understood our business needs. Our new website generates 5x more leads than before.',
    name: 'Michael Torres',
    role: 'CEO',
    company: 'GrowthFirst Agency',
  },
  {
    quote: 'The booking system transformed how we manage appointments. Our patients love the self-service portal.',
    name: 'Dr. Amanda Foster',
    role: 'Practice Manager',
    company: 'HealthServe Medical',
  },
];

const BUSINESS_GOALS = {
  websites: [
    'Lead Generation Website',
    'Business Website',
    'Portfolio / Personal Brand',
    'Blog / Content Website',
    'Landing Pages',
  ],
  ecommerce: [
    'Online Store',
    'Multi-vendor Marketplace',
    'Subscription Commerce',
    'Digital Products Store',
    'B2B Commerce Portal',
  ],
  apps: [
    'SaaS MVP',
    'Membership Platform',
    'Online Course Platform',
    'Client App / Portal',
    'Marketplace MVP',
  ],
  systems: [
    'CRM System',
    'ERP / Operations System',
    'Internal Dashboard',
    'Team Portal',
    'Admin Panel',
  ],
  marketing: [
    'Brand Presence',
    'Social Media Content',
    'Lead Generation Support',
    'SEO / Content Support',
    'Automation Support',
  ],
  support: [
    'Monthly Maintenance',
    'Hosting & Deployment Support',
    'Growth Partner Support',
    'Priority Support',
  ],
};

const PACKAGES = {
  websites: [
    {
      id: 'web-launch',
      name: 'Launch',
      idealFor: 'New businesses, solo professionals, or personal brands that need to get online fast.',
      outcome: 'Get a polished, professional website live so you can start capturing leads and building credibility.',
      startingPrice: 1800,
      timeline: '1-2 weeks',
      support: '30 days included',
      recommended: ['Business Website', 'Portfolio / Personal Brand', 'Blog / Content Website'],
      valuePoints: [
        'Professional design that builds trust',
        'Mobile-optimized for any device',
        'Lead capture form with instant alerts',
        'Search engine ready from day one',
        'Full ownership and training',
      ],
      comparison: {
        strategy: 'Starter call',
        design: 'Professional layout',
        pages: 'Up to 5 pages',
        seo: true,
        forms: true,
        crm: 'Optional',
        analytics: true,
        chatbot: 'Optional',
        ecommerce: false,
        booking: 'Optional',
        training: true,
        support: '30 days',
        account: false,
        handover: true,
      },
      internalCost: 700,
      priceFloor: 1500,
      effort: 22,
      badge: 'Fastest to launch',
    },
    {
      id: 'web-growth',
      name: 'Growth',
      idealFor: 'Established businesses ready to turn their website into a lead generation and marketing asset.',
      outcome: 'A conversion-focused website that brings in more leads, supports your marketing, and grows with your business.',
      startingPrice: 4200,
      timeline: '2-4 weeks',
      support: '60 days included',
      featured: true,
      recommended: ['Lead Generation Website', 'Landing Pages'],
      valuePoints: [
        'Strategy session to align on goals',
        'Conversion-optimized page structure',
        'Connected to your CRM or email list',
        'Visitor tracking and lead insights',
        'Content guidance and clear CTAs',
      ],
      comparison: {
        strategy: 'Discovery + planning',
        design: 'Semi-custom brand UI',
        pages: 'Up to 12 pages',
        seo: true,
        forms: true,
        crm: true,
        analytics: true,
        chatbot: 'Optional',
        ecommerce: 'Optional',
        booking: true,
        training: true,
        support: '60 days',
        account: 'Shared PM',
        handover: true,
      },
      internalCost: 1700,
      priceFloor: 3600,
      effort: 48,
      badge: 'Most selected',
    },
    {
      id: 'web-authority',
      name: 'Authority',
      idealFor: 'Scaling brands that need a premium digital presence with advanced functionality and stronger systems.',
      outcome: 'A high-end website that positions your brand as a leader, with custom features and seamless integrations.',
      startingPrice: 8500,
      timeline: '4-8 weeks',
      support: '90 days priority',
      recommended: [],
      valuePoints: [
        'Custom design tailored to your brand',
        'Advanced integrations and automation',
        'High-converting landing experiences',
        'Custom functionality for your needs',
        'Priority support and dedicated handling',
      ],
      comparison: {
        strategy: 'Full planning session',
        design: 'Custom brand experience',
        pages: '12+ pages',
        seo: true,
        forms: true,
        crm: true,
        analytics: true,
        chatbot: true,
        ecommerce: true,
        booking: true,
        training: true,
        support: '90 days',
        account: 'Dedicated handling',
        handover: true,
      },
      internalCost: 3600,
      priceFloor: 7200,
      effort: 88,
      badge: 'Premium choice',
    },
  ],
  ecommerce: [
    {
      id: 'ecom-starter',
      name: 'Starter Store',
      idealFor: 'Small businesses launching their first online store with straightforward product needs.',
      outcome: 'A professional online store that handles products, payments, and orders smoothly.',
      startingPrice: 3500,
      timeline: '2-3 weeks',
      support: '45 days included',
      recommended: ['Online Store', 'Digital Products Store'],
      valuePoints: [
        'Up to 50 products setup',
        'Secure payment processing',
        'Order management dashboard',
        'Mobile-friendly shopping',
        'Basic inventory tracking',
      ],
      comparison: {
        strategy: 'Store planning call',
        design: 'Professional storefront',
        pages: 'Core store pages',
        seo: true,
        forms: true,
        crm: 'Optional',
        analytics: true,
        chatbot: false,
        ecommerce: true,
        booking: false,
        training: true,
        support: '45 days',
        account: false,
        handover: true,
      },
      internalCost: 1400,
      priceFloor: 3000,
      effort: 40,
      badge: 'Quick launch',
    },
    {
      id: 'ecom-growth',
      name: 'Growth Store',
      idealFor: 'Growing retailers ready for advanced e-commerce features and marketing integrations.',
      outcome: 'A scalable store with advanced features to drive more sales and streamline operations.',
      startingPrice: 7500,
      timeline: '4-6 weeks',
      support: '60 days included',
      featured: true,
      recommended: ['Online Store', 'Subscription Commerce'],
      valuePoints: [
        'Unlimited products',
        'Advanced shipping & tax rules',
        'Abandoned cart recovery',
        'Email marketing integration',
        'Sales analytics dashboard',
      ],
      comparison: {
        strategy: 'E-commerce strategy',
        design: 'Custom storefront',
        pages: 'Full store + landing pages',
        seo: true,
        forms: true,
        crm: true,
        analytics: true,
        chatbot: 'Optional',
        ecommerce: true,
        booking: false,
        training: true,
        support: '60 days',
        account: 'Shared PM',
        handover: true,
      },
      internalCost: 3200,
      priceFloor: 6500,
      effort: 75,
      badge: 'Most selected',
    },
    {
      id: 'ecom-enterprise',
      name: 'Enterprise',
      idealFor: 'Established retailers with complex catalog, multi-channel, or B2B requirements.',
      outcome: 'An enterprise-grade platform that scales with your business and integrates with your systems.',
      startingPrice: 18000,
      timeline: '8-12 weeks',
      support: '90 days priority',
      recommended: ['Multi-vendor Marketplace', 'B2B Commerce Portal'],
      valuePoints: [
        'Custom checkout flows',
        'Multi-warehouse inventory',
        'ERP/accounting integration',
        'B2B pricing & accounts',
        'Advanced reporting suite',
      ],
      comparison: {
        strategy: 'Deep commerce planning',
        design: 'Premium custom design',
        pages: 'Enterprise scope',
        seo: true,
        forms: true,
        crm: true,
        analytics: true,
        chatbot: true,
        ecommerce: true,
        booking: true,
        training: true,
        support: '90 days',
        account: 'Dedicated handling',
        handover: true,
      },
      internalCost: 8500,
      priceFloor: 16000,
      effort: 150,
      badge: 'Enterprise ready',
    },
  ],
  apps: [
    {
      id: 'app-mvp',
      name: 'MVP',
      idealFor: 'Founders and entrepreneurs validating a product idea before committing to a full build.',
      outcome: 'Launch a working version of your product so you can test the market, get feedback, and attract early users.',
      startingPrice: 9500,
      timeline: '4-8 weeks',
      support: '45 days included',
      recommended: ['SaaS MVP', 'Client App / Portal'],
      valuePoints: [
        'Core user journey fully functional',
        'User login and personal dashboard',
        'Admin panel to manage your product',
        'Clear roadmap for next phase',
        'Full ownership and training',
      ],
      comparison: {
        strategy: 'MVP scoping',
        design: 'Focused product UI',
        pages: 'Core flows only',
        seo: false,
        forms: true,
        crm: 'Optional',
        analytics: true,
        chatbot: false,
        ecommerce: 'Optional',
        booking: 'Optional',
        training: true,
        support: '45 days',
        account: 'Shared PM',
        handover: true,
      },
      internalCost: 4100,
      priceFloor: 8200,
      effort: 96,
      badge: 'Validate fast',
    },
    {
      id: 'app-growth',
      name: 'Growth',
      idealFor: 'Businesses ready to build a more complete product with payments, members, or content delivery.',
      outcome: 'A production-ready platform your users can access, pay for, and engage with consistently.',
      startingPrice: 18000,
      timeline: '8-12 weeks',
      support: '60 days priority',
      featured: true,
      recommended: ['Membership Platform', 'Online Course Platform'],
      valuePoints: [
        'Multiple user flows and features',
        'Payments, memberships, or content',
        'Admin tools for daily operations',
        'Connected to your existing tools',
        'Dedicated project handling',
      ],
      comparison: {
        strategy: 'Product planning',
        design: 'Custom product UI',
        pages: 'Core + secondary flows',
        seo: false,
        forms: true,
        crm: true,
        analytics: true,
        chatbot: 'Optional',
        ecommerce: true,
        booking: 'Optional',
        training: true,
        support: '60 days',
        account: 'Dedicated handling',
        handover: true,
      },
      internalCost: 8200,
      priceFloor: 15500,
      effort: 160,
      badge: 'Most selected',
    },
    {
      id: 'app-scale',
      name: 'Scale',
      idealFor: 'Teams building a serious product with complex user roles, workflows, and long-term growth plans.',
      outcome: 'A robust platform built for scale, with advanced functionality and enterprise-grade reliability.',
      startingPrice: 32000,
      timeline: '12-20 weeks',
      support: '90 days priority',
      recommended: [],
      valuePoints: [
        'Advanced user roles and permissions',
        'Complex business logic built-in',
        'Deep integrations with your stack',
        'Operational dashboards and reporting',
        'Senior team and priority handling',
      ],
      comparison: {
        strategy: 'Deep product scoping',
        design: 'Premium custom experience',
        pages: 'Complex application flows',
        seo: false,
        forms: true,
        crm: true,
        analytics: true,
        chatbot: true,
        ecommerce: true,
        booking: true,
        training: true,
        support: '90 days',
        account: 'Dedicated handling',
        handover: true,
      },
      internalCost: 15400,
      priceFloor: 28000,
      effort: 270,
      badge: 'Enterprise ready',
    },
  ],
  systems: [
    {
      id: 'sys-core',
      name: 'Core',
      idealFor: 'Small teams replacing spreadsheets, messy folders, or disconnected tools.',
      outcome: 'One central place to manage your data, tasks, and records so your team stays organized.',
      startingPrice: 7000,
      timeline: '3-6 weeks',
      support: '45 days included',
      recommended: ['Internal Dashboard', 'Admin Panel'],
      valuePoints: [
        'See all your operations in one place',
        'Simple admin tools for daily tasks',
        'Basic team access controls',
        'Centralized records and data',
        'Team training and handover',
      ],
      comparison: {
        strategy: 'Ops planning',
        design: 'Functional internal UI',
        pages: 'Core modules',
        seo: false,
        forms: true,
        crm: 'Optional',
        analytics: true,
        chatbot: false,
        ecommerce: false,
        booking: false,
        training: true,
        support: '45 days',
        account: false,
        handover: true,
      },
      internalCost: 3000,
      priceFloor: 6200,
      effort: 82,
      badge: 'Start organized',
    },
    {
      id: 'sys-team',
      name: 'Team',
      idealFor: 'Growing companies that need structured workflows, approvals, and better visibility.',
      outcome: 'A system your whole team uses to manage work, track progress, and keep operations running smoothly.',
      startingPrice: 14500,
      timeline: '6-10 weeks',
      support: '60 days included',
      featured: true,
      recommended: ['CRM System', 'Team Portal'],
      valuePoints: [
        'Multi-step workflows and processes',
        'Role-based access for your team',
        'Dashboards and reporting built-in',
        'Clear visibility into operations',
        'Project manager coordination',
      ],
      comparison: {
        strategy: 'Process discovery',
        design: 'Custom internal UX',
        pages: 'Multiple modules',
        seo: false,
        forms: true,
        crm: true,
        analytics: true,
        chatbot: false,
        ecommerce: false,
        booking: false,
        training: true,
        support: '60 days',
        account: 'Shared PM',
        handover: true,
      },
      internalCost: 6200,
      priceFloor: 12800,
      effort: 155,
      badge: 'Most selected',
    },
    {
      id: 'sys-scale',
      name: 'Scale',
      idealFor: 'Established organizations with complex operations, multiple teams, and advanced requirements.',
      outcome: 'An enterprise-grade system that handles complexity, scales with your business, and integrates with everything.',
      startingPrice: 26000,
      timeline: '10-18 weeks',
      support: '90 days priority',
      recommended: ['ERP / Operations System'],
      valuePoints: [
        'Advanced workflow automation',
        'Cross-team visibility and reporting',
        'Custom approval and escalation flows',
        'Connected to your existing systems',
        'Senior team and priority handling',
      ],
      comparison: {
        strategy: 'Full operational scoping',
        design: 'Custom internal system',
        pages: 'Large module scope',
        seo: false,
        forms: true,
        crm: true,
        analytics: true,
        chatbot: 'Optional',
        ecommerce: false,
        booking: false,
        training: true,
        support: '90 days',
        account: 'Dedicated handling',
        handover: true,
      },
      internalCost: 11400,
      priceFloor: 23000,
      effort: 255,
      badge: 'Enterprise ready',
    },
  ],
  marketing: [
    {
      id: 'mkt-presence',
      name: 'Presence',
      idealFor: 'Businesses that want to stay visible online without hiring an internal content team.',
      outcome: 'Consistent content and activity that keeps your brand in front of your audience.',
      startingPrice: 700,
      timeline: 'Monthly',
      support: 'Ongoing retainer',
      recommended: ['Brand Presence', 'Social Media Content'],
      valuePoints: [
        'Monthly content creation support',
        'Consistent publishing schedule',
        'Basic creative direction',
        'Platform management',
        'Simple performance reporting',
      ],
      comparison: {
        strategy: 'Monthly planning',
        design: 'Social-ready design',
        pages: 'Not applicable',
        seo: false,
        forms: false,
        crm: false,
        analytics: true,
        chatbot: false,
        ecommerce: false,
        booking: false,
        training: false,
        support: 'Monthly',
        account: false,
        handover: false,
      },
      internalCost: 260,
      priceFloor: 600,
      effort: 18,
      badge: 'Easy start',
    },
    {
      id: 'mkt-growth',
      name: 'Growth',
      idealFor: 'Businesses that want more leads, better follow-up, and consistent marketing support.',
      outcome: 'A steady flow of leads with content, automation, and nurturing working together.',
      startingPrice: 1600,
      timeline: 'Monthly',
      support: 'Ongoing retainer',
      featured: true,
      recommended: ['Lead Generation Support', 'SEO / Content Support', 'Automation Support'],
      valuePoints: [
        'Content and lead funnel support',
        'Automated follow-up sequences',
        'Monthly strategy and review calls',
        'Lead tracking and reporting',
        'Dedicated marketing coordinator',
      ],
      comparison: {
        strategy: 'Growth planning',
        design: 'Campaign asset support',
        pages: 'Not applicable',
        seo: true,
        forms: false,
        crm: true,
        analytics: true,
        chatbot: 'Optional',
        ecommerce: false,
        booking: false,
        training: false,
        support: 'Monthly',
        account: 'Shared PM',
        handover: false,
      },
      internalCost: 650,
      priceFloor: 1350,
      effort: 36,
      badge: 'Most selected',
    },
    {
      id: 'mkt-performance',
      name: 'Performance',
      idealFor: 'Businesses ready to invest seriously in growth with a hands-on marketing partner.',
      outcome: 'Better lead quality, higher conversions, and a marketing engine that scales with your business.',
      startingPrice: 3200,
      timeline: 'Monthly',
      support: 'Ongoing retainer',
      recommended: [],
      valuePoints: [
        'Full-funnel marketing support',
        'Conversion optimization focus',
        'Advanced automation and systems',
        'Priority response and collaboration',
        'Executive-level reporting',
      ],
      comparison: {
        strategy: 'Performance planning',
        design: 'Campaign support',
        pages: 'Not applicable',
        seo: true,
        forms: false,
        crm: true,
        analytics: true,
        chatbot: true,
        ecommerce: false,
        booking: false,
        training: false,
        support: 'Monthly',
        account: 'Dedicated handling',
        handover: false,
      },
      internalCost: 1280,
      priceFloor: 2750,
      effort: 68,
      badge: 'Premium partner',
    },
  ],
  support: [
    {
      id: 'sup-care',
      name: 'Care Plan',
      idealFor: 'Clients who want a light but reliable support layer after launch.',
      outcome: 'Peace of mind for updates, fixes, and basic ongoing care.',
      startingPrice: 250,
      timeline: 'Monthly',
      support: 'Monthly retainer',
      recommended: ['Monthly Maintenance'],
      valuePoints: [
        'Basic updates',
        'Routine care',
        'Small changes support',
        'Issue handling',
        'Monthly check-in',
      ],
      comparison: {
        strategy: 'Support onboarding',
        design: 'Not applicable',
        pages: 'Not applicable',
        seo: false,
        forms: false,
        crm: false,
        analytics: false,
        chatbot: false,
        ecommerce: false,
        booking: false,
        training: false,
        support: 'Monthly',
        account: false,
        handover: false,
      },
      internalCost: 90,
      priceFloor: 220,
      effort: 8,
      badge: 'Simple support',
    },
    {
      id: 'sup-partner',
      name: 'Growth Partner',
      idealFor: 'Businesses that want faster help, changes, and strategic guidance after launch.',
      outcome: 'A reliable retained partner for improvements, fixes, and progress support.',
      startingPrice: 850,
      timeline: 'Monthly',
      support: 'Monthly retainer',
      featured: true,
      recommended: ['Growth Partner Support', 'Priority Support'],
      valuePoints: [
        'Priority fixes',
        'Monthly improvement support',
        'Strategic guidance',
        'Deployment help',
        'Faster turnaround',
      ],
      comparison: {
        strategy: 'Monthly review',
        design: 'Not applicable',
        pages: 'Not applicable',
        seo: false,
        forms: false,
        crm: false,
        analytics: true,
        chatbot: false,
        ecommerce: false,
        booking: false,
        training: false,
        support: 'Monthly',
        account: 'Shared PM',
        handover: false,
      },
      internalCost: 320,
      priceFloor: 700,
      effort: 20,
      badge: 'Best after launch',
    },
    {
      id: 'sup-priority',
      name: 'Priority Support',
      idealFor: 'Teams that need quick response, dependable coordination, and a more active technical partner.',
      outcome: 'Stronger continuity and faster support across business-critical updates.',
      startingPrice: 1800,
      timeline: 'Monthly',
      support: 'Monthly retainer',
      recommended: [],
      valuePoints: [
        'Priority queue',
        'Deployment coordination',
        'System support',
        'Improvement backlog handling',
        'Dedicated coordination',
      ],
      comparison: {
        strategy: 'Support planning',
        design: 'Not applicable',
        pages: 'Not applicable',
        seo: false,
        forms: false,
        crm: true,
        analytics: true,
        chatbot: false,
        ecommerce: false,
        booking: false,
        training: false,
        support: 'Monthly',
        account: 'Dedicated handling',
        handover: false,
      },
      internalCost: 690,
      priceFloor: 1500,
      effort: 44,
      badge: 'High-touch support',
    },
  ],
};

const ADD_ONS = [
  { id: 'discovery-workshop', category: 'all', name: 'Discovery workshop', price: 1500, description: 'Deep-dive session to align goals, map requirements, and create a clear project roadmap.' },
  { id: 'copywriting', category: 'all', name: 'Professional copywriting', price: 800, description: 'Conversion-focused copy written by experienced copywriters for your pages.' },
  { id: 'extra-pages', category: 'websites', name: 'Extra pages', price: 300, description: 'Expand your website scope with additional service, city, or landing pages.' },
  { id: 'blog-cms', category: 'websites', name: 'Blog / CMS setup', price: 650, description: 'Add a managed content section so your team can publish updates and articles.' },
  { id: 'booking-system', category: 'websites', name: 'Booking system', price: 900, description: 'Allow customers to request appointments or calls through a cleaner flow.' },
  { id: 'crm-integration', category: 'all', name: 'CRM integration', price: 750, description: 'Send inquiries into your internal sales process instead of handling leads manually.' },
  { id: 'ai-chatbot', category: 'all', name: 'AI chatbot', price: 1200, description: 'Add instant response support for common questions and lead capture.' },
  { id: 'seo-support', category: 'websites', name: 'SEO / content starter', price: 950, description: 'Start with better structure and content support for search visibility.' },
  { id: 'email-automation', category: 'all', name: 'Email automation setup', price: 600, description: 'Automated email sequences for onboarding, follow-ups, and nurturing.' },
  { id: 'whatsapp-integration', category: 'all', name: 'WhatsApp integration', price: 450, description: 'Connect your system to WhatsApp for customer communication.' },
  { id: 'payment-gateway', category: 'all', name: 'Payment gateway setup', price: 500, description: 'Secure payment processing with Stripe, PayPal, or local gateways.' },
  { id: 'analytics-tracking', category: 'all', name: 'Analytics + tracking', price: 400, description: 'Google Analytics, conversion tracking, and event monitoring setup.' },
  { id: 'security-hardening', category: 'all', name: 'Security hardening', price: 700, description: 'Enhanced security measures, SSL, and vulnerability protection.' },
  { id: 'maintenance-plan', category: 'all', name: 'Maintenance plan', price: 350, description: 'Monthly care plan with updates, backups, and monitoring.' },
  { id: 'conversion-optimization', category: 'websites', name: 'Conversion optimization', price: 1100, description: 'A/B testing, heatmaps, and conversion rate improvements.' },
  { id: 'api-integrations', category: 'all', name: 'Custom API integrations', price: 1400, description: 'Connect to third-party services and external APIs.' },
  { id: 'payments', category: 'apps', name: 'Payments setup', price: 1500, description: 'Add payment flow for subscriptions, courses, or platform transactions.' },
  { id: 'multi-role', category: 'apps', name: 'Multi-role user access', price: 2100, description: 'Add separate roles and permissions for admins, customers, staff, or partners.' },
  { id: 'advanced-analytics', category: 'apps', name: 'Advanced analytics', price: 1300, description: 'Track product activity and behavior more clearly after launch.' },
  { id: 'mobile-ready-ui', category: 'apps', name: 'Mobile-ready UI optimization', price: 1100, description: 'Improve smaller-screen experience for app-style usage.' },
  { id: 'reporting-module', category: 'systems', name: 'Reporting module', price: 1800, description: 'Add dashboards and operational reporting for better decision-making.' },
  { id: 'approval-flow', category: 'systems', name: 'Approval workflows', price: 1600, description: 'Build structured approval steps for internal operations.' },
  { id: 'data-import', category: 'systems', name: 'Data migration / import', price: 1400, description: 'Move existing data into the new system more smoothly.' },
  { id: 'reels-content', category: 'marketing', name: 'Short-form content pack', price: 500, description: 'Add extra creative content support for visibility and engagement.' },
  { id: 'lead-automation', category: 'marketing', name: 'Lead automation setup', price: 900, description: 'Improve follow-up so leads do not go cold after initial contact.' },
  { id: 'landing-pack', category: 'marketing', name: 'Landing page pack', price: 1100, description: 'Support campaigns with focused landing experiences.' },
  { id: 'deployment-support', category: 'support', name: 'Deployment support', price: 250, description: 'Support around launch, hosting, DNS, or production updates.' },
  { id: 'priority-hours', category: 'support', name: 'Priority support hours', price: 400, description: 'Reserve faster-response support capacity each month.' },
];

type ServiceSelectId = 'web-app' | 'systems' | 'ai' | 'support';

const SERVICE_SELECTOR_CARDS: Array<{
  id: ServiceSelectId;
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    id: 'web-app',
    title: 'Web & App Development',
    description: 'Build modern websites and applications that help businesses grow, generate leads, and serve customers better.',
    icon: MonitorSmartphone,
  },
  {
    id: 'systems',
    title: 'Business Systems & Solutions',
    description: 'Custom internal systems, dashboards, portals, and workflow tools that organize operations and improve efficiency.',
    icon: LayoutDashboard,
  },
  {
    id: 'ai',
    title: 'AI & Automation',
    description: 'Streamline workflows, automate repetitive tasks, and leverage AI to improve speed, productivity, and decision-making.',
    icon: Bot,
  },
  {
    id: 'support',
    title: 'Support & Retainers',
    description: 'Ongoing support, improvements, maintenance, and technical partnership to keep your systems secure and evolving.',
    icon: LifeBuoy,
  },
];

const SERVICE_ID_TO_CATEGORY: Record<ServiceSelectId, keyof typeof PACKAGES> = {
  'web-app': 'websites',
  systems: 'systems',
  ai: 'ai-automation',
  support: 'support',
};

const NON_AI_PACKAGES: Record<Exclude<ServiceSelectId, 'ai'>, ServicePackage[]> = {
  'web-app': [
    {
      id: 'ecommerce-complete',
      title: 'Complete E-commerce System',
      price: '$900',
      timeline: '3-4 weeks',
      support: '30 days included',
      description: 'Launch a full online store to sell, manage orders, and grow revenue.',
      valueLine: 'Store ready to sell from day one—no hidden costs.',
      featuresDetailed: [
        { feature: 'Scope', detail: 'Single-vendor store with custom structure' },
        { feature: 'Platform', detail: 'Custom Laravel/Node stack, built to scale' },
        { feature: 'Design', detail: 'Modern, conversion-focused theme' },
        { feature: 'Mobile Optimization', detail: 'Fully responsive across devices' },
        { feature: 'Products & Catalog', detail: 'Unlimited products, categories, filtering' },
        { feature: 'Checkout & Payments', detail: 'Secure cart + Stripe/local gateways' },
        { feature: 'Orders & Inventory', detail: 'Admin dashboard, stock basics, notifications' },
        { feature: 'Accounts', detail: 'Admin/Staff/Customer roles with order history' },
        { feature: 'SEO & Performance', detail: 'Meta, fast load, optimized assets' },
        { feature: 'Analytics', detail: 'Google Analytics + sales tracking' },
        { feature: 'Backup & Security', detail: 'SSL, basic security, backups' },
        { feature: 'Training & Support', detail: 'Store management training + 30 days support' },
      ],
    },
    {
      id: 'web-presence',
      title: 'Online Presence System',
      price: '$500',
      timeline: '2-3 weeks',
      support: '30 days included',
      description: 'Professional website that represents your brand and captures inquiries.',
      valueLine: 'Get found online and convert visitors into leads.',
      featuresDetailed: [
        { feature: 'Scope', detail: 'Up to 7 pages (Home, About, Services, Contact, etc.)' },
        { feature: 'CMS', detail: 'WordPress setup with guided structure' },
        { feature: 'Design', detail: 'Clean, modern, conversion-oriented layout' },
        { feature: 'Mobile & Performance', detail: 'Responsive + optimized assets' },
        { feature: 'Lead Capture', detail: 'Contact forms and WhatsApp handoff' },
        { feature: 'SEO Basics', detail: 'Meta tags, structure, Google indexing ready' },
        { feature: 'Analytics', detail: 'Google Analytics configured' },
        { feature: 'Notifications', detail: 'Email alerts for new leads' },
        { feature: 'Training & Handover', detail: 'Basic CMS training, ownership transfer' },
        { feature: 'Support', detail: '30 days post-launch support' },
      ],
    },
  ],
  systems: [
    {
      id: 'custom-systems',
      title: 'Custom Business Solutions',
      price: 'Custom Quote',
      timeline: 'Scoped with you',
      support: 'Support included',
      description: 'Tailored systems and automation for your operations.',
      valueLine: 'Purpose-built platforms that streamline your workflows.',
      featuresDetailed: [
        { feature: 'Discovery', detail: 'Business workflow analysis and requirements' },
        { feature: 'Architecture', detail: 'Custom system design and database structure' },
        { feature: 'Development', detail: 'Backend, dashboards, user roles, and APIs' },
        { feature: 'Integrations', detail: 'Connect CRMs, finance, and internal tools' },
        { feature: 'Automation', detail: 'Process automation and notifications' },
        { feature: 'Deployment', detail: 'Cloud setup, testing, and optimization' },
        { feature: 'Training', detail: 'Team onboarding and documentation' },
        { feature: 'Support', detail: 'Ongoing guidance and optimization' },
      ],
    },
  ],
  support: [
    {
      id: 'care-plan',
      title: 'Care Plan',
      price: '$250 / month',
      timeline: 'Ongoing',
      support: 'Standard email/WhatsApp',
      description: 'Best for small businesses & startups seeking peace of mind after launch.',
      valueLine: 'Keep your system healthy with light-touch care.',
      featuresDetailed: [
        { feature: 'Updates & Maintenance', detail: 'Core system patches and routine upkeep' },
        { feature: 'Bug Fixes', detail: 'Reactive fixes for issues that surface' },
        { feature: 'Small Changes', detail: 'Minor UI/content tweaks as needed' },
        { feature: 'Health Check', detail: 'Monthly stability review' },
      ],
    },
    {
      id: 'growth-partner',
      title: 'Growth Partner',
      price: '$850 / month',
      timeline: 'Ongoing',
      support: 'Priority channels',
      description: 'Recommended for growing businesses needing a reliable technical partner.',
      valueLine: 'Proactive improvements with faster response.',
      featuresDetailed: [
        { feature: 'Priority Bug Fixes', detail: 'Accelerated handling of production issues' },
        { feature: 'Monthly Improvements', detail: 'Performance tuning and optimizations' },
        { feature: 'Feature Enhancements', detail: 'Small incremental improvements each month' },
        { feature: 'Strategic Guidance', detail: 'Technical consulting aligned to business goals' },
        { feature: 'Deployment Support', detail: 'Help pushing updates to production' },
        { feature: 'Turnaround', detail: 'Reduced lead times on requested changes' },
      ],
    },
    {
      id: 'priority-support',
      title: 'Priority Support',
      price: '$1,800 / month',
      timeline: 'Ongoing',
      support: 'Dedicated coordination',
      description: 'For mission-critical systems needing rapid-response care.',
      valueLine: 'Fastest response and managed improvement backlog.',
      featuresDetailed: [
        { feature: 'Priority Queue', detail: 'Requests go to the front of the line' },
        { feature: 'Dedicated Coordination', detail: 'Personalized management of support tickets' },
        { feature: 'System Monitoring', detail: 'Active monitoring to catch issues early' },
        { feature: 'Improvement Backlog', detail: 'We manage and execute your enhancement list' },
        { feature: 'Faster Delivery', detail: 'Accelerated timelines for critical updates' },
        { feature: 'Ongoing Support', detail: 'Continuous care for complex environments' },
      ],
    },
    {
      id: 'custom-support',
      title: 'Custom Support',
      price: 'Custom Quote',
      timeline: 'Scoped with you',
      support: 'Enterprise-grade',
      description: 'Tailored plans for specific infrastructure, compliance, or high-volume needs.',
      valueLine: 'Design a dedicated team and SLA around your stack.',
      featuresDetailed: [
        { feature: 'Tailored SLA', detail: 'Response/uptime targets matched to your risk profile' },
        { feature: 'Dedicated Team', detail: 'Long-term team sized to your workload' },
        { feature: 'Compliance & Security', detail: 'Support for industry/regional requirements' },
        { feature: 'Custom Scope', detail: 'Mix of monitoring, automation upkeep, and feature work' },
      ],
    },
  ],
};

type AiPackageCard = {
  id: 'core' | 'advanced' | 'diamond' | 'custom';
  title: string;
  description?: string;
  price: string;
  badge?: string;
  bestFor: string;
  timeline?: string;
  support?: string;
  features: string[];
  featuresDetailed?: { feature: string; detail: string }[];
  valueLine: string;
  cta: string;
  highlighted?: boolean;
  type?: 'custom';
};

type ServicePackage = {
  id: string;
  title: string;
  price: string;
  timeline: string;
  support?: string;
  description?: string;
  valueLine?: string;
  featuresDetailed: { feature: string; detail: string }[];
};

const AI_PACKAGE_CARDS: AiPackageCard[] = [
    {
      id: 'core',
      title: 'Core AI Package',
      price: '$650',
      bestFor: 'small businesses starting with AI automation',
      description: 'Essential automation for small businesses.',
      timeline: '3-6 weeks',
      support: '45 days included',
      features: [],
      featuresDetailed: [
        { feature: 'AI Chatbot', detail: 'Website or WhatsApp assistant for frontline questions' },
        { feature: 'Lead Capture', detail: 'Forms and WhatsApp handoff into inbox/CRM' },
        { feature: 'Basic CRM Setup', detail: 'Simple pipeline, contact records, notifications' },
        { feature: 'Automated Responses', detail: 'Auto-acknowledge and follow-ups for new leads' },
      ],
      valueLine: 'Faster response, less manual work, better lead handling',
      cta: 'Get Started',
    },
    {
    id: 'advanced',
    title: 'Advanced + Agentic AI',
    price: '$1,000',
    badge: 'Most Popular',
    bestFor: 'businesses ready to scale with intelligent automation',
      description: 'Scale AI with decision-making and smarter workflows.',
      timeline: '4-8 weeks',
      support: '60 days included',
      features: [],
      featuresDetailed: [
        { feature: 'AI Sales Assistant', detail: 'Qualify leads, script follow-ups, book calls' },
        { feature: 'Multi-step Workflows', detail: 'Decisioned automations across your tools' },
        { feature: 'AI CRM Enhancements', detail: 'Lead scoring, smart routing, tasking' },
        { feature: 'Analytics Dashboard', detail: 'Response times, funnel insights, win rates' },
      ],
      valueLine: 'Higher conversions, smarter workflows, stronger automation',
      cta: 'Get Started',
      highlighted: true,
    },
    {
      id: 'diamond',
      title: 'Diamond Enterprise',
      price: '$2,000',
      bestFor: 'businesses that want full automation & advanced AI',
      description: 'Full-stack automation for enterprise-grade solutions.',
      timeline: '8-12 weeks',
      support: '90 days priority',
      features: [],
      featuresDetailed: [
        { feature: 'Full AI System Integration', detail: 'Custom backend/APIs plus RAG or agentic flows' },
        { feature: 'Advanced Automation', detail: 'End-to-end processes with human-in-the-loop controls' },
        { feature: 'AI Call Agent', detail: 'Voice bot for inbound/outbound, bookings, and updates' },
        { feature: 'Cloud Setup & Scaling', detail: 'Deployment, monitoring, optimization, priority support' },
      ],
      valueLine: 'Complete automation, scalable infrastructure, maximum efficiency',
      cta: 'Request Proposal',
    },
    {
      id: 'custom',
      title: 'Custom Business Solutions',
      price: 'Custom Quote',
      type: 'custom',
      bestFor: 'complex or enterprise requirements',
      description: 'Tailored solutions for your unique business needs.',
      timeline: 'Scoping and support included',
      support: 'Enterprise support',
      features: [],
      featuresDetailed: [
        { feature: 'Custom proposal creation', detail: 'Built around your goals and constraints' },
        { feature: 'Full system integration', detail: 'End-to-end integration across your stack' },
        { feature: 'Ongoing support & consultation', detail: 'Continuous guidance and optimization' },
      { feature: 'Tailored business solutions', detail: 'Solution design unique to your operations' },
    ],
    valueLine: 'Purpose-built engagement for your exact needs',
    cta: 'Request Proposal',
  },
];

const COMPARISON_ROWS = [
  { key: 'strategy', label: 'Strategy & planning' },
  { key: 'design', label: 'Design level' },
  { key: 'pages', label: 'Scope level' },
  { key: 'strategy', label: 'Strategy & planning' },
  { key: 'design', label: 'Design level' },
  { key: 'pages', label: 'Scope level' },
  { key: 'seo', label: 'SEO basics' },
  { key: 'forms', label: 'Forms / lead capture' },
  { key: 'crm', label: 'CRM integration' },
  { key: 'analytics', label: 'Analytics' },
  { key: 'chatbot', label: 'Chatbot / automation' },
  { key: 'ecommerce', label: 'E-commerce / payment logic' },
  { key: 'booking', label: 'Booking / scheduling' },
  { key: 'training', label: 'Training / handover' },
  { key: 'support', label: 'Support period' },
  { key: 'account', label: 'Account handling' },
  { key: 'handover', label: 'Ownership handover' },
];

const INITIAL_ESTIMATE = {
  category: 'websites',
  goal: 'Lead Generation Website',
  packageId: 'web-growth',
  addOns: [],
  budget: '$2,500 - $5,000',
  urgency: 'Standard',
  stage: 'Existing business improving website',
  complexity: 'Semi-custom',
};

const PRICING_SETTINGS = {
  hourlyRate: 80,
  urgencyMultiplier: { Rush: 1.5, Standard: 1.0, Flexible: 0.85 },
  complexityMultiplier: { Standard: 1.0, 'Semi-custom': 1.2, 'Fully custom': 1.4 },
  minimumMargin: 0.35,
  customAdvancedThreshold: 3,
  quoteFloor: 1200,
};

const PACKAGE_MIX_DEFAULT = {
  'web-launch': 3,
  'web-growth': 2,
  'web-authority': 1,
  'app-mvp': 0,
  'app-growth': 0,
  'sys-team': 0,
  'mkt-growth': 2,
  'sup-partner': 3,
};

const budgetBands = {
  'Under $2,500': 2500,
  '$2,500 - $5,000': 5000,
  '$5,000 - $10,000': 10000,
  '$10,000 - $25,000': 25000,
  '$25,000 - $50,000': 50000,
  '$50,000+': 100000,
};

const advancedRequirementSet = new Set([
  'dashboard',
  'portal',
  'crm',
  'erp',
  'multiRole',
  'advancedAutomation',
  'membership',
  'customPermissions',
  'complexIntegrations',
]);

function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ');
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(value);
}

function allPackagesFlat() {
  return Object.values(PACKAGES).flat();
}

function getPackageById(id: string) {
  return allPackagesFlat().find((item) => item.id === id);
}

function getCategoryById(id: string) {
  return SERVICE_CATEGORIES.find((item) => item.id === id);
}

function getAddOnsForCategory(category: string) {
  return ADD_ONS.filter((item) => item.category === category || item.category === 'all');
}

function renderValue(value: boolean | string) {
  if (value === true) return <Check className="h-4 w-4 text-red-600" />;
  if (value === false) return <X className="h-4 w-4 text-gray-300" />;
  return <span className="text-sm text-gray-600">{String(value)}</span>;
}

function calculateEstimate(estimate: typeof INITIAL_ESTIMATE, quoteState: { uniquePages?: number }) {
  const selectedPackage = getPackageById(estimate.packageId);
  const addOns = ADD_ONS.filter((item) => estimate.addOns.includes(item.id));
  const urgencyMultiplier = PRICING_SETTINGS.urgencyMultiplier[estimate.urgency as keyof typeof PRICING_SETTINGS.urgencyMultiplier] || 1;
  const complexityMultiplier = PRICING_SETTINGS.complexityMultiplier[estimate.complexity as keyof typeof PRICING_SETTINGS.complexityMultiplier] || 1;
  const packageBase = selectedPackage ? selectedPackage.startingPrice : 0;
  const addOnTotal = addOns.reduce((sum, item) => sum + item.price, 0);

  let subtotal = (packageBase + addOnTotal) * urgencyMultiplier * complexityMultiplier;

  const pageCountExtra = Math.max(0, (Number(quoteState.uniquePages) || 0) - 5) * 160;
  subtotal += pageCountExtra;

  const floor = selectedPackage?.priceFloor || PRICING_SETTINGS.quoteFloor;
  const protectedTotal = Math.max(subtotal, floor);

  const estimatedLow = Math.round(protectedTotal * 0.95);
  const estimatedHigh = Math.round(protectedTotal * 1.15);

  return {
    packageBase,
    addOnTotal,
    protectedTotal,
    estimatedLow,
    estimatedHigh,
    selectedPackage,
    addOns,
  };
}

function getRecommendedPackage({ category, goal, budget, urgency, stage, complexity }: typeof INITIAL_ESTIMATE) {
  const packages = PACKAGES[category as keyof typeof PACKAGES] || [];
  if (!packages.length) return null;

  const budgetValue = budgetBands[budget as keyof typeof budgetBands] || 0;

  const scores = packages.map((pkg) => {
    let score = 0;

    if (pkg.recommended?.includes(goal)) score += 4;
    if (pkg.featured) score += 2;

    if (stage === 'New business' && pkg.name.toLowerCase().includes('launch')) score += 3;
    if (stage === 'Existing business improving website' && (pkg.name.toLowerCase().includes('growth') || pkg.name.toLowerCase().includes('team'))) score += 3;
    if (stage === 'Scaling business' && (pkg.name.toLowerCase().includes('authority') || pkg.name.toLowerCase().includes('scale') || pkg.name.toLowerCase().includes('performance'))) score += 3;

    if (budgetValue >= pkg.startingPrice) score += 3;
    if (budgetValue < pkg.startingPrice) score -= 2;

    if (urgency === 'Rush' && pkg.timeline !== 'Monthly') score += 1;
    if (complexity === 'Fully custom' && (pkg.name.toLowerCase().includes('authority') || pkg.name.toLowerCase().includes('scale') || pkg.name.toLowerCase().includes('tailored'))) score += 3;

    return { pkg, score };
  });

  scores.sort((a, b) => b.score - a.score);
  return scores[0]?.pkg || null;
}

function getWhyRecommendation(pkg: ReturnType<typeof getPackageById>, estimate: typeof INITIAL_ESTIMATE) {
  if (!pkg) return 'A tailored consultation will help us recommend the right path.';

  const reasons: string[] = [];
  if (pkg.recommended?.includes(estimate.goal)) reasons.push('it matches your selected business goal');
  if (estimate.stage === 'New business' && pkg.name.toLowerCase().includes('launch')) reasons.push('it gives you a focused starting point without overbuilding');
  if (estimate.stage === 'Scaling business' && (pkg.name.toLowerCase().includes('authority') || pkg.name.toLowerCase().includes('scale') || pkg.name.toLowerCase().includes('performance'))) reasons.push('it supports a more advanced growth stage');
  if (estimate.urgency === 'Rush') reasons.push('it can be planned with your timeline in mind');
  if (estimate.complexity === 'Fully custom') reasons.push('your scope suggests a more tailored solution path');
  if (!reasons.length) reasons.push('it balances value, scope, and readiness for your current business stage');

  return `We recommend ${pkg.name} because ${reasons.join(', ')}.`;
}

function detectCustomThreshold(quoteState: { advanced: Record<string, boolean> }) {
  const selected = Object.entries(quoteState.advanced)
    .filter(([, value]) => value)
    .map(([key]) => key);
  const advancedCount = selected.filter((key) => advancedRequirementSet.has(key)).length;
  return {
    advancedCount,
    shouldPushCustom: advancedCount >= PRICING_SETTINGS.customAdvancedThreshold,
  };
}

// Accordion component for FAQ
function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <div className="space-y-3">
      {items.map((item, idx) => (
        <div key={idx} className="rounded-xl border border-gray-200 bg-white overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition"
          >
            <span className="font-semibold text-gray-900">{item.question}</span>
            <ChevronDown className={cn("h-5 w-5 text-gray-500 transition-transform", openIndex === idx && "rotate-180")} />
          </button>
          {openIndex === idx && (
            <div className="px-4 pb-4 text-gray-600 leading-relaxed">
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// E-commerce Package Card Component
function EcommercePackageCard({ 
  pkg, 
  isSelected, 
  onSelect 
}: { 
  pkg: typeof ECOMMERCE_PACKAGES.starter; 
  isSelected: boolean; 
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      onMouseMove={(e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (y - centerY) / 25;
        const rotateY = (centerX - x) / 25;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
      }}
      onMouseLeave={(e) => {
        const card = e.currentTarget;
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      }}
      className={cn(
        'group relative rounded-2xl border-2 p-6 text-left transition-all duration-300 ease-out h-full flex flex-col',
        isSelected
          ? 'border-red-500 bg-red-50 shadow-xl shadow-red-500/10'
          : 'border-gray-200 bg-white hover:border-red-300 hover:shadow-2xl hover:shadow-gray-200/50'
      )}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      {/* Shine effect */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/20 via-transparent to-transparent" />
      
      <div className="relative flex-1 flex flex-col" style={{ transform: 'translateZ(20px)' }}>
        {/* Badge */}
        <div className={cn('inline-flex self-start items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold mb-4', pkg.badgeColor)}>
          <Star className="h-3.5 w-3.5" /> {pkg.badge}
        </div>
        
        {/* Title & Description */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{pkg.shortDescription}</p>
        
        {/* Best For */}
        <div className="text-xs uppercase tracking-wider text-gray-500 mb-1">Best for</div>
        <p className="text-sm font-medium text-gray-700 mb-4">{pkg.bestFor}</p>
        
        {/* Price & Timeline */}
        <div className="rounded-xl border border-gray-200 bg-gray-50 p-4 mb-5">
          <div className="text-xs uppercase tracking-wider text-gray-500">Starting from</div>
          <div className="mt-1 text-3xl font-black text-gray-900">{pkg.price}</div>
          <div className="mt-3 flex items-center gap-2 text-sm text-gray-600">
            <Clock3 className="h-4 w-4 text-red-600" /> {pkg.timeline}
          </div>
          <div className="mt-1 flex items-center gap-2 text-sm text-gray-600">
            <ShieldCheck className="h-4 w-4 text-red-600" /> {pkg.support} support
          </div>
        </div>
        
        {/* Key Features */}
        <div className="space-y-2 flex-1">
          {pkg.keyFeatures.map((feature) => (
            <div key={feature} className="flex items-start gap-2 text-sm text-gray-700">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        
        {/* Button */}
        <div className={cn(
          'mt-6 rounded-xl border px-4 py-3 text-sm font-semibold text-center transition-all duration-300',
          isSelected 
            ? 'border-red-500 bg-red-600 text-white' 
            : 'border-gray-200 bg-gray-50 text-gray-700 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600'
        )}>
          {isSelected ? 'Selected' : 'Select Package'}
        </div>
      </div>
    </button>
  );
}

// E-commerce Package Section Component
function EcommercePackageSection({ openQuoteWizard }: { openQuoteWizard: () => void }) {
  const [selectedPackage, setSelectedPackage] = useState<'starter' | 'growth' | 'enterprise'>('growth');
  const currentPkg = ECOMMERCE_PACKAGES[selectedPackage];

  return (
    <section className="bg-gray-50 py-16 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700 mb-4">
            <ShoppingCart className="h-4 w-4" />
            E-commerce Solutions
          </div>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Choose Your Store Package</h2>
          <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
            Select the package that fits your business needs. All packages include design, development, and post-launch support.
          </p>
        </div>

        {/* Package Cards Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-12">
          {/* Starter */}
          <EcommercePackageCard
            pkg={ECOMMERCE_PACKAGES.starter}
            isSelected={selectedPackage === 'starter'}
            onSelect={() => setSelectedPackage('starter')}
          />
          
          {/* Growth */}
          <EcommercePackageCard
            pkg={ECOMMERCE_PACKAGES.growth}
            isSelected={selectedPackage === 'growth'}
            onSelect={() => setSelectedPackage('growth')}
          />
          
          {/* Enterprise */}
          <EcommercePackageCard
            pkg={ECOMMERCE_PACKAGES.enterprise}
            isSelected={selectedPackage === 'enterprise'}
            onSelect={() => setSelectedPackage('enterprise')}
          />
          
          {/* Custom Solution CTA */}
          <button
            onClick={openQuoteWizard}
            className="group relative rounded-2xl border-2 border-dashed border-gray-300 p-6 text-left transition-all duration-300 hover:border-red-400 hover:bg-red-50 h-full flex flex-col"
          >
            <div className="flex-1 flex flex-col">
              <div className="inline-flex self-start items-center gap-2 rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600 mb-4">
                <Cpu className="h-3.5 w-3.5" /> Custom Solution
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-2">Need Something Different?</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed flex-1">
                Complex requirements? Multi-vendor marketplace? Headless commerce? Let&apos;s build exactly what you need.
              </p>
              
              <div className="space-y-2 mb-6">
                {[
                  'Custom feature development',
                  'Complex integrations',
                  'Dedicated project team',
                  'Flexible timeline',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <Plus className="mt-0.5 h-4 w-4 shrink-0 text-gray-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-auto rounded-xl border-2 border-red-200 bg-white px-4 py-3 text-sm font-semibold text-center text-red-600 group-hover:bg-red-600 group-hover:text-white group-hover:border-red-600 transition-all duration-300">
                Request Custom Proposal <ArrowRight className="inline h-4 w-4 ml-1" />
              </div>
            </div>
          </button>
        </div>

        {/* Dynamic Package Details */}
        <div className="transition-all duration-500 ease-out">
          {/* Details Header */}
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{currentPkg.title} Details</h3>
              <p className="mt-1 text-gray-600">{currentPkg.shortDescription}</p>
            </div>
            <div className="text-right">
              <div className="text-3xl font-bold text-gray-900">{currentPkg.price}</div>
              <div className="text-sm text-gray-500">{currentPkg.timeline} delivery</div>
            </div>
          </div>

          {/* Features Table */}
          <div className="mb-8 rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="bg-gray-900 px-6 py-4">
              <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                <Layers3 className="h-5 w-5" /> Complete Feature List - {currentPkg.fullFeatures.length} Features
              </h4>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold text-gray-500 w-12">#</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-500">Feature</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-500">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {currentPkg.fullFeatures.map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 font-medium text-gray-400">{idx + 1}</td>
                      <td className="px-6 py-4 font-semibold text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-gray-600">{row.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Deliverables & Support */}
          <div className="grid gap-6 lg:grid-cols-2 mb-8">
            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-100 text-green-600">
                  <Target className="h-5 w-5" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">What You Get</h4>
              </div>
              <div className="space-y-3">
                {currentPkg.deliverables.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-100 text-red-600">
                  <Rocket className="h-5 w-5" />
                </div>
                <h4 className="text-xl font-bold text-gray-900">Package Includes</h4>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { icon: Clock3, text: `${currentPkg.timeline} delivery` },
                  { icon: ShieldCheck, text: `${currentPkg.support} support` },
                  { icon: Users, text: 'Dedicated project manager' },
                  { icon: MessageSquare, text: 'Regular progress updates' },
                  { icon: FileText, text: 'Full documentation' },
                  { icon: Zap, text: 'Training included' },
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                      <Icon className="h-5 w-5 text-red-500 shrink-0" />
                      <span className="text-sm font-medium text-gray-700">{item.text}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <button
              onClick={openQuoteWizard}
              className="inline-flex items-center gap-2 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white hover:bg-red-700 transition shadow-lg"
            >
              Get Started with {currentPkg.title} <ArrowRight className="h-5 w-5" />
            </button>
            <p className="mt-4 text-sm text-gray-500">{currentPkg.support} support included. Full ownership handover.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AiAutomationSection({ openQuoteWizard }: { openQuoteWizard: () => void }) {
  const [selectedPackage, setSelectedPackage] = useState<string>('Advanced');

  return (
    <section className="bg-gray-50 border-b border-gray-100">
      {/* Featured Package */}
      <div className="bg-white py-16 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 mb-4">
              <Sparkles className="h-4 w-4" />
              Featured AI Package
            </div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">AI & Automation System</h2>
            <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
              Intelligent automation solutions that streamline your workflows, reduce manual tasks, and leverage AI to boost productivity.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <div className="text-4xl font-bold text-gray-900">$2,500</div>
              <div className="text-left">
                <div className="text-sm text-gray-500">Perfect for</div>
                <div className="font-medium text-gray-700">Growing businesses ready to automate</div>
              </div>
            </div>
          </div>

          {/* Features Table */}
          <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="bg-gray-900 px-6 py-4">
              <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                <Layers3 className="h-5 w-5" /> What's Included - 12 Features
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left font-semibold text-gray-500 w-12">#</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-500">Feature</th>
                    <th className="px-6 py-3 text-left font-semibold text-gray-500">Details</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    { feature: 'Scope', details: 'Custom AI workflow design & implementation' },
                    { feature: 'AI Integration', details: 'ChatGPT, Claude, or custom AI model integration' },
                    { feature: 'Automation', details: 'Zapier/Make.com workflow automation setup' },
                    { feature: 'Data Processing', details: 'Automated data extraction & processing pipelines' },
                    { feature: 'Chatbot', details: 'AI-powered customer support chatbot' },
                    { feature: 'Document AI', details: 'Automated document processing & summarization' },
                    { feature: 'Email Automation', details: 'Smart email responses & categorization' },
                    { feature: 'Analytics', details: 'AI-powered insights dashboard' },
                    { feature: 'Integration', details: 'Connect with existing tools (CRM, email, etc.)' },
                    { feature: 'Training', details: 'Team training on AI tools & workflows' },
                    { feature: 'Timeline', details: '3-4 weeks delivery' },
                    { feature: 'Support', details: '60 days post-launch support' },
                  ].map((row, idx) => (
                    <tr key={idx} className="hover:bg-gray-50 transition">
                      <td className="px-6 py-4 font-medium text-gray-400">{idx + 1}</td>
                      <td className="px-6 py-4 font-semibold text-gray-900">{row.feature}</td>
                      <td className="px-6 py-4 text-gray-600">{row.details}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* AI Solutions Grid */}
      <div className="py-16 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">AI Solutions We Build</h2>
            <p className="mt-4 text-gray-600 text-lg">Choose from 12 AI capabilities or combine them for maximum impact</p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {AI_SOLUTIONS.map((solution) => {
              const Icon = solution.icon;
              return (
                <div key={solution.id} className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-lg hover:border-red-200 transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600 shrink-0">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{solution.name}</h3>
                      <p className="mt-1 text-sm text-gray-600">{solution.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Consultancy Block */}
      <div className="py-16 border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Not Sure Where AI Fits?</h2>
            <p className="mt-4 text-gray-600 text-lg">Let's figure out the best approach together</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-blue-50 to-blue-100 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-white mb-4">
                <HelpCircle className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Strategy Session</h3>
              <p className="text-gray-700 mb-4">1-hour discovery call to identify AI opportunities in your business</p>
              <button onClick={openQuoteWizard} className="text-sm font-semibold text-blue-600 hover:text-blue-700">Schedule Now →</button>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-purple-50 to-purple-100 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-white mb-4">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Custom Audit</h3>
              <p className="text-gray-700 mb-4">Deep dive into your processes to find the highest-impact automation opportunities</p>
              <button onClick={openQuoteWizard} className="text-sm font-semibold text-purple-600 hover:text-purple-700">Request Audit →</button>
            </div>

            <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-green-50 to-green-100 p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-600 text-white mb-4">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Roadmap Building</h3>
              <p className="text-gray-700 mb-4">Create a phased AI implementation plan tailored to your goals and budget</p>
              <button onClick={openQuoteWizard} className="text-sm font-semibold text-green-600 hover:text-green-700">Build Roadmap →</button>
            </div>
          </div>
        </div>
      </div>

      {/* Package Selection */}
      <div className="py-16 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Choose Your AI Package</h2>
            <p className="mt-4 text-gray-600 text-lg">Scale your automation as your business grows</p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {AI_PACKAGES.map((pkg) => (
              <button
                key={pkg.name}
                onClick={() => setSelectedPackage(pkg.name)}
                className={cn(
                  'relative rounded-2xl border-2 p-8 text-left transition-all duration-300',
                  selectedPackage === pkg.name
                    ? 'border-red-500 bg-red-50 shadow-xl shadow-red-500/10'
                    : 'border-gray-200 bg-white hover:border-red-300'
                )}
              >
                {pkg.highlighted && (
                  <div className="absolute top-4 right-4 rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
                    Most Popular
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{pkg.description}</p>
                <div className="text-2xl font-bold text-gray-900 mb-6">{pkg.price}</div>
                
                <div className="space-y-2">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <Check className="h-4 w-4 text-red-600 shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Before/After Comparison */}
      <div className="py-16 border-b border-gray-100 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl text-center mb-12">Transform Your Operations</h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 text-red-600 text-sm font-bold">✕</div>
                Before AI
              </h3>
              <div className="space-y-4">
                {[
                  'Manual, repetitive tasks eating up time',
                  'Slow response to customer inquiries',
                  'Data scattered across multiple tools',
                  'Human errors in routine processes',
                  'Limited capacity to scale operations',
                  'No insights from business data',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-red-50 border border-red-100">
                    <X className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-600 text-sm font-bold">✓</div>
                After AI
              </h3>
              <div className="space-y-4">
                {[
                  'Automated workflows running 24/7',
                  'Instant AI-powered customer responses',
                  'Centralized, automated data processing',
                  'Error-free automated processes',
                  'Scalable infrastructure ready to grow',
                  'AI-driven insights & recommendations',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-4 rounded-lg bg-green-50 border border-green-100">
                    <CheckCircle2 className="h-5 w-5 text-green-600 shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-16 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Why Choose Us for AI?</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Sparkles, title: 'AI Experts', desc: 'Deep expertise in ChatGPT, Claude, and custom AI' },
              { icon: Zap, title: 'Fast Implementation', desc: 'Get AI running in your business within weeks' },
              { icon: Users, title: 'Full Support', desc: 'Dedicated team to train and support your team' },
              { icon: TrendingUp, title: 'ROI Focused', desc: 'Every automation is designed for measurable impact' },
            ].map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="rounded-xl border border-gray-200 bg-white p-6 text-center hover:shadow-lg transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600 mx-auto mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="py-16 bg-gradient-to-r from-red-50 to-red-100">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-4">Ready to Transform Your Business with AI?</h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your automation goals and create a custom plan to streamline your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openQuoteWizard}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-8 py-4 text-lg font-semibold text-white hover:bg-red-700 transition-colors duration-300"
            >
              Get Your AI Strategy <ArrowRight className="h-5 w-5" />
            </button>
            <button
              onClick={openQuoteWizard}
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-red-600 px-8 py-4 text-lg font-semibold text-red-600 hover:bg-red-50 transition-colors duration-300"
            >
              Schedule Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PublicPage({ estimate, setEstimate, openQuoteWizard }: { 
  estimate: typeof INITIAL_ESTIMATE; 
  setEstimate: React.Dispatch<React.SetStateAction<typeof INITIAL_ESTIMATE>>; 
  openQuoteWizard: () => void 
}) {
  const [selectedService, setSelectedService] = useState<ServiceSelectId>('ai');
  const mappedCategory = SERVICE_ID_TO_CATEGORY[selectedService];
  const addOns = mappedCategory ? getAddOnsForCategory(mappedCategory) : [];

  useEffect(() => {
    if (!mappedCategory) return;
    const packagesForCategory = PACKAGES[mappedCategory] || [];
    const fallback = packagesForCategory.find((item) => item.featured) || packagesForCategory[0];
    setEstimate((prev) => ({
      ...prev,
      category: mappedCategory,
      packageId: fallback?.id || prev.packageId,
      addOns: prev.addOns.filter((item) => addOns.some((addon) => addon.id === item)),
    }));
  }, [mappedCategory, addOns, setEstimate]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-red-50 border-b border-gray-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(220,38,38,0.08),transparent_50%)]" />
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24 relative">
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700">
                <Sparkles className="h-4 w-4" />
                Full-Service Software Solutions Provider
              </div>

              <h1 className="max-w-4xl text-4xl font-black leading-tight text-gray-900 md:text-5xl lg:text-6xl text-balance">
                Build the right <span className="text-red-600">digital solution</span> for your business
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-gray-600 leading-relaxed">
                From websites and e-commerce to custom applications, CRM systems, and workflow automation. We deliver complete software solutions that drive real business results.
              </p>
              
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={openQuoteWizard}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3.5 font-semibold text-white transition hover:bg-red-700 shadow-lg shadow-red-600/25"
                >
                  Get Instant Estimate <Calculator className="h-4 w-4" />
                </button>
                <button
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-900 bg-white px-6 py-3.5 font-semibold text-gray-900 transition hover:bg-gray-900 hover:text-white"
                >
                  Book Strategy Call <Phone className="h-4 w-4" />
                </button>
              </div>
              
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-600" /> 200+ projects delivered</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-600" /> 98% client satisfaction</div>
                <div className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-red-600" /> Transparent pricing</div>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-xl">
              <div className="mb-4 flex items-center gap-2 text-red-600">
                <Rocket className="h-5 w-5" />
                <span className="font-semibold">Quick Start Guide</span>
              </div>
              <div className="space-y-4">
                {[
                  ['Choose your solution', 'Select the service that matches your business needs.'],
                  ['Get instant estimate', 'See transparent pricing based on your requirements.'],
                  ['Request your proposal', 'We will prepare a detailed proposal within 24 hours.'],
                ].map(([title, body], idx) => (
                  <div key={title} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">{idx + 1}</div>
                      <div>
                        <div className="font-semibold text-gray-900">{title}</div>
                        <div className="text-sm text-gray-600">{body}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logo Strip */}
      <section className="border-b border-gray-100 bg-white py-8">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center text-sm font-medium text-gray-500 mb-6">Trusted by growing businesses</div>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {CLIENT_LOGOS.map((logo) => (
              <div key={logo} className="text-lg font-bold text-gray-300 hover:text-gray-400 transition">
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Zapps Section */}
      <section id="packages-section" className="bg-white py-16 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-sm font-semibold uppercase tracking-wider text-red-600 mb-3">Why Zapps Consulting</div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">A reliable partner for your digital projects</h2>
            <p className="mt-4 text-gray-600 text-lg">We combine technical expertise with business understanding to deliver solutions that actually work.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Shield, title: 'Proven Process', desc: 'Structured discovery, clear milestones, and regular updates throughout your project.' },
              { icon: Users, title: 'Dedicated Team', desc: 'Senior developers and designers assigned to your project from start to finish.' },
              { icon: Clock3, title: 'On-Time Delivery', desc: '95% of projects delivered on schedule with realistic timelines set upfront.' },
              { icon: Headphones, title: 'Ongoing Support', desc: 'Post-launch support included with every project, plus optional care plans.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-6 hover:shadow-lg transition">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-600 mb-4">
                  <item.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem-Based Entry Points */}
      <section className="bg-gray-50 py-16 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-sm font-semibold uppercase tracking-wider text-red-600 mb-3">Start from your challenge</div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">What problem are you solving?</h2>
            <p className="mt-4 text-gray-600 text-lg">Tell us what you need, and we will point you to the right solution.</p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {PROBLEM_CARDS.map((card) => (
              <button
                key={card.problem}
                onClick={() => setEstimate((prev) => ({ ...prev, category: card.solution }))}
                className="rounded-xl border border-gray-200 bg-white p-6 text-left hover:border-red-300 hover:shadow-lg transition group"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-50 text-red-600 mb-4 group-hover:bg-red-100 transition">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.problem}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{card.description}</p>
                <div className="inline-flex items-center gap-1 text-red-600 text-sm font-medium">
                  View solutions <ArrowRight className="h-4 w-4" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-red-600 mb-3">Proof of results</div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Recent success stories</h2>
            </div>
            <button className="text-red-600 font-medium hover:text-red-700 inline-flex items-center gap-1">
              View all case studies <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {CASE_STUDIES.map((study) => (
              <div key={study.client} className="rounded-xl border border-gray-200 bg-white overflow-hidden hover:shadow-lg transition group">
                <div className="aspect-[4/3] bg-gradient-to-br from-red-100 to-red-50 flex items-center justify-center">
                  <Building2 className="h-16 w-16 text-red-200" />
                </div>
                <div className="p-6">
                  <div className="text-sm text-red-600 font-medium mb-1">{study.industry}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{study.client}</h3>
                  <div className="text-2xl font-bold text-gray-900 mb-3">{study.result}</div>
                  <p className="text-gray-600 text-sm leading-relaxed">{study.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center mb-12">
            <div className="text-sm font-semibold uppercase tracking-wider text-red-600 mb-3">Client feedback</div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">What our clients say</h2>
          </div>
          
          <div className="grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <div key={testimonial.name} className="rounded-xl border border-gray-200 bg-white p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6">"{testimonial.quote}"</p>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600 font-semibold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Selector */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 max-w-3xl">
            <div className="text-sm font-semibold uppercase tracking-wider text-red-600 mb-3">Services</div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Choose your focus area</h2>
            <p className="mt-4 text-gray-600 text-lg">Select the service to view the aligned packages and details.</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICE_SELECTOR_CARDS.map((item) => {
              const Icon = item.icon;
              const active = selectedService === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setSelectedService(item.id)}
                  onMouseMove={(e) => {
                    const card = e.currentTarget;
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = (y - centerY) / 25;
                    const rotateY = (centerX - x) / 25;
                    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                  }}
                  onMouseLeave={(e) => {
                    const card = e.currentTarget;
                    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
                  }}
                  className={cn(
                    'group relative h-full rounded-2xl border-2 p-8 text-left transition-all duration-300 ease-out',
                    active
                      ? 'border-red-500 bg-red-50 shadow-xl shadow-red-500/10'
                      : 'border-gray-200 bg-white hover:-translate-y-1 hover:border-red-300 hover:shadow-2xl hover:shadow-gray-200/60'
                  )}
                  style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
                  role="option"
                  aria-selected={active}
                >
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-white/30 via-transparent to-transparent" />
                  <div className="relative space-y-3" style={{ transform: 'translateZ(30px)' }}>
                    <div className="flex items-center justify-between">
                      <div className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300",
                        active 
                          ? "bg-red-600 text-white shadow-lg shadow-red-500/30" 
                          : "bg-gray-100 text-gray-700 group-hover:bg-red-100 group-hover:text-red-700"
                      )}>
                        <Icon className="h-6 w-6" />
                      </div>
                      {active && (
                        <div className="rounded-full bg-red-600 px-4 py-1.5 text-xs font-semibold text-white shadow-md">
                          Selected
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <ServiceContent selectedService={selectedService} openQuoteWizard={openQuoteWizard} />

      {/* FAQ Section */}
      <section className="bg-gray-50 py-16 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="text-sm font-semibold uppercase tracking-wider text-red-600 mb-3">FAQ</div>
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Common questions</h2>
              <p className="mt-4 text-gray-600 text-lg mb-8">Everything you need to know before getting started.</p>
              
              <Accordion items={[
                { question: 'How accurate is the estimate?', answer: 'The estimate provides a strong starting range based on package logic, add-ons, timeline, and complexity. Final pricing is confirmed after we review your specific requirements during the proposal phase.' },
                { question: 'What if my project is custom?', answer: 'If your requirements go beyond a standard package, we will guide you toward a custom proposal. This ensures you get exactly what you need without being forced into a package that does not fit.' },
                { question: 'Can I start small and scale later?', answer: 'Absolutely. Many clients begin with a focused build (like an MVP or basic website) and then add features, integrations, or automation as their business grows and needs evolve.' },
                { question: 'Do you offer payment plans?', answer: 'For larger projects, we can discuss phased payment structures during the proposal review. Typically, projects are split into milestone-based payments.' },
                { question: 'What is included in support?', answer: 'Every project includes a post-launch support period (30-90 days depending on package). This covers bug fixes, minor adjustments, and questions. Ongoing support retainers are available for continued partnership.' },
                { question: 'How long does a typical project take?', answer: 'Timelines vary by package: basic websites in 1-2 weeks, growth packages in 2-4 weeks, and complex applications in 8-20 weeks. We will confirm realistic timelines during scoping.' },
              ]} />
            </div>
            
            <div className="lg:pl-8">
              <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm sticky top-32">
                <div className="text-sm font-semibold uppercase tracking-wider text-red-600 mb-3">Ready to start?</div>
                <h3 className="text-2xl font-bold text-gray-900">Get your custom proposal</h3>
                <p className="mt-4 text-gray-600">Answer a few questions and receive a detailed proposal within 24 hours.</p>
                <div className="mt-6 space-y-3">
                  <button 
                    onClick={openQuoteWizard}
                    className="w-full rounded-xl bg-red-600 px-5 py-4 font-semibold text-white hover:bg-red-700 transition"
                  >
                    Get Instant Estimate
                  </button>
                  <button className="w-full rounded-xl border-2 border-gray-900 bg-white px-5 py-4 font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition">
                    Book Strategy Call
                  </button>
                  <button className="w-full rounded-xl border border-gray-300 bg-white px-5 py-4 font-semibold text-gray-700 hover:bg-gray-50 transition">
                    Request Custom Proposal
                  </button>
                </div>
                <div className="mt-6 text-center text-sm text-gray-500">
                  Or call us at <span className="font-semibold text-gray-900">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-900 to-red-950 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">Ready to build your next project?</h2>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Join hundreds of businesses who have trusted Zapps Consulting to deliver their digital solutions. Let us show you what is possible.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <button 
              onClick={openQuoteWizard}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-8 py-4 font-semibold text-white hover:bg-red-500 transition shadow-lg"
            >
              Get Instant Estimate <Calculator className="h-5 w-5" />
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white hover:bg-white/10 transition">
              Book Strategy Call <Phone className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ServiceContent({ selectedService, openQuoteWizard }: { selectedService: ServiceSelectId; openQuoteWizard: () => void }) {
  if (selectedService === 'ai') {
    return <AiAutomationPublicContent openQuoteWizard={openQuoteWizard} />;
  }

  const service = SERVICE_SELECTOR_CARDS.find((item) => item.id === selectedService);
  const servicePackages = NON_AI_PACKAGES[selectedService as Exclude<ServiceSelectId, 'ai'>] || [];
  const [selectedPackageId, setSelectedPackageId] = useState<string>(servicePackages[0]?.id || '');
  const selectedPackage = servicePackages.find((pkg) => pkg.id === selectedPackageId) || servicePackages[0];
  const categoryKey = SERVICE_ID_TO_CATEGORY[selectedService];
  const categoryData = PACKAGES_DATA[categoryKey as keyof typeof PACKAGES_DATA];
  const isSupportSection = selectedService === 'support';
  const cardGridClass = isSupportSection ? 'grid gap-6 md:grid-cols-2' : 'grid gap-6 xl:grid-cols-3';

  return (
    <section className="bg-gray-50 py-16 border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-10 text-center">
          <div className="text-sm font-semibold uppercase tracking-wider text-red-600 mb-3">{service?.title}</div>
          <h3 className="text-3xl font-bold text-gray-900">{service?.title}</h3>
          <p className="mt-3 text-gray-600 max-w-3xl mx-auto">{service?.description}</p>
        </div>

        {servicePackages.length ? (
          <>
            <div className={cardGridClass}>
            {servicePackages.map((pkg) => {
              const isSelected = selectedPackageId === pkg.id;
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackageId(pkg.id)}
                  className={cn(
                    'relative flex h-full flex-col rounded-2xl border-2 p-6 text-left shadow-sm transition-transform duration-700 ease-out hover:scale-[1.05] hover:shadow-[0_18px_45px_rgba(255,0,0,0.25)] hover:border-red-300 cursor-pointer',
                    isSelected
                      ? 'border-red-500 bg-red-50 ring-2 ring-red-500 shadow-[0_20px_45px_rgba(255,0,0,0.35)]'
                      : 'border-gray-200 bg-white hover:shadow-lg'
                  )}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedPackageId(pkg.id); } }}
                >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-xl font-bold text-gray-900">{pkg.title}</div>
                        {pkg.description && <p className="mt-2 text-sm text-gray-600">{pkg.description}</p>}
                      </div>
                    </div>

                    <div className="mt-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-xs uppercase tracking-wider text-gray-500">Price</div>
                          <div className="mt-1 text-3xl font-black text-gray-900">{pkg.price}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs uppercase tracking-wider text-gray-500">Timeline</div>
                          <div className="mt-1 text-sm font-semibold text-gray-900">{pkg.timeline}</div>
                          <div className="text-xs text-gray-500">{pkg.support || 'Support included'}</div>
                        </div>
                      </div>
                    </div>

                    {pkg.valueLine && <div className="mt-4 text-sm font-medium text-gray-900">{pkg.valueLine}</div>}

                    <div className="mt-6">
                      <button
                        onClick={(e) => { e.stopPropagation(); setSelectedPackageId(pkg.id); }}
                        className={cn(
                          'w-full rounded-xl px-4 py-3 text-sm font-semibold transition',
                          isSelected
                            ? 'bg-red-600 text-white hover:bg-red-700'
                            : 'border border-gray-300 bg-white text-gray-900 hover:border-red-400 hover:text-red-700'
                        )}
                      >
                        {isSelected ? 'Selected' : 'Select package'}
                      </button>
                      <button
                        onClick={(e) => { e.stopPropagation(); openQuoteWizard(); }}
                        className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-800 hover:border-red-300 hover:text-red-700 transition"
                      >
                        Get Estimate
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Included details */}
            {selectedPackage && (
              <section className={cn(
                'mt-12 rounded-2xl border border-gray-200 p-6 md:p-8 shadow-sm',
                isSupportSection ? 'bg-gray-50' : 'bg-white'
              )}>
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div>
                    <div className="text-sm font-semibold uppercase tracking-wider text-red-600 mb-2">Selected package</div>
                    <h4 className="text-2xl font-bold text-gray-900">{selectedPackage.title}</h4>
                    {selectedPackage.description && <p className="mt-2 text-sm text-gray-600">{selectedPackage.description}</p>}
                  </div>
                  <div className="flex gap-3">
                    <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-left shadow-sm">
                      <div className="text-xs uppercase tracking-wider text-gray-500">Price</div>
                      <div className="text-2xl font-black text-gray-900">{selectedPackage.price}</div>
                    </div>
                    <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-left shadow-sm">
                      <div className="text-xs uppercase tracking-wider text-gray-500">Timeline</div>
                      <div className="text-sm font-semibold text-gray-900">{selectedPackage.timeline}</div>
                      <div className="text-xs text-gray-500">{selectedPackage.support || 'Support included'}</div>
                    </div>
                  </div>
                </div>

                {isSupportSection ? (
                  <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                    <div className="text-sm font-semibold text-gray-900 mb-3">See what's included</div>
                    <ul className="space-y-2 text-sm text-gray-700">
                      {(selectedPackage.featuresDetailed || []).map((row) => (
                        <li key={row.feature} className="flex items-start gap-2">
                          <Check className="h-4 w-4 mt-0.5 text-red-600" />
                          <span><span className="font-semibold text-gray-900">{row.feature}:</span> {row.detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="text-sm font-semibold text-gray-900 mb-3">See what's included</div>
                  <ul className="space-y-2 text-sm text-gray-700">
                    {(selectedPackage.featuresDetailed || []).map((row) => (
                      <li key={row.feature} className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-0.5 text-red-600" />
                        <span><span className="font-semibold text-gray-900">{row.feature}:</span> {row.detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                )}

                {isSupportSection && (
                  <>
                    {/* Before vs After */}
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl border border-gray-200 bg-gray-900 text-gray-100 p-5 shadow-[0_15px_35px_rgba(0,0,0,0.25)]">
                        <div className="mb-2 text-xs uppercase tracking-wider text-gray-400">Before</div>
                        <ul className="space-y-2 text-sm">
                          {[
                            'High downtime and frequent manual fixes',
                            'Slow response to user issues',
                            'No proactive monitoring or roadmap',
                            'Backlog grows without clear ownership',
                          ].map((item) => (
                            <li key={item} className="flex items-start gap-2 opacity-80">
                              <X className="h-4 w-4 mt-1 text-gray-400" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-2xl border border-red-200 bg-white p-5 shadow-[0_18px_45px_rgba(255,0,0,0.22)]">
                        <div className="mb-2 text-xs uppercase tracking-wider text-red-600">After</div>
                        <ul className="space-y-2 text-sm text-gray-800">
                          {[
                            'Streamlined updates and monitored systems',
                            'Faster responses with priority queues',
                            'Continuous improvements shipped monthly',
                            'Clear ownership of your enhancement backlog',
                          ].map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <CheckCircle2 className="h-4 w-4 mt-1 text-red-600" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Outcome & Business Impact */}
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_15px_35px_rgba(255,0,0,0.12)]">
                        <div className="text-sm font-semibold text-gray-900">Outcome & Impact</div>
                        <ul className="mt-3 space-y-2 text-sm text-gray-700">
                          <li>Stable, secure systems with proactive care</li>
                          <li>Clear roadmap execution without hiring in-house</li>
                          <li>Confidence to ship faster with guardrails</li>
                        </ul>
                      </div>
                      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_15px_35px_rgba(0,0,0,0.14)]">
                        <div className="text-sm font-semibold text-gray-900">Business Impact</div>
                        <ul className="mt-3 space-y-2 text-sm text-gray-700">
                          <li>Reduced downtime and operational risk</li>
                          <li>Lower total cost versus full-time team</li>
                          <li>Faster feature throughput and happier users</li>
                        </ul>
                      </div>
                    </div>
                  </>
                )}

                {!isSupportSection && categoryData?.before?.length && categoryData?.after?.length && (
                  <>
                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl border border-gray-200 bg-gray-900 text-gray-100 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.3)]">
                        <div className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-3 py-1 text-xs font-semibold text-gray-300 mb-4">
                          <X className="h-4 w-4 text-gray-300" /> Before
                        </div>
                        <ul className="space-y-3 text-gray-100">
                          {categoryData.before.map((item) => (
                            <li key={item} className="flex items-start gap-3 opacity-80">
                              <X className="h-4 w-4 text-gray-400 mt-1 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-2xl border border-red-200 bg-white p-6 shadow-[0_18px_45px_rgba(255,0,0,0.2)]">
                        <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700 mb-4">
                          <Check className="h-4 w-4" /> After
                        </div>
                        <ul className="space-y-3 text-gray-800">
                          {categoryData.after.map((item) => (
                            <li key={item} className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-2">
                      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_15px_35px_rgba(255,0,0,0.12)]">
                        <div className="text-sm font-semibold text-gray-900">Outcome & Impact</div>
                        <ul className="mt-3 space-y-2 text-sm text-gray-700">
                          {(categoryData.outcomes || []).slice(0, 4).map((item) => (
                            <li key={item} className="flex items-start gap-2">
                              <Check className="h-4 w-4 mt-0.5 text-red-600" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-[0_15px_35px_rgba(0,0,0,0.14)]">
                        <div className="text-sm font-semibold text-gray-900">Business Impact</div>
                        <ul className="mt-3 space-y-2 text-sm text-gray-700">
                          {(categoryData.businessImpact || []).slice(0, 4).map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <Check className="h-4 w-4 mt-0.5 text-red-600" />
                              <span>{typeof item === 'string' ? item : item.text}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </>
                )}
              </section>
            )}
          </>
        ) : (
          <div className="rounded-2xl border-2 border-gray-200 bg-white p-8 shadow-sm">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <div className="text-sm font-semibold uppercase tracking-wider text-red-600 mb-2">Currently scoping</div>
                <p className="text-gray-700 max-w-2xl">
                  We are aligning packages for {service?.title}. Tell us your requirements and we will share the same premium format as our AI & Automation offers.
                </p>
              </div>
              <div className="flex gap-3">
                <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-left shadow-sm">
                  <div className="text-xs uppercase tracking-wider text-gray-500">Price</div>
                  <div className="text-2xl font-black text-gray-900">Custom quote</div>
                </div>
                <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-left shadow-sm">
                  <div className="text-xs uppercase tracking-wider text-gray-500">Timeline</div>
                  <div className="text-sm font-semibold text-gray-900">Scoped with you</div>
                  <div className="text-xs text-gray-500">Support included</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={openQuoteWizard}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700 transition"
              >
                Get Instant Estimate
              </button>
              <button className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-900 bg-white px-5 py-3 font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition">
                Book Strategy Call
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function AiAutomationPublicContent({ openQuoteWizard }: { openQuoteWizard: () => void }) {
  const automationPackage = PACKAGES_DATA['ai-automation'];
  const [selectedPackageId, setSelectedPackageId] = useState<AiPackageCard['id']>('advanced');
  const selectedPackage = AI_PACKAGE_CARDS.find((pkg) => pkg.id === selectedPackageId) || AI_PACKAGE_CARDS[0];

  return (
    <>
      {/* 1. Our AI Packages */}
      <section className="bg-white py-16 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-10 text-center">
            <div className="text-sm font-semibold uppercase tracking-wider text-red-600 mb-3">Our AI Packages</div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Choose the right package</h2>
            <p className="mt-3 text-gray-600 max-w-2xl mx-auto">Choose the right package based on your business stage, automation needs, and growth goals.</p>
          </div>

          <div className="grid gap-6 xl:grid-cols-4">
            {AI_PACKAGE_CARDS.map((pkg) => {
              const isCustom = pkg.type === 'custom';
              const isSelected = selectedPackageId === pkg.id;
              return (
                <div
                  key={pkg.title}
                  onClick={() => setSelectedPackageId(pkg.id)}
                  className={cn(
                    'relative flex h-full flex-col rounded-2xl border-2 p-6 text-left shadow-sm transition-transform duration-700 ease-out hover:scale-[1.05] hover:shadow-[0_18px_45px_rgba(255,0,0,0.25)] hover:border-red-300 cursor-pointer',
                    isSelected || pkg.highlighted
                      ? 'border-red-500 bg-red-50 ring-2 ring-red-500 shadow-[0_20px_45px_rgba(255,0,0,0.35)]'
                      : 'border-gray-200 bg-white hover:shadow-lg'
                  )}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setSelectedPackageId(pkg.id); } }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="text-xl font-bold text-gray-900">{pkg.title}</div>
                      <div className="mt-1 text-sm text-gray-500">Best for {pkg.bestFor}</div>
                      {pkg.description && <p className="mt-3 text-sm text-gray-600">{pkg.description}</p>}
                    </div>
                    {pkg.badge && (
                      <div className="rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                        {pkg.badge}
                      </div>
                    )}
                  </div>

                  <div className="mt-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-xs uppercase tracking-wider text-gray-500">Price</div>
                        <div className="mt-1 text-3xl font-black text-gray-900">{pkg.price}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs uppercase tracking-wider text-gray-500">Timeline</div>
                        <div className="mt-1 text-sm font-semibold text-gray-900">{pkg.timeline || 'Scoped'}</div>
                        <div className="text-xs text-gray-500">{pkg.support || 'Support included'}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 text-sm font-medium text-gray-900">{pkg.valueLine}</div>

                  <div className="mt-6">
                    <button
                      onClick={() => setSelectedPackageId(pkg.id)}
                      className={cn(
                        'w-full rounded-xl px-4 py-3 text-sm font-semibold transition',
                        isSelected
                          ? 'bg-red-600 text-white hover:bg-red-700'
                          : 'border border-gray-300 bg-white text-gray-900 hover:border-red-400 hover:text-red-700'
                      )}
                    >
                      {isSelected ? 'Selected' : pkg.cta}
                    </button>
                    {!isCustom && (
                      <button
                        onClick={openQuoteWizard}
                        className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm font-semibold text-gray-800 hover:border-red-300 hover:text-red-700 transition"
                      >
                        Get Estimate
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 2. Included with your selected AI package */}
      <section className="bg-gray-50 py-16 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-8">
            <div className="text-sm font-semibold uppercase tracking-wider text-red-600 mb-2">Included with your selected AI package</div>
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">See what's included</h2>
            <p className="mt-3 text-gray-600">A quick view of what's included in your selected AI package.</p>
          </div>
          <div className="grid gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8 shadow-[0_18px_45px_rgba(255,0,0,0.12)]">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-red-600 mb-2">Selected package</div>
                  <h3 className="text-2xl font-bold text-gray-900">{selectedPackage.title}</h3>
                  {selectedPackage.description && <p className="mt-2 text-sm text-gray-600">{selectedPackage.description}</p>}
                </div>
                <div className="flex gap-3">
                  <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-left shadow-sm">
                    <div className="text-xs uppercase tracking-wider text-gray-500">Price</div>
                    <div className="text-2xl font-black text-gray-900">{selectedPackage.price}</div>
                  </div>
                  <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-left shadow-sm">
                    <div className="text-xs uppercase tracking-wider text-gray-500">Timeline</div>
                    <div className="text-sm font-semibold text-gray-900">{selectedPackage.timeline || 'Scoped'}</div>
                    <div className="text-xs text-gray-500">{selectedPackage.support || 'Support included'}</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-2 text-xs font-semibold uppercase tracking-wider text-gray-500 border-b border-gray-200">
                  <div className="px-4 py-3">Feature</div>
                  <div className="px-4 py-3">Details</div>
                </div>
                <div className="divide-y divide-gray-200">
                  {(selectedPackage.featuresDetailed || []).map((row) => (
                    <div key={row.feature} className="grid grid-cols-2 px-4 py-3 text-sm text-gray-700 gap-4">
                      <div className="font-semibold text-gray-900">{row.feature}</div>
                      <div className="text-gray-700">{row.detail}</div>
                    </div>
                  ))}
                </div>
              </div>

              {selectedPackage.type === 'custom' && (
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={openQuoteWizard}
                    className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white hover:bg-gray-800 transition"
                  >
                    Request proposal
                  </button>
                  <p className="text-sm text-gray-600">We tailor the proposal, integrations, and support around your stack.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Not Sure Where AI Fits? */}
      <section className="bg-gray-50 py-16 border-b border-gray-100">
        <div className="mx-auto max-w-6xl px-6">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Not Sure Where AI Fits?</h3>
                <p className="mt-3 text-gray-600 max-w-3xl">
                  Most businesses know they need AI but don't know where. Our consultancy phase helps you identify high-impact areas where AI can save the most time and money. We design the solution and implement it step-by-step.
                </p>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
                Advisory + Implementation
              </div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {['Identify Bottlenecks', 'Map Automation Opportunities', 'Build ROI-Focused Systems'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 text-red-600" />
                  <span className="font-medium text-gray-900">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

        {/* 5. Before vs After */}
        <section className="bg-white py-16 border-b border-gray-100">
          <div className="mx-auto max-w-7xl px-6">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Before vs After</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-gray-200 bg-gray-900 text-gray-100 p-6 shadow-[0_18px_45px_rgba(0,0,0,0.3)]">
                <div className="inline-flex items-center gap-2 rounded-full bg-gray-800 px-3 py-1 text-xs font-semibold text-gray-300 mb-4">
                  <X className="h-4 w-4 text-gray-300" /> Before
                </div>
                <ul className="space-y-3 text-gray-100">
                  {automationPackage.before.map((item) => (
                    <li key={item} className="flex items-start gap-3 opacity-85">
                      <X className="h-4 w-4 text-gray-400 mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-red-200 bg-white p-6 shadow-[0_18px_45px_rgba(255,0,0,0.2)]">
                <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700 mb-4">
                  <Check className="h-4 w-4" /> After
                </div>
                <ul className="space-y-3 text-gray-800">
                  {automationPackage.after.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="h-4 w-4 text-red-600 mt-1 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

      {/* 6. Why Choose Us? */}
      <section className="bg-gray-50 py-16 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Why Choose Us?</h2>
            <p className="mt-3 text-gray-600 max-w-3xl">
              We do not just build websites — we create systems that help your business get visible, build trust, and generate real inquiries.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              { title: 'Fast Delivery', desc: 'Quick turnaround with personalized support throughout.' },
              { title: 'Client Testimonials', desc: 'Proven track record with satisfied clients worldwide.' },
              { title: 'Localization Support', desc: 'Multi-language and regional market support available.' },
              { title: 'Scalability', desc: 'Built to grow — easily add features as your business expands.' },
              { title: 'Currency Flexibility', desc: 'For international clients, we accept multiple currencies and provide localized payment options.' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                <h4 className="font-semibold text-gray-900">{item.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA */}
      <section className="bg-gradient-to-r from-red-50 to-red-100 py-16 border-b border-gray-100">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Get Started with AI & Automation System</h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={openQuoteWizard}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 transition"
            >
              Get Instant Estimate
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-900 bg-white px-6 py-3 font-semibold text-gray-900 hover:bg-gray-900 hover:text-white transition">
              Book Strategy Call
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

function QuoteWizard({ estimate, setEstimate, setView }: { 
  estimate: typeof INITIAL_ESTIMATE; 
  setEstimate: React.Dispatch<React.SetStateAction<typeof INITIAL_ESTIMATE>>; 
  setView: (view: string) => void 
}) {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [quoteState, setQuoteState] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    websiteUrl: '',
    market: '',
    targetAudience: '',
    objective: '',
    currentProblem: '',
    uniquePages: 6,
    designComplexity: estimate.complexity,
    contentReadiness: 'Partially ready',
    integrations: '',
    userRoles: '',
    whoWillUse: '',
    trafficGoals: '',
    decisionStage: 'Exploring options',
    notes: '',
    references: '',
    advanced: {
      blog: false,
      booking: false,
      ecommerce: false,
      membership: false,
      dashboard: false,
      adminPanel: false,
      portal: false,
      multilingual: false,
      chatbot: false,
      crm: false,
      erp: false,
      multiRole: false,
      advancedAutomation: false,
      complexIntegrations: false,
      customPermissions: false,
    },
  });

  const steps = ['Contact', 'Project', 'Scope', 'Budget', 'Details', 'Review'];
  const threshold = detectCustomThreshold(quoteState);

  useEffect(() => {
    setEstimate((prev) => ({ ...prev, complexity: quoteState.designComplexity }));
  }, [quoteState.designComplexity]);

  const computed = calculateEstimate(estimate, quoteState);
  const canGoNext = step < steps.length;

  if (submitted) {
    return (
      <div className="mx-auto max-w-2xl px-6 py-20">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 md:p-12 text-center shadow-xl">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Request Submitted!</h2>
          <p className="text-gray-600 mb-8 text-lg">
            Thank you for your interest. Here is what happens next:
          </p>
          <div className="text-left space-y-4 mb-8">
            {[
              { time: 'Within 2 hours', action: 'You will receive a confirmation email with your submission details.' },
              { time: 'Within 24 hours', action: 'Our team will review your requirements and prepare a detailed proposal.' },
              { time: 'Within 48 hours', action: 'We will schedule a discovery call to refine the scope and answer questions.' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 p-4 rounded-xl bg-gray-50 border border-gray-100">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-white text-sm font-bold shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <div className="font-semibold text-gray-900">{item.time}</div>
                  <div className="text-gray-600 text-sm">{item.action}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 mb-8 text-sm text-amber-800 text-left">
            <div className="font-semibold mb-1">What to prepare</div>
            <p>For the discovery call, it helps to have examples of sites/apps you like, a list of must-have features, and any existing brand materials.</p>
          </div>
          <button
            onClick={() => { setSubmitted(false); setView('public'); }}
            className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white hover:bg-red-700 transition"
          >
            Back to packages
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <button
        onClick={() => setView('public')}
        className="mb-8 inline-flex items-center gap-2 text-sm text-gray-600 transition hover:text-gray-900"
      >
        <ChevronLeft className="h-4 w-4" /> Back to packages
      </button>

      <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="rounded-xl border border-gray-200 bg-white p-6 h-fit lg:sticky lg:top-24 shadow-sm">
          <div className="text-sm font-semibold uppercase tracking-wider text-red-600 mb-2">Custom Quote</div>
          <h2 className="text-2xl font-bold text-gray-900">Tell us about your project</h2>
          <p className="mt-3 text-gray-600 text-sm">This helps us prepare an accurate proposal tailored to your needs.</p>
          
          <div className="mt-6 space-y-2">
            {steps.map((label, idx) => {
              const active = step === idx + 1;
              const done = step > idx + 1;
              return (
                <div key={label} className={cn(
                  'flex items-center gap-3 rounded-lg border px-4 py-3 transition',
                  active ? 'border-red-500 bg-red-50' : 'border-gray-100 bg-gray-50'
                )}>
                  <div className={cn(
                    'flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold',
                    done ? 'bg-red-600 text-white' : active ? 'bg-red-100 text-red-600' : 'bg-gray-200 text-gray-500'
                  )}>
                    {done ? <Check className="h-4 w-4" /> : idx + 1}
                  </div>
                  <div className="text-sm font-medium text-gray-900">{label}</div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-6 h-2 overflow-hidden rounded-full bg-gray-100">
            <div className="h-full rounded-full bg-red-600 transition-all" style={{ width: `${(step / steps.length) * 100}%` }} />
          </div>
          
          <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm">
            <div className="text-gray-700">Current estimate:</div>
            <div className="text-xl font-bold text-gray-900 mt-1">
              {formatCurrency(computed.estimatedLow)} - {formatCurrency(computed.estimatedHigh)}
            </div>
          </div>
          
          {threshold.shouldPushCustom && (
            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
              Your project includes advanced requirements. We recommend a custom proposal to ensure the best fit.
            </div>
          )}
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6 md:p-8 shadow-sm">
          {step === 1 && (
            <div className="space-y-5">
              <SectionHeading title="Contact Information" subtitle="How can we reach you about this project?" />
              <div className="grid gap-4 md:grid-cols-2">
                <Input label="Full name *" value={quoteState.fullName} onChange={(value) => setQuoteState((s) => ({ ...s, fullName: value }))} />
                <Input label="Company name" value={quoteState.companyName} onChange={(value) => setQuoteState((s) => ({ ...s, companyName: value }))} />
                <Input label="Email *" type="email" value={quoteState.email} onChange={(value) => setQuoteState((s) => ({ ...s, email: value }))} />
                <Input label="Phone" value={quoteState.phone} onChange={(value) => setQuoteState((s) => ({ ...s, phone: value }))} />
                <Input label="Website URL (if exists)" value={quoteState.websiteUrl} onChange={(value) => setQuoteState((s) => ({ ...s, websiteUrl: value }))} />
                <Input label="Country / Market" value={quoteState.market} onChange={(value) => setQuoteState((s) => ({ ...s, market: value }))} />
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-5">
              <SectionHeading title="Project Details" subtitle="Help us understand what you are trying to achieve." />
              <FieldBlock label="What type of solution do you need?">
                <select className="field" value={estimate.category} onChange={(e) => setEstimate((prev) => ({ ...prev, category: e.target.value }))}>
                  {SERVICE_CATEGORIES.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}
                </select>
              </FieldBlock>
              <FieldBlock label="Business goal">
                <select className="field" value={estimate.goal} onChange={(e) => setEstimate((prev) => ({ ...prev, goal: e.target.value }))}>
                  {(BUSINESS_GOALS[estimate.category as keyof typeof BUSINESS_GOALS] || []).map((goal) => <option key={goal}>{goal}</option>)}
                </select>
              </FieldBlock>
              <Input label="Who is your target audience?" value={quoteState.targetAudience} onChange={(value) => setQuoteState((s) => ({ ...s, targetAudience: value }))} />
              <Textarea label="What problem are you trying to solve?" value={quoteState.currentProblem} onChange={(value) => setQuoteState((s) => ({ ...s, currentProblem: value }))} placeholder="Describe your current challenge or what you want to achieve with this project." />
            </div>
          )}

          {step === 3 && (
            <div className="space-y-5">
              <SectionHeading title="Scope & Complexity" subtitle="This helps us determine the right package or custom approach." />
              <div className="grid gap-4 md:grid-cols-2">
                <Input label="Estimated pages / screens" type="number" value={String(quoteState.uniquePages)} onChange={(value) => setQuoteState((s) => ({ ...s, uniquePages: Number(value || 0) }))} />
                <FieldBlock label="Design complexity">
                  <select className="field" value={quoteState.designComplexity} onChange={(e) => setQuoteState((s) => ({ ...s, designComplexity: e.target.value }))}>
                    {['Standard', 'Semi-custom', 'Fully custom'].map((option) => <option key={option}>{option}</option>)}
                  </select>
                </FieldBlock>
                <FieldBlock label="Content readiness">
                  <select className="field" value={quoteState.contentReadiness} onChange={(e) => setQuoteState((s) => ({ ...s, contentReadiness: e.target.value }))}>
                    {['Ready - I have all content', 'Partially ready - Need some help', 'Need full content support'].map((option) => <option key={option}>{option}</option>)}
                  </select>
                </FieldBlock>
                <Input label="Integrations needed" value={quoteState.integrations} onChange={(value) => setQuoteState((s) => ({ ...s, integrations: value }))} placeholder="e.g., Stripe, HubSpot, Zapier" />
                <Input label="User roles (if applicable)" value={quoteState.userRoles} onChange={(value) => setQuoteState((s) => ({ ...s, userRoles: value }))} placeholder="e.g., Admin, Staff, Customer" />
                <Input label="Who will use the system?" value={quoteState.whoWillUse} onChange={(value) => setQuoteState((s) => ({ ...s, whoWillUse: value }))} placeholder="e.g., Internal team, Customers, Both" />
              </div>
              <div>
                <div className="mb-3 text-sm font-medium text-gray-700">Required features</div>
                <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                  {[
                    ['blog', 'Blog / CMS'],
                    ['booking', 'Booking system'],
                    ['ecommerce', 'E-commerce'],
                    ['membership', 'Membership'],
                    ['dashboard', 'Dashboard'],
                    ['adminPanel', 'Admin panel'],
                    ['portal', 'Customer portal'],
                    ['multilingual', 'Multi-language'],
                    ['chatbot', 'Chatbot'],
                    ['crm', 'CRM integration'],
                    ['multiRole', 'Multi-role access'],
                    ['advancedAutomation', 'Workflow automation'],
                  ].map(([key, label]) => (
                    <label key={key} className="flex items-center gap-3 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 transition">
                      <input
                        type="checkbox"
                        checked={quoteState.advanced[key as keyof typeof quoteState.advanced]}
                        onChange={(e) => setQuoteState((s) => ({
                          ...s,
                          advanced: { ...s.advanced, [key]: e.target.checked },
                        }))}
                        className="rounded border-gray-300 text-red-600 focus:ring-red-500"
                      />
                      <span>{label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
            <div className="space-y-5">
              <SectionHeading title="Budget & Timeline" subtitle="This helps us recommend the right approach for your situation." />
              <div className="grid gap-4 md:grid-cols-2">
                <FieldBlock label="Budget range">
                  <select className="field" value={estimate.budget} onChange={(e) => setEstimate((prev) => ({ ...prev, budget: e.target.value }))}>
                    {Object.keys(budgetBands).map((option) => <option key={option}>{option}</option>)}
                  </select>
                </FieldBlock>
                <FieldBlock label="Timeline urgency">
                  <select className="field" value={estimate.urgency} onChange={(e) => setEstimate((prev) => ({ ...prev, urgency: e.target.value }))}>
                    {[
                      { value: 'Rush', label: 'Rush - Need it ASAP (+50%)' },
                      { value: 'Standard', label: 'Standard - Normal timeline' },
                      { value: 'Flexible', label: 'Flexible - No rush (-15%)' },
                    ].map((option) => <option key={option.value} value={option.value}>{option.label}</option>)}
                  </select>
                </FieldBlock>
                <FieldBlock label="Business stage">
                  <select className="field" value={estimate.stage} onChange={(e) => setEstimate((prev) => ({ ...prev, stage: e.target.value }))}>
                    {['New business', 'Existing business improving website', 'Scaling business', 'Established company / enterprise'].map((option) => <option key={option}>{option}</option>)}
                  </select>
                </FieldBlock>
                <FieldBlock label="Decision stage">
                  <select className="field" value={quoteState.decisionStage} onChange={(e) => setQuoteState((s) => ({ ...s, decisionStage: e.target.value }))}>
                    {['Just exploring', 'Gathering quotes', 'Ready to start soon', 'Ready to start immediately'].map((option) => <option key={option}>{option}</option>)}
                  </select>
                </FieldBlock>
                <Input label="Traffic / growth goals" value={quoteState.trafficGoals} onChange={(value) => setQuoteState((s) => ({ ...s, trafficGoals: value }))} placeholder="e.g., 10,000 monthly visitors" />
              </div>
              <FieldBlock label="Preferred package (we may suggest alternatives)">
                <select className="field" value={estimate.packageId} onChange={(e) => setEstimate((prev) => ({ ...prev, packageId: e.target.value }))}>
                  <option value="">No preference - recommend for me</option>
                  {(PACKAGES[estimate.category as keyof typeof PACKAGES] || []).map((pkg) => <option key={pkg.id} value={pkg.id}>{pkg.name} - {formatCurrency(pkg.startingPrice)}</option>)}
                </select>
              </FieldBlock>
            </div>
          )}

          {step === 5 && (
            <div className="space-y-5">
              <SectionHeading title="Additional Details" subtitle="Anything else that will help us prepare a better proposal." />
              <Textarea label="Describe your project in detail" value={quoteState.notes} onChange={(value) => setQuoteState((s) => ({ ...s, notes: value }))} placeholder="Include must-have features, current pain points, user flow ideas, or any other important details." />
              <Textarea label="Reference websites or examples" value={quoteState.references} onChange={(value) => setQuoteState((s) => ({ ...s, references: value }))} placeholder="Share links to sites you like, competitors, or design inspiration." />
            </div>
          )}

          {step === 6 && (
            <div className="space-y-5">
              <SectionHeading title="Review & Submit" subtitle="Review your selections before submitting." />
              <div className="grid gap-4 md:grid-cols-2">
                <SummaryCard title="Service type" value={getCategoryById(estimate.category)?.name || ''} />
                <SummaryCard title="Package direction" value={computed.selectedPackage?.name || 'Custom solution'} />
                <SummaryCard title="Estimated range" value={`${formatCurrency(computed.estimatedLow)} - ${formatCurrency(computed.estimatedHigh)}`} />
                <SummaryCard title="Timeline" value={estimate.urgency} />
                <SummaryCard title="Contact" value={quoteState.email || 'Not provided'} />
                <SummaryCard title="Decision stage" value={quoteState.decisionStage} />
              </div>
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 text-sm text-gray-700 leading-relaxed">
                {threshold.shouldPushCustom ? (
                  <>Your project includes advanced requirements ({threshold.advancedCount} selected). We will prepare a custom proposal that addresses your specific needs rather than fitting it into a standard package.</>
                ) : (
                  <>Based on your selections, the {computed.selectedPackage?.name || 'recommended'} package appears to be a good fit. Our team will review your requirements and may suggest adjustments during the proposal phase.</>
                )}
              </div>
              <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-800">
                <div className="font-semibold mb-1">This is a starting estimate - not a final quote</div>
                <p>Final pricing will be confirmed after we review your requirements in detail. Typical delivery times range from {computed.selectedPackage?.timeline || '2-8 weeks'} depending on scope.</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button 
                  onClick={() => setSubmitted(true)}
                  className="rounded-xl bg-red-600 px-6 py-4 font-semibold text-white hover:bg-red-700 transition flex-1"
                >
                  Submit Quote Request
                </button>
                <button className="rounded-xl border border-gray-300 bg-white px-6 py-4 font-semibold text-gray-900 hover:bg-gray-50 transition">
                  Book Strategy Call Instead
                </button>
              </div>
            </div>
          )}

          <div className="mt-8 flex items-center justify-between gap-4 border-t border-gray-200 pt-6">
            <button
              onClick={() => setStep((prev) => Math.max(1, prev - 1))}
              disabled={step === 1}
              className="rounded-xl border border-gray-300 bg-white px-5 py-3 font-semibold text-gray-700 disabled:opacity-40 hover:bg-gray-50 transition"
            >
              Back
            </button>
            {canGoNext && (
              <button
                onClick={() => setStep((prev) => Math.min(steps.length, prev + 1))}
                className="inline-flex items-center gap-2 rounded-xl bg-gray-900 px-5 py-3 font-semibold text-white hover:bg-gray-800 transition"
              >
                Continue <ChevronRight className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function AdminDashboard() {
  const [tab, setTab] = useState('planner');
  const [planner, setPlanner] = useState({
    monthlyRevenueTarget: 50000,
    yearlyRevenueTarget: 600000,
    averageSaleValue: 5500,
    grossMarginTarget: 45,
    closeRate: 25,
    leadToCallRate: 35,
    visitorToLeadRate: 2.2,
    deliveryCapacityPerMonth: 14,
    teamMonthlyCost: 12000,
    overheadCost: 3500,
    desiredProfitTarget: 12000,
  });
  const [mix, setMix] = useState(PACKAGE_MIX_DEFAULT);

  const plannerOutput = useMemo(() => {
    const clientsNeeded = Math.ceil(planner.monthlyRevenueTarget / planner.averageSaleValue);
    const callsNeeded = Math.ceil(clientsNeeded / (planner.closeRate / 100 || 1));
    const leadsNeeded = Math.ceil(callsNeeded / (planner.leadToCallRate / 100 || 1));
    const trafficNeeded = Math.ceil(leadsNeeded / (planner.visitorToLeadRate / 100 || 1));
    const grossProfit = planner.monthlyRevenueTarget * (planner.grossMarginTarget / 100);
    const netProfit = grossProfit - planner.teamMonthlyCost - planner.overheadCost;
    const capacityStatus = clientsNeeded > planner.deliveryCapacityPerMonth ? 'Over capacity' : clientsNeeded > planner.deliveryCapacityPerMonth * 0.8 ? 'Tight' : 'Healthy';
    const marginHealth = netProfit >= planner.desiredProfitTarget ? 'Healthy' : netProfit > 0 ? 'Watch closely' : 'At risk';

    return { clientsNeeded, callsNeeded, leadsNeeded, trafficNeeded, grossProfit, netProfit, capacityStatus, marginHealth };
  }, [planner]);

  const mixRows = Object.entries(mix).map(([id, count]) => {
    const pkg = getPackageById(id);
    if (!pkg) return null;
    const revenue = pkg.startingPrice * count;
    const cost = pkg.internalCost * count;
    const effort = pkg.effort * count;
    return { id, name: pkg.name, count, revenue, cost, effort };
  }).filter(Boolean);

  const mixSummary = mixRows.reduce((acc, row) => {
    if (row) {
      acc.revenue += row.revenue;
      acc.cost += row.cost;
      acc.effort += row.effort;
      acc.count += row.count;
    }
    return acc;
  }, { revenue: 0, cost: 0, effort: 0, count: 0 });

  const mixProfit = mixSummary.revenue - mixSummary.cost;
  const mixMargin = mixSummary.revenue ? mixProfit / mixSummary.revenue : 0;

  return (
    <div className="mx-auto max-w-7xl px-6 py-12">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="text-sm font-semibold uppercase tracking-wider text-red-600 mb-2">Admin Mode</div>
          <h2 className="text-3xl font-bold text-gray-900">Internal Dashboard</h2>
          <p className="mt-2 text-gray-600">Pricing logic, revenue targets, and profit protection - hidden from clients.</p>
        </div>
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-red-700">Internal use only</div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {[
          ['planner', 'Revenue Planner', Calculator],
          ['packages', 'Package Builder', Briefcase],
          ['mix', 'Offer Mix', BarChart3],
          ['settings', 'Quote Engine', SlidersHorizontal],
          ['safety', 'Price Safety', ShieldCheck],
        ].map(([id, label, Icon]) => (
          <button 
            key={id} 
            onClick={() => setTab(id as string)} 
            className={cn(
              'inline-flex items-center gap-2 rounded-xl px-4 py-3 font-medium transition',
              tab === id 
                ? 'bg-red-600 text-white' 
                : 'border border-gray-200 bg-white text-gray-700 hover:bg-gray-50'
            )}
          >
            <Icon className="h-4 w-4" /> {label}
          </button>
        ))}
      </div>

      {tab === 'planner' && (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Revenue Target Planner</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <NumberField label="Monthly revenue target" value={planner.monthlyRevenueTarget} onChange={(value) => setPlanner((s) => ({ ...s, monthlyRevenueTarget: value }))} />
              <NumberField label="Yearly revenue target" value={planner.yearlyRevenueTarget} onChange={(value) => setPlanner((s) => ({ ...s, yearlyRevenueTarget: value }))} />
              <NumberField label="Average sale value" value={planner.averageSaleValue} onChange={(value) => setPlanner((s) => ({ ...s, averageSaleValue: value }))} />
              <NumberField label="Gross margin target %" value={planner.grossMarginTarget} onChange={(value) => setPlanner((s) => ({ ...s, grossMarginTarget: value }))} />
              <NumberField label="Close rate %" value={planner.closeRate} onChange={(value) => setPlanner((s) => ({ ...s, closeRate: value }))} />
              <NumberField label="Lead-to-call %" value={planner.leadToCallRate} onChange={(value) => setPlanner((s) => ({ ...s, leadToCallRate: value }))} />
              <NumberField label="Visitor-to-lead %" value={planner.visitorToLeadRate} onChange={(value) => setPlanner((s) => ({ ...s, visitorToLeadRate: value }))} />
              <NumberField label="Delivery capacity / month" value={planner.deliveryCapacityPerMonth} onChange={(value) => setPlanner((s) => ({ ...s, deliveryCapacityPerMonth: value }))} />
              <NumberField label="Team monthly cost" value={planner.teamMonthlyCost} onChange={(value) => setPlanner((s) => ({ ...s, teamMonthlyCost: value }))} />
              <NumberField label="Overhead cost" value={planner.overheadCost} onChange={(value) => setPlanner((s) => ({ ...s, overheadCost: value }))} />
              <NumberField label="Desired net profit" value={planner.desiredProfitTarget} onChange={(value) => setPlanner((s) => ({ ...s, desiredProfitTarget: value }))} />
            </div>
          </div>

          <div className="rounded-xl border border-red-200 bg-gradient-to-b from-red-50 to-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Planner Output</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <StatCard label="Clients needed / month" value={String(plannerOutput.clientsNeeded)} icon={Users} />
              <StatCard label="Sales calls needed" value={String(plannerOutput.callsNeeded)} icon={Target} />
              <StatCard label="Qualified leads needed" value={String(plannerOutput.leadsNeeded)} icon={LineChart} />
              <StatCard label="Website traffic needed" value={String(plannerOutput.trafficNeeded)} icon={Globe} />
              <StatCard label="Projected gross profit" value={formatCurrency(plannerOutput.grossProfit)} icon={CircleDollarSign} />
              <StatCard label="Projected net profit" value={formatCurrency(plannerOutput.netProfit)} icon={Wallet} />
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <SimpleNotice title="Capacity status" tone={plannerOutput.capacityStatus === 'Over capacity' ? 'red' : plannerOutput.capacityStatus === 'Tight' ? 'yellow' : 'green'}>{plannerOutput.capacityStatus}</SimpleNotice>
              <SimpleNotice title="Margin health" tone={plannerOutput.marginHealth === 'Healthy' ? 'green' : plannerOutput.marginHealth === 'Watch closely' ? 'yellow' : 'red'}>{plannerOutput.marginHealth}</SimpleNotice>
            </div>
          </div>
        </div>
      )}

      {tab === 'packages' && (
        <div className="space-y-6">
          {SERVICE_CATEGORIES.map((category) => (
            <div key={category.id} className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
                  <category.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-lg font-bold text-gray-900">{category.name}</div>
                  <div className="text-sm text-gray-500">Package settings and hidden economics</div>
                </div>
              </div>
              <div className="grid gap-4 lg:grid-cols-3">
                {(PACKAGES[category.id as keyof typeof PACKAGES] || []).map((pkg) => (
                  <div key={pkg.id} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                    <div className="text-lg font-semibold text-gray-900">{pkg.name}</div>
                    <div className="mt-2 text-sm text-gray-500">{pkg.idealFor}</div>
                    <div className="mt-4 space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-gray-500">Public price</span><span className="font-medium text-gray-900">{formatCurrency(pkg.startingPrice)}</span></div>
                      <div className="flex justify-between"><span className="text-gray-500">Hidden cost</span><span className="font-medium text-gray-900">{formatCurrency(pkg.internalCost)}</span></div>
                      <div className="flex justify-between"><span className="text-gray-500">Price floor</span><span className="font-medium text-gray-900">{formatCurrency(pkg.priceFloor)}</span></div>
                      <div className="flex justify-between"><span className="text-gray-500">Effort score</span><span className="font-medium text-gray-900">{pkg.effort}</span></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {tab === 'mix' && (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Offer Mix Simulator</h3>
            <div className="space-y-3">
              {Object.keys(mix).map((id) => {
                const pkg = getPackageById(id);
                return (
                  <div key={id} className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
                    <div>
                      <div className="font-semibold text-gray-900">{pkg?.name}</div>
                      <div className="text-sm text-gray-500">{formatCurrency(pkg?.startingPrice || 0)} each</div>
                    </div>
                    <div className="flex items-center gap-3">
                      <button onClick={() => setMix((prev) => ({ ...prev, [id]: Math.max(0, prev[id as keyof typeof prev] - 1) }))} className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">-</button>
                      <div className="w-10 text-center font-bold text-gray-900">{mix[id as keyof typeof mix]}</div>
                      <button onClick={() => setMix((prev) => ({ ...prev, [id]: prev[id as keyof typeof prev] + 1 }))} className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300">+</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-xl border border-red-200 bg-gradient-to-b from-red-50 to-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Projection</h3>
            <div className="grid gap-4 md:grid-cols-2">
              <StatCard label="Projects sold" value={String(mixSummary.count)} icon={Briefcase} />
              <StatCard label="Revenue" value={formatCurrency(mixSummary.revenue)} icon={CircleDollarSign} />
              <StatCard label="Cost" value={formatCurrency(mixSummary.cost)} icon={Wallet} />
              <StatCard label="Gross profit" value={formatCurrency(mixProfit)} icon={TrendingUp} />
            </div>
            <div className="mt-6 rounded-lg border border-gray-200 bg-white p-4 text-sm">
              Margin: <span className="font-bold text-gray-900">{(mixMargin * 100).toFixed(1)}%</span>
            </div>
          </div>
        </div>
      )}

      {tab === 'settings' && (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Quote Engine Settings</h3>
            <div className="space-y-3">
              <SettingsRow label="Hidden base rate" value={formatCurrency(PRICING_SETTINGS.hourlyRate)} />
              <SettingsRow label="Rush multiplier" value={`${PRICING_SETTINGS.urgencyMultiplier.Rush}x`} />
              <SettingsRow label="Standard multiplier" value={`${PRICING_SETTINGS.urgencyMultiplier.Standard}x`} />
              <SettingsRow label="Flexible multiplier" value={`${PRICING_SETTINGS.urgencyMultiplier.Flexible}x`} />
              <SettingsRow label="Quote floor" value={formatCurrency(PRICING_SETTINGS.quoteFloor)} />
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Custom Threshold Rules</h3>
            <p className="text-sm text-gray-600 mb-6">When too many advanced requirements are selected, the system pushes toward a custom proposal.</p>
            <div className="grid gap-2 md:grid-cols-2">
              {Array.from(advancedRequirementSet).map((item) => (
                <div key={item} className="rounded-lg border border-gray-200 bg-gray-50 px-4 py-2 text-sm text-gray-700">{item}</div>
              ))}
            </div>
          </div>
        </div>
      )}

      {tab === 'safety' && (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Price Safety Rules</h3>
            <div className="space-y-4">
              <SimpleNotice title="Minimum quote floor" tone="green">Never display estimates below the internal protection floor.</SimpleNotice>
              <SimpleNotice title="Margin warning" tone="yellow">Warn when projected margin falls below protected target.</SimpleNotice>
              <SimpleNotice title="Budget mismatch" tone="yellow">Push complex low-budget projects to consultation.</SimpleNotice>
              <SimpleNotice title="Over-complex scope" tone="red">Trigger custom proposal when advanced count crosses threshold.</SimpleNotice>
            </div>
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Why This Matters</h3>
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>Public offers create clarity for clients without exposing internal costing.</p>
              <p>Package pricing protects margin, delivery load, and team capacity.</p>
              <p>This hidden layer keeps sales simple while staying strategically sound.</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function StickySummaryBar({ estimate, openQuoteWizard }: { 
  estimate: typeof INITIAL_ESTIMATE; 
  openQuoteWizard: () => void 
}) {
  const computed = calculateEstimate(estimate, { uniquePages: 5 });
  const category = getCategoryById(estimate.category);
  const hasSelection = Boolean(computed.selectedPackage);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-200 bg-white/95 backdrop-blur-lg shadow-lg">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-6">
          <SummaryInline label="Service" value={category?.name || 'Not selected'} />
          <SummaryInline label="Package" value={computed.selectedPackage?.name || 'Choose a package'} />
          <SummaryInline label="Add-ons" value={String(estimate.addOns.length)} />
          <SummaryInline label="Timeline" value={estimate.urgency} />
        </div>
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
          <div className="text-left sm:text-right">
            <div className="text-xs uppercase tracking-wider text-gray-500">Estimated range</div>
            <div className="text-xl font-bold text-gray-900">{hasSelection ? `${formatCurrency(computed.estimatedLow)} - ${formatCurrency(computed.estimatedHigh)}` : 'Select a package'}</div>
          </div>
          <button onClick={openQuoteWizard} className="rounded-xl bg-red-600 px-5 py-3 font-semibold text-white hover:bg-red-700 transition">
            Get Instant Estimate
          </button>
        </div>
      </div>
    </div>
  );
}

function MetricCard({ icon: Icon, label, value }: { icon: LucideIcon; label: string; value: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-gray-500">{label}</div>
          <div className="mt-1 text-lg font-semibold text-gray-900">{value}</div>
        </div>
      </div>
    </div>
  );
}

function FieldBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 text-sm font-medium text-gray-700">{label}</div>
      {children}
    </div>
  );
}

function Input({ label, value, onChange, type = 'text', placeholder = '' }: { 
  label: string; 
  value: string; 
  onChange: (value: string) => void; 
  type?: string;
  placeholder?: string;
}) {
  return (
    <FieldBlock label={label}>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="field" />
    </FieldBlock>
  );
}

function Textarea({ label, value, onChange, placeholder = '' }: { 
  label: string; 
  value: string; 
  onChange: (value: string) => void; 
  placeholder?: string;
}) {
  return (
    <FieldBlock label={label}>
      <textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="field min-h-[120px] resize-none" />
    </FieldBlock>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{subtitle}</p>
    </div>
  );
}

function SummaryCard({ title, value }: { title: string; value: string }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
      <div className="text-xs uppercase tracking-wider text-gray-500">{title}</div>
      <div className="mt-2 text-lg font-semibold text-gray-900">{value}</div>
    </div>
  );
}

function StatCard({ label, value, icon: Icon }: { label: string; value: string; icon: LucideIcon }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs uppercase tracking-wider text-gray-500">{label}</div>
          <div className="mt-2 text-2xl font-bold text-gray-900">{value}</div>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-600">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}

function NumberField({ label, value, onChange }: { label: string; value: number; onChange: (value: number) => void }) {
  return (
    <FieldBlock label={label}>
      <input type="number" value={value} onChange={(e) => onChange(Number(e.target.value || 0))} className="field" />
    </FieldBlock>
  );
}

function SimpleNotice({ title, children, tone = 'green' }: { title: string; children: React.ReactNode; tone?: 'green' | 'yellow' | 'red' }) {
  const tones = {
    green: 'border-emerald-200 bg-emerald-50 text-emerald-800',
    yellow: 'border-amber-200 bg-amber-50 text-amber-800',
    red: 'border-rose-200 bg-rose-50 text-rose-800',
  };
  return (
    <div className={cn('rounded-xl border p-4', tones[tone])}>
      <div className="font-semibold">{title}</div>
      <div className="mt-1 text-sm opacity-90">{children}</div>
    </div>
  );
}

function SettingsRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-200 bg-gray-50 px-4 py-3">
      <div className="text-gray-600">{label}</div>
      <div className="font-semibold text-gray-900">{value}</div>
    </div>
  );
}

function SummaryInline({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wider text-gray-500">{label}</div>
      <div className="text-sm font-medium text-gray-900">{value}</div>
    </div>
  );
}

export default function ZappsAgencyOfferSystem() {
  const [view, setView] = useState('public');
  const [estimate, setEstimate] = useState(INITIAL_ESTIMATE);

  const activeCategory = getCategoryById(estimate.category);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <style>{`
        .field {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid #e5e7eb;
          background: white;
          color: #111827;
          padding: 0.75rem 1rem;
          outline: none;
          font-size: 0.875rem;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .field:focus {
          border-color: #dc2626;
          box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.1);
        }
        .field::placeholder {
          color: #9ca3af;
        }
      `}</style>

      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button onClick={() => setView('public')} className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white">
              <Zap className="h-5 w-5" />
            </div>
            <div>
              <div className="text-lg font-bold text-gray-900">ZAPPS <span className="text-red-600">CONSULTING</span></div>
              <div className="text-xs text-gray-500">Software Solutions</div>
            </div>
          </button>

          <nav className="hidden items-center gap-8 md:flex text-sm font-medium text-gray-600">
            <button onClick={() => setView('public')} className="hover:text-red-600 transition">Services</button>
            <button onClick={() => document.getElementById('packages-section')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-red-600 transition">Packages</button>
            <button onClick={() => setView('quote')} className="hover:text-red-600 transition">Get Quote</button>
          </nav>

          <div className="flex items-center gap-3">
            <button onClick={() => setView('quote')} className="hidden sm:inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700 transition">
              Get Estimate
            </button>
            <button onClick={() => setView((prev) => prev === 'admin' ? 'public' : 'admin')} className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-gray-600 hover:bg-gray-100 transition">
              <Lock className="h-4 w-4" />
            </button>
          </div>
        </div>
      </header>

      <main className="pb-28">
        {view === 'public' && <PublicPage estimate={estimate} setEstimate={setEstimate} openQuoteWizard={() => setView('quote')} />}
        {view === 'quote' && <QuoteWizard estimate={estimate} setEstimate={setEstimate} setView={setView} />}
        {view === 'admin' && <AdminDashboard />}
      </main>

      {view === 'public' && <StickySummaryBar estimate={estimate} openQuoteWizard={() => setView('quote')} />}

      <footer className="border-t border-gray-200 bg-gray-50 px-6 py-12">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-white">
                  <Zap className="h-4 w-4" />
                </div>
                <span className="font-bold text-gray-900">Zapps Consulting</span>
              </div>
              <p className="text-sm text-gray-600">Full-service software solutions for growing businesses.</p>
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-4">Services</div>
              <div className="space-y-2 text-sm text-gray-600">
                <div>Websites</div>
                <div>E-commerce</div>
                <div>Web Applications</div>
                <div>Business Systems</div>
              </div>
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-4">Company</div>
              <div className="space-y-2 text-sm text-gray-600">
                <div>About Us</div>
                <div>Case Studies</div>
                <div>Contact</div>
              </div>
            </div>
            <div>
              <div className="font-semibold text-gray-900 mb-4">Contact</div>
              <div className="space-y-2 text-sm text-gray-600">
                <div>hello@zapps.consulting</div>
                <div>+1 (555) 123-4567</div>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
            © 2026 Zapps Consulting. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}



