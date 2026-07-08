import { useCallback, useEffect, useState } from 'react'
import useUIStore from '../store/uiStore'

const useNotification = () => {
  const { addNotification, removeNotification, notifications } = useUIStore()
  const [notificationQueue, setNotificationQueue] = useState([])

  const showNotification = useCallback(
    (message, type = 'info', duration = 3000) => {
      const id = addNotification({
        message,
        type,
      })

      if (duration > 0) {
        setTimeout(() => {
          removeNotification(id)
        }, duration)
      }

      return id
    },
    [addNotification, removeNotification]
  )

  const showSuccess = useCallback(
    (message, duration = 3000) => {
      return showNotification(message, 'success', duration)
    },
    [showNotification]
  )

  const showError = useCallback(
    (message, duration = 3000) => {
      return showNotification(message, 'error', duration)
    },
    [showNotification]
  )

  const showWarning = useCallback(
    (message, duration = 3000) => {
      return showNotification(message, 'warning', duration)
    },
    [showNotification]
  )

  return {
    notifications,
    showNotification,
    showSuccess,
    showError,
    showWarning,
    removeNotification,
  }
}

export default useNotification
