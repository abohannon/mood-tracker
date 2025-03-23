import { useState, useEffect } from 'react'
import { Layout, Typography, notification, Button } from 'antd'
import { HeartFilled, CloudDownloadOutlined } from '@ant-design/icons'
import { RouterProvider } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import BottomMenu from './components/BottomMenu'
import SafeArea from './components/SafeArea'
import { router } from './router'

const { Header, Content } = Layout
const { Title } = Typography

// PWA update detection
const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').then(registration => {
        // Check for updates
        registration.addEventListener('updatefound', () => {
          const newWorker = registration.installing
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                // New content is available
                notification.info({
                  message: 'App Update Available',
                  description: 'A new version is available. Click to update.',
                  btn: (
                    <Button
                      type="primary"
                      onClick={() => {
                        newWorker.postMessage({ type: 'SKIP_WAITING' })
                        window.location.reload()
                      }}
                      icon={<CloudDownloadOutlined />}
                    >
                      Update Now
                    </Button>
                  ),
                  duration: 0
                })
              }
            })
          }
        })

        // Check for updates every 60 minutes (for iOS especially)
        setInterval(() => {
          registration.update()
          console.log('Checking for updates...')
        }, 60 * 60 * 1000)
      }).catch(error => {
        console.error('Service worker registration failed:', error)
      })
    })

    // Listen for the controllerchange event to reload the page when the new SW takes over
    let refreshing = false
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (!refreshing) {
        refreshing = true
        window.location.reload()
      }
    })
  }
}

function App() {
  const [currentTab, setCurrentTab] = useState('home')
  const [updating, setUpdating] = useState(false)

  // iOS detection
  const isIOS = () => {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
           (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  }

  // Check if running as standalone PWA
  const isStandalone = () => {
    return window.matchMedia('(display-mode: standalone)').matches ||
           (window.navigator as Navigator & { standalone?: boolean }).standalone === true;
  }

  // Show iOS-specific message on app launch
  useEffect(() => {
    if (isIOS() && isStandalone()) {
      // For iOS PWAs, we show a special message on how to refresh
      notification.info({
        message: 'Tip: How to update this app',
        description: 'To get the latest version, tap the update button in the header or fully close the app (swipe up) and reopen it.',
        duration: 8,
      });
    }
  }, []);

  // Initialize service worker for PWA updates
  useEffect(() => {
    registerServiceWorker()
  }, [])

  // Manual update check function
  const checkForUpdates = () => {
    setUpdating(true)
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready.then(registration => {
        registration.update().then(() => {
          setTimeout(() => {
            setUpdating(false)
            notification.success({
              message: 'Update Check Complete',
              description: 'Checked for updates. If available, you will see an update notification.',
              duration: 3
            })
          }, 1000)
        })
      })
    } else {
      setUpdating(false)
    }
  }

  // Keep tab state in sync with current route
  useEffect(() => {
    // Subscribe to route changes
    const unsubscribe = router.subscribe('onBeforeNavigate', () => {
      const path = router.state.location.pathname
      if (path === '/') setCurrentTab('home')
      else if (path === '/stats') setCurrentTab('stats')
      else if (path === '/profile') setCurrentTab('profile')
    })

    return unsubscribe
  }, [])

  // Handle tab change
  const handleTabChange = (tab: string) => {
    setCurrentTab(tab)
    // Navigate based on the selected tab
    switch (tab) {
      case 'home':
        router.navigate({ to: '/' })
        break
      case 'stats':
        router.navigate({ to: '/stats' })
        break
      case 'profile':
        router.navigate({ to: '/profile' })
        break
      default:
        router.navigate({ to: '/' })
    }
  }

  return (
    <SafeArea position="both" style={{ minHeight: '100vh' }}>
      <Layout style={{ minHeight: '100vh' }}>
        <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Title level={3} style={{ color: 'white', margin: 0 }}>
            <HeartFilled style={{ marginRight: 8 }} />
            Mood Tracker
          </Title>
          <Button
            type="text"
            icon={<CloudDownloadOutlined spin={updating} />}
            onClick={checkForUpdates}
            loading={updating}
            style={{ color: 'white' }}
          />
        </Header>
        <Content style={{ padding: '2rem', minHeight: '80vh', paddingBottom: '60px' }}>
          <RouterProvider router={router} />
          {import.meta.env.DEV && <TanStackRouterDevtools router={router} />}
        </Content>

        <BottomMenu currentTab={currentTab} onTabChange={handleTabChange} />
      </Layout>
    </SafeArea>
  )
}

export default App
