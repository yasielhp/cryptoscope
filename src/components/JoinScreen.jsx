export const JoinScreen = ({ start }) => {
	return (
		<div className="join-screen">
			<h2>Cryptoscope</h2>
			<p>
				Demuestra cuento sabes de criptomonedas completado la siguientes
				preguntas{' '}
			</p>
			<button onClick={start}>Empazar</button>
		</div>
	)
}
