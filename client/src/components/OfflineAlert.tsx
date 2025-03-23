import { Alert } from 'antd'
import { WifiOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'

export function OfflineAlert() {
  const [isOffline, setIsOffline] = useState(false)

  useEffect(() => {
    // Check initial state
    setIsOffline(!navigator.onLine)

    // Add event listeners
    const handleOnline = () => setIsOffline(false)
    const handleOffline = () => setIsOffline(true)

    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online', handleOnline)
      window.removeEventListener('offline', handleOffline)
    }
  }, [])

  if (!isOffline) return null

  return (
    <Alert
      message="You're offline"
      description="Some features may be limited until you reconnect."
      type="warning"
      showIcon
      icon={<WifiOutlined />}
      style={{ marginBottom: '16px' }}
    />
  )
}
