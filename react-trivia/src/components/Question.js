import axios from 'axios'
import React, { useEffect, useState } from 'react'



export default function Question({ category, handleGoBack }) {
    const [questions, setQuestions] = useState([])
    useEffect(() => {
       axios.get(`https://opentdb.com/api.php?amount=10&category=${category.id}&type=multiple`).then((response) => {
           console.log(response)
           const data = response.data.results.map((dataByCategory) => ({
               category: dataByCategory.category,
               type: dataByCategory.type,
               difficulty: dataByCategory.difficulty,
               question: dataByCategory.question,
               correct_answer: dataByCategory.correct_answer,
               incorrect_answers: dataByCategory.incorrect_answers,
               id: dataByCategory.id
           }))
         setQuestions(data)  
       })
   }, [category]);

    const [currentQuestion, setCurrentQuestion] = useState(0);
   
   return questions.length > currentQuestion ? (
  <div>
  <button className="go-back" onClick={handleGoBack}
            >Back to Categories
            </button>
    <div className="question-container">
        <h2> Question: {questions[currentQuestion].question}</h2>
    </div>

        <div className='answer-options'>
            <button className='selection'>{questions[currentQuestion].incorrect_answers[2]}</button>
            <button className='selection'>{questions[currentQuestion].incorrect_answers[1]}</button>
            <button className='selection'>{questions[currentQuestion].correct_answer}</button>

        </div>
 </div>    
    ) : (
       <h1> LOADING </h1>
   );
   
}    