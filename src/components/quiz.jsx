import React, { useState } from 'react';

const Quiz = () => {
	const questionBank = [
		{
			question: 'What is the capital of Poland?',
			options: ['Berlin', 'Moscow', 'Warsaw', 'Paris'],
			answer: 'Warsaw',
			key: 1,
		},
		{
			question: 'What is the largest planet in our Solar System?',
			options: ['Earth', 'Jupiter', 'Mars', 'Saturn'],
			answer: 'Jupiter',
		},
		{
			question: 'Which element has the chemical symbol "O"?',
			options: ['Oxygen', 'Gold', 'Iron', 'Helium'],
			answer: 'Oxygen',
		},
	];
	const initialAnswers = [null, null, null];

	const [userAnswers, setUserAnswers] = useState(initialAnswers);
	const [currentQuestion, setCurrentQuestion] = useState(0);

	const handleSelectOption = (option) => {};

	return (
		<div>
			<h2>Question 1</h2>
			<p className='question'>{questionBank[currentQuestion].question}</p>
			{questionBank[currentQuestion].options.map((option) => (
				<button
					key={option}
					className='option'
					onClick={() => handleSelectOption(option)}>
					{option}
				</button>
			))}
   
			<div className='nav-buttons'>
				<button>Previous</button>
				<button>Next</button>
			</div>
		</div>
	);
};

export default Quiz;
