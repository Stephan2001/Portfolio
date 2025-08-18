import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Terminal from './pages/home'
import { TerminalProvider } from './components/terminal-context'
import Inventory from './pages/Project1'
import Tuckshop from './pages/Project2'

function App() {
  return (
    <div>
      <TerminalProvider>
        <main>
          <Routes>
            <Route path='/' element={<Terminal />} />
            <Route path='/inventory' element={<Inventory />} />
            <Route path='/tuckshop' element={<Tuckshop />} />
          </Routes>
        </main>
      </TerminalProvider>
    </div>
  )
}

export default App
