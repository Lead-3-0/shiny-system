import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
import Card from '../UI/Card'
import '../styles/analytics.css'

const ConversionChart = () => {
  const data = [
    { name: 'Day 1', visitors: 400, leads: 80, conversions: 12 },
    { name: 'Day 2', visitors: 650, leads: 130, conversions: 22 },
    { name: 'Day 3', visitors: 800, leads: 160, conversions: 32 },
    { name: 'Day 4', visitors: 950, leads: 190, conversions: 45 },
    { name: 'Day 5', visitors: 1100, leads: 220, conversions: 55 },
    { name: 'Day 6', visitors: 1200, leads: 240, conversions: 65 },
    { name: 'Day 7', visitors: 1400, leads: 280, conversions: 78 },
  ]

  return (
    <Card title="Conversion Funnel" className="chart-card">
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="visitors"
            stroke="#3B82F6"
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="leads"
            stroke="#8B5CF6"
            dot={{ r: 4 }}
          />
          <Line
            type="monotone"
            dataKey="conversions"
            stroke="#10B981"
            dot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default ConversionChart
