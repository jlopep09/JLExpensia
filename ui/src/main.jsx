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
import Help from './routes/Help/Help'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Auth0ProviderWithRouter>
      <Routes>

        
        <Route path="/" element={<Landing />} />
        <Route path="/help" element={<Help></Help>} />
        <Route element={<Layout />}>  
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>}/>
        </Route>
        <Route path="*" element={<NotFound />} />


      </Routes>
    </Auth0ProviderWithRouter>
    </BrowserRouter>
  </StrictMode>
)



