import React, { useState } from 'react'
import he from 'he'
// import lodash from 'lodash'

export default function Answer ({ correct_answer, incorrect_answers, questions, currentQuestion, setCurrentQuestion, correctAnswer, selected }) {
   
    const answers = [correct_answer, ...incorrect_answers]
    const _ = require('lodash')
    const shuffledAnswers = _.shuffle(answers)
    const [selectedAnswer, setSelectedAnswer] = useState(0)
 
    const [score, setScore] = useState(0)
    // const [showScore, setShowScore] = useState(0)
    
    // const [selectedAnswer, setSelectedAnswer] = useState(null)
     
    
    return (
    <div>
           {shuffledAnswers.map((answer, index) => {
               return(
                <div className="answers">
                   <button className="options" onClick={() => {answer === correctAnswer ? setSelectedAnswer(true) : setSelectedAnswer(false);
                   let newScore = score
                   correctAnswer === answer ? setScore(newScore + 1) : setScore(newScore);}
                   }>{(he.decode(answer))}</button>
                   
                
                      
                </div>
               )
               
           })}
                <div className="correct" style={selectedAnswer === true ? {} : { display: 'none'}}>YES!</div>
                   <div className="incorrect" style={selectedAnswer === false ? {} : { display: 'none'}}>NO!</div> 
        <div className="score-box">
            {score}
        </div>
            <button className='next-question' onClick={() => {
                    selected();
                }}>Next Question</button>
    </div>
    
)

}