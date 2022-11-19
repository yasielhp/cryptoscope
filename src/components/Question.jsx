import { useState, useEffect, useRef } from 'react'
import { flushSync } from 'react-dom'

export const Question = ({
	question,
	totalQuestion,
	currentQuestion,
	setAnswer,
}) => {
	const [selectedOption, setSelectedOption] = useState(null)
	const timer = useRef(null)
	const progressBar = useRef(null)

	function gotoNextQuestion() {
		if (timer.current) {
			clearTimeout(timer.current)
		}
		flushSync(() => {
			setAnswer(selectedOption)
		})
		setSelectedOption(null)
	}

	useEffect(() => {
		progressBar.current.classList.remove('active')
		setTimeout(() => {
			progressBar.current.classList.add('active')
		}, 0)
		timer.current = setTimeout(gotoNextQuestion, 15 * 1000) // 15 secondsç

		return gotoNextQuestion
	}, [question])

	return (
		<div className="question">
			<div className="question-count">
				<b> {currentQuestion}</b> de <b> {totalQuestion}</b>
			</div>
			<div className="progress-bar" ref={progressBar}></div>

			<div className="main">
				<div className="title">
					<span>Pregunta:</span>
					<p>{question.title}</p>
				</div>
				<div className="options">
					{question.options.map((option, index) => {
						return (
							<div
								className={index == selectedOption ? 'option active' : 'option'}
								key={index}
								onClick={() => setSelectedOption(index)}>
								{option}
							</div>
						)
					})}
				</div>
			</div>
			<div className="control">
				<button onClick={gotoNextQuestion}>Siguiente</button>
			</div>
		</div>
	)
}
