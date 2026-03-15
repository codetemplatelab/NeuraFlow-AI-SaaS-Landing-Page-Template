export const pricingPlans = [
  {
    name: 'Starter',
    price: '?1499',
    description: 'Perfect for fast-moving teams experimenting with AI automation.',
    features: [
      '3 active workflows',
      '1,000 AI runs / month',
      'Basic analytics',
      'Community support',
    ],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '?2999',
    description: 'Scale your automations with team collaboration and advanced insights.',
    features: [
      'Unlimited workflows',
      '10,000 AI runs / month',
      'Advanced analytics',
      'Priority support',
      'Team permissions',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: '?4999',
    description: 'Enterprise-grade controls, custom models, and premium onboarding.',
    features: [
      'Custom AI models',
      'Dedicated success manager',
      'Security & compliance',
      'On-premise connectors',
      '24/7 support',
    ],
    highlight: false,
  },
]

export const pricingComparison = [
  {
    feature: 'Automations',
    starter: 'Up to 3',
    pro: 'Unlimited',
    enterprise: 'Unlimited + custom',
  },
  {
    feature: 'AI runs',
    starter: '1K / month',
    pro: '10K / month',
    enterprise: 'Custom',
  },
  {
    feature: 'Analytics',
    starter: 'Standard',
    pro: 'Advanced',
    enterprise: 'Predictive',
  },
  {
    feature: 'Support',
    starter: 'Community',
    pro: 'Priority',
    enterprise: '24/7 + Slack',
  },
  {
    feature: 'Security',
    starter: 'SOC2-ready',
    pro: 'SOC2 + SSO',
    enterprise: 'Custom policy',
  },
]

