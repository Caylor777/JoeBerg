import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './pages/Home.tsx';
import Donate from './pages/Donate.tsx';
import JBSfutureVision from './pages/JBSfutureVision.tsx';
import Donate from './pages/donate.tsx';
import Account from './pages/Account.tsx';
import Dashboard from './pages/Dashboard.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/JBS-Future-Vision" element={<JBSfutureVision />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/account" element={<Account />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
