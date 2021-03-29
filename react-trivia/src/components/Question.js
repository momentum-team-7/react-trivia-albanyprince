import axios from 'axios'
import React, { useEffect, useState } from 'react'
import he from 'he'
// import lodash from 'lodash'
import Answer from './Answer'


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
    
    // const handleAnswer = (answer) => {
    //     //answer
    // };
    const [currentQuestion, setCurrentQuestion] = useState(0)
    const nextQuestion = () => {
        if (currentQuestion < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        }
    }
 
    
   return questions.length > currentQuestion ? (
    <div>
        <button className="go-back" onClick={handleGoBack}
            >Back to Categories
            </button>
        <div className="question-container">
            <h2> {(he.decode(questions[currentQuestion].question))}</h2>
                <Answer 
            questions = {(questions[currentQuestion].question)}
            incorrect_answers = {questions.[currentQuestion].incorrect_answers}
            correct_answer = {questions.[currentQuestion].correct_answer} 
            correctAnswer = {questions.correct_answer}
            selected={() => {
                setCurrentQuestion(currentQuestion + 1);
                nextQuestion()
            }}/>
        </div>
   
    </div>  
 ) : (
  <h1> LOADING </h1>
 )
}
//     ) : (
//        <h1> LOADING </h1>
//    );
