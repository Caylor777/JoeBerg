import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Home from './pages/Home.tsx';
import Donate from './pages/Donate.tsx';
import JBSfutureVision from './pages/JBSfutureVision.tsx';
import JoeBergSeminarStory from './pages/JoeBergSeminarStory.tsx';
import GuidelinesForParticipation from './pages/GuidelinesForParticipation.tsx';
import Account from './pages/Account.tsx';
import Dashboard from './pages/Dashboard.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="JoeBerg/donate" element={<Donate />} />
        <Route path="JoeBerg/JBS-Future-Vision" element={<JBSfutureVision />} />
        <Route path="JoeBerg/joe-berg-story" element={<JoeBergSeminarStory />} />
        <Route path="JoeBerg/guidelines" element={<GuidelinesForParticipation />} />
        <Route path="JoeBerg/account" element={<Account />} />
        <Route path="JoeBerg/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
