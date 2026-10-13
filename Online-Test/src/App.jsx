import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import {Dashboard} from './components/Dashboard'
import {Quiz} from './components/Quiz'
import ShowQuiz from './components/ShowQuiz'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/quiz/:sectionId' element={<ShowQuiz />}/>
        </Routes>
      </BrowserRouter>
   </>
  )
}

export default App
