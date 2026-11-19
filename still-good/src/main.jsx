import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import './styles/variables.css'
import AppRoutes from './routes/AppRoutes.jsx'
import Home from './pages/Home/index.jsx'
import Login from './pages/Login/index.jsx'

const temaSalvo = localStorage.getItem('still-good-theme')
document.documentElement.dataset.theme =
  temaSalvo === 'escuro' ? 'escuro' : 'claro'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppRoutes />
  </StrictMode>,
)