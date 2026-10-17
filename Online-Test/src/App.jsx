import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { BrowserRouter,Route,Routes,Link } from 'react-router-dom'
import {Dashboard} from './components/Dashboard'
import {Quiz} from './components/Quiz'
import ShowQuiz from './components/ShowQuiz'
import { Result } from './components/Result'

function App() {
  const [count, setCount] = useState(0)
  const [isAttempted,setIsAttempted] = useState(false);

  return (
   <>
      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard />}/>
          <Route path='/quiz/:sectionId' element={<ShowQuiz isAttempted={isAttempted} setIsAttempted={setIsAttempted}/>}/>
          <Route path='/result' element={<Result />}/>
        </Routes>
      </BrowserRouter>
   </>
  )
}

export default App
