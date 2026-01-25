import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
     <h1 className="text-3xl font-bold underline text-red">
    Hello world!
  </h1>
  </StrictMode>,
)
