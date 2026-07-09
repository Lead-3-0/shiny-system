import { create } from 'zustand'

const initialLeads = [
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice@example.com',
    company: 'TechCorp',
    status: 'New',
    tags: ['Enterprise', 'Hot'],
    aiScore: 92,
    lastActivity: '2024-01-15',
    notes: '',
    messagesSent: 0,
    phone: '+1-555-0101'
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'bob@acme.com',
    company: 'Acme Inc',
    status: 'Contacted',
    tags: ['MidMarket'],
    aiScore: 78,
    lastActivity: '2024-01-14',
    notes: 'Interested in demo',
    messagesSent: 1,
    phone: '+1-555-0102'
  },
  {
    id: 3,
    name: 'Carol Williams',
    email: 'carol@startup.io',
    company: 'StartupXYZ',
    status: 'Replied',
    tags: ['Startup', 'Warm'],
    aiScore: 85,
    lastActivity: '2024-01-13',
    notes: 'Replied positively',
    messagesSent: 2,
    phone: '+1-555-0103'
  },
  {
    id: 4,
    name: 'David Brown',
    email: 'david@bigcorp.com',
    company: 'BigCorp Ltd',
    status: 'Converted',
    tags: ['Enterprise', 'Closed'],
    aiScore: 95,
    lastActivity: '2024-01-12',
    notes: 'Converted to customer',
    messagesSent: 3,
    phone: '+1-555-0104'
  },
]

export const useLeadsStore = create((set) => ({
  leads: initialLeads,
  selectedLead: null,
  filter: {
    status: '',
    tags: [],
    aiScoreMin: 0,
    aiScoreMax: 100,
    searchTerm: ''
  },
  
  // Lead actions
  addLead: (lead) => set((state) => ({
    leads: [...state.leads, { ...lead, id: Math.max(...state.leads.map(l => l.id), 0) + 1 }]
  })),
  
  updateLead: (id, updates) => set((state) => ({
    leads: state.leads.map(lead => lead.id === id ? { ...lead, ...updates } : lead)
  })),
  
  deleteLead: (id) => set((state) => ({
    leads: state.leads.filter(lead => lead.id !== id)
  })),
  
  selectLead: (lead) => set({ selectedLead: lead }),
  
  // Bulk actions
  deleteBulk: (ids) => set((state) => ({
    leads: state.leads.filter(lead => !ids.includes(lead.id))
  })),
  
  updateBulkStatus: (ids, status) => set((state) => ({
    leads: state.leads.map(lead => 
      ids.includes(lead.id) ? { ...lead, status } : lead
    )
  })),
  
  // Filter actions
  setFilter: (newFilter) => set((state) => ({
    filter: { ...state.filter, ...newFilter }
  })),
  
  // Get filtered leads
  getFilteredLeads: () => {
    const { leads, filter } = useLeadsStore.getState()
    return leads.filter(lead => {
      if (filter.status && lead.status !== filter.status) return false
      if (filter.tags.length > 0 && !filter.tags.some(tag => lead.tags.includes(tag))) return false
      if (lead.aiScore < filter.aiScoreMin || lead.aiScore > filter.aiScoreMax) return false
      if (filter.searchTerm && !lead.name.toLowerCase().includes(filter.searchTerm.toLowerCase()) && 
          !lead.email.toLowerCase().includes(filter.searchTerm.toLowerCase())) return false
      return true
    })
  },
  
  // Get unique tags
  getAllTags: () => {
    const { leads } = useLeadsStore.getState()
    const tags = new Set()
    leads.forEach(lead => lead.tags.forEach(tag => tags.add(tag)))
    return Array.from(tags)
  }
}))
