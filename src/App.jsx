import { Routes, Route } from 'react-router-dom'
import Terminal from './pages/home'

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path='/' element={<Terminal />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
