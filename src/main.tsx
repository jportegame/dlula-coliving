import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
// @ts-ignore
import { SpeedInsights } from "@vercel/speed-insights/react"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <App />
        <SpeedInsights />
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>,
)
