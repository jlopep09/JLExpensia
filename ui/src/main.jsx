import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router"

import Home from './routes/Home/Home'
import NotFound from './routes/NotFound'

import Layout from './common/components/Layout'
import ProtectedRoute from './common/components/ProtectedRoute'
import Landing from './routes/Landing/Landing'
import Auth0ProviderWithRouter from './common/components/Auth0ProviderWithRouter'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Auth0ProviderWithRouter>

      <Routes>
        <Route path="/" element={<Landing />} />
        {/* Layout público */}
        <Route element={<Layout />}>  
          <Route path="/home" element={<Home />} />
          {/* Rutas protegidas */}
          <Route 
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Auth0ProviderWithRouter>
    </BrowserRouter>
  </StrictMode>
)
