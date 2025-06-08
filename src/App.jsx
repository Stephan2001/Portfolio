import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Terminal from './pages/Terminal'
import { TerminalProvider } from './components/terminal-context'

function App() {
  return (
    <div>
      <TerminalProvider>
        <main>
          <Routes>
            <Route path='/' element={<Terminal />} />
          </Routes>
        </main>
      </TerminalProvider>
    </div>
  )
}

export default App
