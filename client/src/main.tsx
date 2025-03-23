import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { router } from './router'

// Initialize the router before rendering
const appElement = document.getElementById('root') as HTMLElement

// Create a function that loads the router and then renders the app
function renderApp() {
  router.load().then(() => {
    ReactDOM.createRoot(appElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  })
}

// Call the function to start the application
renderApp()
