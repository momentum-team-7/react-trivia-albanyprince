import React, { useState } from 'react'
import lodash from 'lodash'
import he from 'he'

export default function Answer ({ correct_answer, incorrect_answers, questions, currentQuestion, setCurrentQuestion }) {
   
    const answers = [correct_answer, ...incorrect_answers]
    let correctAnswer = correct_answer
    const _ = require('lodash')
    const shuffledAnswers = _.shuffle(answers)
    const [score, setScore] = useState(0)
    const [showScore, setShowScore] = useState(0)
    
    const [selectedAnswer, setSelectedAnswer] = useState(0)
    
    const handleAnswer = (correctAnswer) => {
       if (correctAnswer) {
           setScore(score + 1)
       }
       const nextQuestion = currentQuestion + 1;
       if(nextQuestion < questions.length) {
           setCurrentQuestion(nextQuestion);
       } else {
           setShowScore(true);
       }
    };
    return (
    <div className='answer-options'>
           {shuffledAnswers.map((answer, index) => {
               return(
                   <button className='answer-choice' onClick={() => handleAnswer(answer.correctAnswer)}>{he.decode(answer)}</button>
               )
               
           })}
        <div className="score-box">
            {score}
        </div>
    </div>
    
)

}