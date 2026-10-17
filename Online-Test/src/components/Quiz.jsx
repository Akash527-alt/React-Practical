
import React, { useEffect, useState } from 'react'
import PopUp from './PopUp'

export function Quiz({countDown,setCountDown}) {

    const [showQuiz, setShowQuiz] = useState(true);
    
    


    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown((prev) => {
                console.log(prev - 1)
                if(prev <= 1  ) return 0;
                return prev -1;
            });
            
        }, 1000);
        
        return () => clearInterval(interval);
    }, [])

    if(countDown==0){
        return (
              <div className='fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 ease-in-out '>
                <PopUp />
            </div>
        )

    }

    
   
    
    return (
        <div>
            <h1>
                Quiz
            </h1>
            <h2>Countdown : {countDown}</h2>


        </div>
    )
}
