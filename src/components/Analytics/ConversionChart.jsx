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
import '../../styles/analytics.css'

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
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(100, 116, 139, 0.2)" />
          <XAxis dataKey="name" stroke="var(--color-text-tertiary)" />
          <YAxis stroke="var(--color-text-tertiary)" />
          <Tooltip
            contentStyle={{
              backgroundColor: 'var(--color-surface-medium)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--border-radius-md)',
              color: 'var(--color-text-primary)',
            }}
          />
          <Legend wrapperStyle={{ color: 'var(--color-text-secondary)' }} />
          <Line
            type="monotone"
            dataKey="visitors"
            stroke="#0ea5e9"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="leads"
            stroke="#8b5cf6"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
          <Line
            type="monotone"
            dataKey="conversions"
            stroke="#10b981"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}

export default ConversionChart
