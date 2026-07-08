import LandingPageNode from './LandingPageNode'
import LeadCaptureNode from './LeadCaptureNode'
import EmailAutomationNode from './EmailAutomationNode'
import AIQualificationNode from './AIQualificationNode'
import PaymentNode from './PaymentNode'
import ConditionNode from './ConditionNode'
import AnalyticsNode from './AnalyticsNode'

const NodeRegistry = {
  nodes: {
    landingPage: LandingPageNode,
    leadCapture: LeadCaptureNode,
    emailAutomation: EmailAutomationNode,
    aiQualification: AIQualificationNode,
    payment: PaymentNode,
    condition: ConditionNode,
    analytics: AnalyticsNode,
  },

  nodeTypes: [
    {
      id: 'landingPage',
      label: 'Landing Page',
      icon: 'Globe',
      description: 'Entry point for visitors',
      color: '#3B82F6',
    },
    {
      id: 'leadCapture',
      label: 'Lead Capture',
      icon: 'Mail',
      description: 'Capture lead information',
      color: '#8B5CF6',
    },
    {
      id: 'emailAutomation',
      label: 'Email Automation',
      icon: 'Mail',
      description: 'Send automated emails',
      color: '#EC4899',
    },
    {
      id: 'aiQualification',
      label: 'AI Qualification',
      icon: 'Brain',
      description: 'AI-powered lead qualification',
      color: '#06B6D4',
    },
    {
      id: 'payment',
      label: 'Payment',
      icon: 'CreditCard',
      description: 'Process payments',
      color: '#10B981',
    },
    {
      id: 'condition',
      label: 'Condition',
      icon: 'GitBranch',
      description: 'Split flow based on conditions',
      color: '#F59E0B',
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: 'BarChart3',
      description: 'Track metrics and conversions',
      color: '#6366F1',
    },
  ],

  getNodeTypes: () => NodeRegistry.nodes,

  getNodeConfig: (nodeId) => NodeRegistry.nodeTypes.find((n) => n.id === nodeId),

  getAllNodeConfigs: () => NodeRegistry.nodeTypes,
}

export default NodeRegistry
