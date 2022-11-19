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
			<button onClick={retry}>Reintentar</button>
		</div>
	)
}
