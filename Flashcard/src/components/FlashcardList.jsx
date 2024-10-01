import React, { useState } from 'react'
import Flashcard from './Flashcard'

const FlashcardList = (props) => {
  return (
    <>
    <div>
       <Flashcard flashcard={props.flashcards} flip={props.flip}/>
    </div>
    </>
  )
}

export default FlashcardList