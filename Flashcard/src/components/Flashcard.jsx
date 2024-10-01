import React, { useState } from 'react'

const Flashcard = (props) => {
    const [flip,setFlip]=useState(false);
    const [index,setindex]=useState(0);

  return (
    <>
    <div onClick={()=>setFlip(!flip)} className={`card ${flip?"flip":""}`}>
        <div className='front'>
            {props.flashcard[index].question}
        </div>

        <div className='back'>{props.flashcard[index].answer}</div>

    </div>
    <button className='NextBtn' onClick={()=>{
        setFlip(false);
        setindex(Math.floor(Math.random()*10))
    }}>Next</button>
    </>
  ) 
}

export default Flashcard