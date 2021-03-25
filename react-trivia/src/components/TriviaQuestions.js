import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'


export default function TriviaQuestions({ category, handleGoBack }) {
    
    const [TriviaQuestions, setTriviaQuestions] = useState([])

   useEffect(() => {
       axios.get(`https://opentdb.com/api.php?amount=10&category=${category.id}`).then((response) => {
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
         setTriviaQuestions(data)  
       })
   }, [category])

   console.log('QUESTION RENDER:', TriviaQuestions)

    return (
        <div>
            <h2>Questions</h2>
            <button className="go-back" onClick={handleGoBack}
            >Back to Categories
            </button>
        <ul>
            {TriviaQuestions.map((dataByCategory) => (
                <div key={dataByCategory.id}> 
                    <Card className="card">
                        <Card.Body>
                            <Card.Text>
                                {dataByCategory.question}
                            </Card.Text>
                                <ListGroup className="answer-group">
                                    <ListGroupItem>{dataByCategory.correct_answer}</ListGroupItem>
                                    <ListGroupItem>{dataByCategory.incorrect_answers}</ListGroupItem>
                                </ListGroup>
                        </Card.Body>    
                    </Card>   
                </div>
            ))}
        </ul>
        
        </div>

    )

}