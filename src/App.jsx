import { Routes, Route } from 'react-router-dom'
import Terminal from './pages/home'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path='/' element={<Terminal />} />
        </Routes>
      </main>
      <Analytics />
    </div>
  )
}

export default App
