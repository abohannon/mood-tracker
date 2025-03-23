import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router'
import { Card, Space, Typography } from 'antd'
import { SmileOutlined } from '@ant-design/icons'

const { Title, Text } = Typography

// Root component for router
const rootRoute = createRootRoute({
  component: () => <RootComponent />
})

function RootComponent() {
  return <Outlet />
}

// Define homepage
export const homePage = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

function HomePage() {
  return (
    <Card title="Welcome to Mood Tracker" bordered={false} style={{ maxWidth: 600, margin: '0 auto' }}>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={4}>Track your moods with ease <SmileOutlined /></Title>
        <Text>This application helps you track and analyze your daily moods.</Text>
      </Space>
    </Card>
  )
}

// Define stats page
export const statsPage = createRoute({
  getParentRoute: () => rootRoute,
  path: '/stats',
  component: StatsPage,
})

function StatsPage() {
  return (
    <Card title="Your Mood Stats" bordered={false} style={{ maxWidth: 600, margin: '0 auto' }}>
      <Text>Here you'll see statistics about your moods. Coming soon...</Text>
    </Card>
  )
}

// Define profile page
export const profilePage = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: ProfilePage,
})

function ProfilePage() {
  return (
    <Card title="Your Profile" bordered={false} style={{ maxWidth: 600, margin: '0 auto' }}>
      <Text>Profile settings and information will appear here.</Text>
    </Card>
  )
}

// Create the route tree
const routeTree = rootRoute.addChildren([
  homePage,
  statsPage,
  profilePage,
])

// Create the router
export const router = createRouter({
  routeTree,
})

// Register the router for typesafety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// No need to export Outlet as it's imported directly from the library
