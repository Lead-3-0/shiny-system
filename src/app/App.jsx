import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './routes'
import Providers from './providers'

function App() {
  return (
    <Providers>
      <Router>
        <Routes />
      </Router>
    </Providers>
  )
}

export default App
