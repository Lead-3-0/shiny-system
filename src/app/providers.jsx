import React from 'react'
import { useEffect } from 'react'

const Providers = ({ children }) => {
  useEffect(() => {
    // Initialize environment
    const apiUrl = import.meta.env.VITE_API_URL
    const appName = import.meta.env.VITE_APP_NAME
    const environment = import.meta.env.VITE_ENVIRONMENT

    if (environment === 'development') {
      console.log(`🚀 ${appName} initialized in ${environment} mode`)
      console.log(`📡 API URL: ${apiUrl}`)
    }
  }, [])

  return <>{children}</>
}

export default Providers
