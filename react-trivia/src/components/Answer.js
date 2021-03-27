import React from 'react'


export default function Answer () {
    const shuffledAnswer = [correct_answer, ... incorrect_answers];
    const [score, setScore] = useEffect(0);
    const [showScore, setShowScore] = useState(false);
    
    const handleAnswer = (answer) => {
        if (correct_answer) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
};
return (
		<div className='score'>
			{showScore ? (
				<div className='score-card'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				
					<div className='question-container'>
						{nextQuestion}
						
					</div>	
			)}
		</div>
	);   

}    