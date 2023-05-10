import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import "./styles/main.css"
import { AuthProvider } from './contexts/auth/AuthProvaider'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>,
)
