import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider'
import { SocketProvider } from './context/SocketContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <AuthProvider>
     <SocketProvider>
      <App />
     </SocketProvider>
    </AuthProvider>
  </Router>
    
)