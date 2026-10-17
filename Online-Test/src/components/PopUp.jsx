
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function PopUp() {

  const navigate = useNavigate();

  function ShowResult(){
    console.log("result clicked")
    navigate("/result",
      {replace:true}
    );
  }


  return (  
   <div>
        <div>
            <h1>Time's Up</h1>
            
        </div>
        <button
        className='p-4 shadow-md text-black font-bold'
         onClick={ShowResult} >Show Result</button>
   </div>
  )
}
