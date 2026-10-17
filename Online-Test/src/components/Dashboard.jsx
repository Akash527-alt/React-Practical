import {useNavigate} from 'react-router-dom'

import React, { useState } from 'react'

export  function Dashboard() {


    const navigate = useNavigate();
    const quizId = 1;
    const [popup,setPopup] = useState(false);


    const HanldeQuiz = ()=>{
        setPopup(true);
    }

    const handleConfirm = () => {
          navigate("/quiz/" + quizId);
    }

  return (
    <div className='flex items-center justify-center min-h-screen'>
       
        <h1>
            <button onClick={HanldeQuiz}
                className='p-4 m-2 border border-2 text-2xl font-bold rounded hover:bg-orange-400 transition-colors'
            >Start Quiz</button>
        </h1>

        {
            popup && <>
                <div className='fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-all duration-1000 ease-in-out '>
                    <div className='rounded-md bg-white p-6 shadow-xl'>
                        <div className='text-2xl font-black-700'>

                            <h2>1. confirm to start the quiz ? </h2>
                            <h2>2. Once the quiz started , you are not allowed to leave? </h2>
                            <h2>3. Quiz will be submitted automatically, onec the time is over </h2>
                        </div>


                       <div className='flex flex-row justify-between'>

                         <button
                        onClick={handleConfirm}
                        className='p-4  text-center w-40 text-2xl font-bold  mt-4 bg-orange-500 hover:bg-orange-300 rounded-md'>cancel</button>
                         <button
                        onClick={handleConfirm}
                        className='p-4  text-center w-40 text-2xl font-bold  mt-4 bg-orange-500 hover:bg-orange-300 rounded-md'>Start</button>
                       </div>
                    </div>
                    
                </div>
            </>
        }
    </div>

  )
}
