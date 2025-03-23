import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { router } from './router'

const appElement = document.getElementById('root') as HTMLElement

function renderApp() {
  router.load().then(() => {
    ReactDOM.createRoot(appElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
    )
  })
}

renderApp()
