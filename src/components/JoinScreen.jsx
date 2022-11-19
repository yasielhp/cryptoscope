import logo from '/logo.svg'
export const JoinScreen = ({ start }) => {
	return (
		<div className="join-screen">
			<img width={150} src={logo} alt="Cryptoscope" />
			<h2>Cryptoscope</h2>
			<p>
				Demuestra cuanto sabes de criptomonedas completadas las siguientes
				preguntas{' '}
			</p>
			<button onClick={start}>Empezar</button>
			<div className="bottom">
				<p>
					Recuerda que cuentas con un tiempo de 15 segundo por cada pregunta{' '}
				</p>
			</div>
		</div>
	)
}
