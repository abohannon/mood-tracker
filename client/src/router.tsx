import { createRootRoute, createRoute, createRouter, Outlet } from '@tanstack/react-router'
import { HomePage } from './components/HomePage'
import { StatsPage } from './components/StatsPage'
import { ProfilePage } from './components/ProfilePage'
import { OfflineAlert } from './components/OfflineAlert'

// Root component for router
const rootRoute = createRootRoute({
  component: () => (
    <div>
      <OfflineAlert />
      <Outlet />
    </div>
  )
})

// Define homepage
export const homePage = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
})

// Define stats page
export const statsPage = createRoute({
  getParentRoute: () => rootRoute,
  path: '/stats',
  component: StatsPage,
})

// Define profile page
export const profilePage = createRoute({
  getParentRoute: () => rootRoute,
  path: '/profile',
  component: ProfilePage,
})

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
