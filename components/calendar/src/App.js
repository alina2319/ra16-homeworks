import Calendar from './components/Calendar';

function App() {
	const now = new Date();

	return (
		<>
			<main className={'main'}>
				<div className={'main__body _container'}>
					<Calendar date={now}/>
				</div>
			</main>
		</>
	);
}

export default App;
