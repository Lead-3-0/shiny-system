import React, { Suspense, lazy } from 'react'
import { Routes as RouterRoutes, Route, Navigate } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import Loading from '../components/UI/Loading'

// Lazy load pages
const HomePage = lazy(() => import('../pages/HomePage'))
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Leads = lazy(() => import('../pages/Leads'))
const LeadDetails = lazy(() => import('../pages/LeadDetails'))
const Automations = lazy(() => import('../pages/Automations'))
const Campaigns = lazy(() => import('../pages/Campaigns'))
const AIAssistant = lazy(() => import('../pages/AIAssistant'))
const Analytics = lazy(() => import('../pages/Analytics'))
const Settings = lazy(() => import('../pages/Settings'))
const FunnelBuilder = lazy(() => import('../pages/FunnelBuilder'))
const UserDashboard = lazy(() => import('../pages/UserDashboard'))

const Routes = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterRoutes>
        {/* Public routes */}
        <Route path="/" element={<HomePage />} />
        
        {/* App routes - wrapped in Layout */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/leads"
          element={
            <Layout>
              <Leads />
            </Layout>
          }
        />
        <Route
          path="/leads/:id"
          element={
            <Layout>
              <LeadDetails />
            </Layout>
          }
        />
        <Route
          path="/automations"
          element={
            <Layout>
              <Automations />
            </Layout>
          }
        />
        <Route
          path="/campaigns"
          element={
            <Layout>
              <Campaigns />
            </Layout>
          }
        />
        <Route
          path="/ai-assistant"
          element={
            <Layout>
              <AIAssistant />
            </Layout>
          }
        />
        <Route
          path="/analytics"
          element={
            <Layout>
              <Analytics />
            </Layout>
          }
        />
        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />
        
        {/* Legacy routes */}
        <Route
          path="/funnel/new"
          element={
            <Layout>
              <FunnelBuilder />
            </Layout>
          }
        />
        <Route
          path="/funnel/:id"
          element={
            <Layout>
              <FunnelBuilder />
            </Layout>
          }
        />
        <Route
          path="/profile"
          element={
            <Layout>
              <UserDashboard />
            </Layout>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </RouterRoutes>
    </Suspense>
  )
}

export default Routes
