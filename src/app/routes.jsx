import React, { Suspense } from 'react'
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import FunnelBuilder from '../pages/FunnelBuilder'
import Analytics from '../pages/Analytics'
import UserDashboard from '../pages/UserDashboard'
import Loading from '../components/UI/Loading'

const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterRoutes>
        <Route path="/" element={<HomePage />} />
        <Route path="/funnel/new" element={<FunnelBuilder />} />
        <Route path="/funnel/:id" element={<FunnelBuilder />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </RouterRoutes>
    </Suspense>
  )
}

export default Routes
