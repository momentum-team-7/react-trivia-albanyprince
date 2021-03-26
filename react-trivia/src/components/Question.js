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

   return questions.length > 0 ? (
  <div>
  <button className="go-back" onClick={handleGoBack}
            >Back to Categories
            </button>
    <div className="question-container">
        <h2> Question {questions[0].question}</h2>
    </div>

        <div className='grid grid-cols-1 gap-7 mt-7'>
            <button className='selection'>{questions[0].incorrect_answers[2]}</button>
            <button className='selection'>{questions[0].incorrect_answers[1]}</button>
            <button className='selection'>{questions[0].correct_answer}</button>

        </div>
 </div>    
    ) : (
       <h1> LOADING </h1>
   );
   
}    