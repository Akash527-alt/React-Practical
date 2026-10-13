import {useNavigate} from 'react-router-dom'

import React from 'react'

export  function Dashboard() {


    const navigate = useNavigate();
        const quizId = 1;


    const HanldeQuiz = ()=>{
        navigate("/quiz/" + quizId);
    }

  return (
    <div className='flex items-center justify-center min-h-screen'>
       
        <h1>
            <button onClick={HanldeQuiz}
                className='p-4 m-2 border border-2 text-2xl font-bold rounded hover:bg-orange-400 transition-colors'
            >Start Quiz</button>
        </h1>
    </div>
  )
}
