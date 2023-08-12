import Portfolio from './components/Portfolio';
import Store from './components/Store';
import Dropdown from './components/Dropdown';

function App() {
	return (
		<div className={'wrapper'}>
			<header className={'header'} id={'header'}>
				<div className={'header__body _container'}>
					<div className={'header__title'}>2. Домашнее задание к лекции «События и состояние»</div>
				</div>
			</header>

			<main className={'main'}>
				<div className={'main__item task _container'} id={'task1'}>
					<header className={'task__header'}>
						<div className={'task__title'}>2.1. Портфолио с фильтрами</div>
						<nav className={'task__menu menu'}>
							<div className={'menu__item'}>
								<a className={'menu__link menu__link-bottom'} href={'#task2'}>
									<span className={'_visually-hidden'}>next task</span>
								</a>
							</div>
						</nav>
					</header>
					<div className={'task__body'}>
						{/* Компонент задачи 1. */}
						<Portfolio />
					</div>
				</div>

				<div className={'main__item task _container'} id={'task2'}>
					<header className={'task__header'}>
						<div className={'task__title'}>2.2. Расположение товаров</div>
						<nav className={'task__menu menu'}>
							<div className={'menu__item'}>
								<a className={'menu__link menu__link-top'} href={'#header'}>
									<span className={'_visually-hidden'}>previous task</span>
								</a>
							</div>
							<div className={'menu__item'}>
								<a className={'menu__link menu__link-bottom'} href={'#task3'}>
									<span className={'_visually-hidden'}>next task</span>
								</a>
							</div>
						</nav>
					</header>
					<div className={'task__body'}>
						{/* Компонент задачи 2. */}
						<Store />
					</div>
				</div>

				<div className={'main__item task task_3 _container'} id={'task3'}>
					<header className={'task__header'}>
						<div className={'task__title'}>2.3. Выпадающий список*</div>
						<nav className={'task__menu menu'}>
							<div className={'menu__item'}>
								<a className={'menu__link menu__link-top'} href={'#task2'}>
									<span className={'_visually-hidden'}>previous task</span>
								</a>
							</div>
						</nav>
					</header>
					<div className={'task__body task__body_task3'}>
						{/* Компонент задачи 3. */}
						<Dropdown />
					</div>
				</div>

			</main>
		</div>
	);
}

export default App;
