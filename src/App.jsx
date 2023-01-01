import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GreenContainer from './components/GreenContainer'
import Login from './pages/Login'
import Register from './pages/Register'

export default function App() {
  return (
    <main className="h-screen w-[100%] flex">
      <GreenContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </main>
  )
}
