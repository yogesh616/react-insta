import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Vote from './Vote.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<App />} />
    <Route path='/vote' element={<Vote />} />
   </Routes>
   </BrowserRouter>
  
)
