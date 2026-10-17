
import React, { useEffect, useState } from 'react'
import { Quiz } from './Quiz';
import { useNavigate } from 'react-router-dom';

export default function ShowQuiz({isAttempted,setIsAttempted}) {

    const [countDown, setCountDown] = useState(3);
    const navigate = useNavigate()
   
    setIsAttempted(true);



    return (
        <div>
           <Quiz countDown={countDown} setCountDown={setCountDown}/>
        </div>
    )
}
