import React from 'react'
import { Clock, User, Mail, MessageSquare, CreditCard } from 'lucide-react'
import Card from '../UI/Card'

const RecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'lead',
      title: 'New lead captured',
      description: 'john.doe@example.com',
      time: '2 minutes ago',
      icon: User,
    },
    {
      id: 2,
      type: 'email',
      title: 'Email sent',
      description: 'Automated welcome series',
      time: '15 minutes ago',
      icon: Mail,
    },
    {
      id: 3,
      type: 'message',
      title: 'Lead responded',
      description: 'Clicked on email link',
      time: '1 hour ago',
      icon: MessageSquare,
    },
    {
      id: 4,
      type: 'conversion',
      title: 'Conversion completed',
      description: 'Order #12345 - $299.00',
      time: '3 hours ago',
      icon: CreditCard,
    },
  ]

  return (
    <Card title="Recent Activity" className="recent-activity-section">
      <div className="activity-list">
        {activities.map((activity) => {
          const Icon = activity.icon
          return (
            <div key={activity.id} className="activity-item">
              <div className="activity-icon">
                <Icon size={20} />
              </div>
              <div className="activity-content">
                <p className="activity-title">{activity.title}</p>
                <p className="activity-description">{activity.description}</p>
                <span className="activity-time">{activity.time}</span>
              </div>
            </div>
          )
        })}
      </div>
    </Card>
  )
}

export default RecentActivity
