import React, { Suspense } from 'react'
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom'
import FunnelBuilder from '../pages/FunnelBuilder'
import Analytics from '../pages/Analytics'
import Loading from '../components/UI/Loading'

const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterRoutes>
        <Route path="/" element={<FunnelBuilder />} />
        <Route path="/funnel/:id" element={<FunnelBuilder />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </RouterRoutes>
    </Suspense>
  )
}

export default Routes
