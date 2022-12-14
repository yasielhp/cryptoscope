export const QuizResult = ({ result, retry }) => {
	return (
		<div className="result-screen">
			<h2 className="title">Cryptoscope</h2>
			<h2>
				Porcentaje de aciertos : <strong>{result.percentage}%</strong>
			</h2>
			<p>
				Respuesta correctas <strong>{result.correct}</strong> de{' '}
				<strong>{result.total}</strong> preguntas.
			</p>
			<p>
				{result.correct >= 0
					? 'No te preocupes, puedes intentarlo de nuevo.'
					: result.correct >= 3
					? '¡Bien hecho!'
					: result.correct >= 5
					? '¡Excelente!'
					: result.correct >= 7
					? '¡Muy bien!'
					: result.correct >= 12
					? '¡Genial!'
					: result.correct >= 14
					? '¡Increíble!'
					: '¡Increíble!'}
			</p>
			<button onClick={retry}>Reintentar</button>
		</div>
	)
}
