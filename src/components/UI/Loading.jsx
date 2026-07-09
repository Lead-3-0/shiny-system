import React from 'react'
import { Loader } from 'lucide-react'
import '../../styles/components/loading.css'

const Loading = ({ fullScreen = false, message = 'Loading...' }) => {
  const Component = (
    <div className="loading-container">
      <div className="loading-spinner">
        <Loader size={40} />
      </div>
      <p className="loading-message">{message}</p>
    </div>
  )

  if (fullScreen) {
    return <div className="loading-fullscreen">{Component}</div>
  }

  return Component
}

export default Loading
