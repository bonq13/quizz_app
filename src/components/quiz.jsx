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

	const handleSelectOption = (option) => {
		const newUserAnswers = [...userAnswers];
		newUserAnswers[currentQuestion] = option;
		setUserAnswers(newUserAnswers);
	};

	const selectedAnswer = userAnswers[currentQuestion];

	const goToNext = () => {
		currentQuestion < questionBank.length - 1
			? setCurrentQuestion(currentQuestion + 1)
			: null;
	};

	const goToPrev = () => {
		currentQuestion > 0 ? setCurrentQuestion(currentQuestion - 1) : null;
	};

	return (
		<div>
			<h2>Question {currentQuestion + 1}</h2>
			<p className='question'>{questionBank[currentQuestion].question}</p>
			{questionBank[currentQuestion].options.map((option) => (
				<button
					key={option}
					className={'option' + (selectedAnswer === option ? ' selected' : '')}
					onClick={() => handleSelectOption(option)}>
					{option}
				</button>
			))}

			<div className='nav-buttons'>
				<button onClick={goToPrev} disabled={currentQuestion === 0}>
					Previous
				</button>
				<button onClick={goToNext} disabled={!selectedAnswer}>
					{currentQuestion === questionBank.length - 1 ? 'Finish Quiz' : 'Next'}
				</button>
			</div>
		</div>
	);
};

export default Quiz;
