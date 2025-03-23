import { useState, useEffect } from 'react'
import { Layout, Typography } from 'antd'
import { HeartFilled } from '@ant-design/icons'
import { RouterProvider } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import BottomMenu from './components/BottomMenu'
import { router } from './router'

const { Header, Content } = Layout
const { Title } = Typography

function App() {
  const [currentTab, setCurrentTab] = useState('home')

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
    <Layout style={{ minHeight: '100vh' }}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Title level={3} style={{ color: 'white', margin: 0 }}>
          <HeartFilled style={{ marginRight: 8 }} />
          Mood Tracker
        </Title>
      </Header>
      <Content style={{ padding: '2rem', minHeight: '80vh', paddingBottom: '60px' }}>
        <RouterProvider router={router} />
        {import.meta.env.DEV && <TanStackRouterDevtools router={router} />}
      </Content>

      <BottomMenu currentTab={currentTab} onTabChange={handleTabChange} />
    </Layout>
  )
}

export default App
