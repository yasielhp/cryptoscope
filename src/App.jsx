import { useState } from 'react'
import { JoinScreen, QuizScreen } from './components'

function App() {
	const [isQuizStarted, setIsQuizStarted] = useState(false)
	return (
		<>
			<div className="quiz-container">
				{isQuizStarted ? (
					<QuizScreen retry={() => setIsQuizStarted(false)} />
				) : (
					<JoinScreen start={() => setIsQuizStarted(true)} />
				)}
			</div>
		</>
	)
}

export default App
