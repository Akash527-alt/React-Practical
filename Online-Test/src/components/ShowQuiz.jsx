
import React, { useEffect, useState } from 'react'
import { Quiz } from './Quiz';
import { useNavigate } from 'react-router-dom';

export default function ShowQuiz() {

    const [showQuiz, setShowQuiz] = useState(true);
    const [countDown, setCountDown] = useState(3);
    const navigate = useNavigate()
    useEffect(() => {
        const interval = setInterval(() => {
            setCountDown((prev) => {
                console.log(prev - 1)
                return prev - 1
            });

        }, 1000);

        return () => clearInterval(interval);
    }, [])

    if (countDown == 0) {
        setShowQuiz(false);
    }

    return (
        <div>
            {showQuiz ? (<Quiz countDown={countDown} />) : "Time's up"};
        </div>
    )
}
