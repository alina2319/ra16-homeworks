import Time from './components/Time/Time';
import Highlight from './components/Highlight/Highlight';


export default function App() {
	return (
		<div className={'wrapper'}>
			<header className={'header'} id={'header'}>
				<div className={'header__body _container'}>
					<div className={'header__title'}>7. Домашнее задание к лекции «HOC»</div>
				</div>
			</header>

			<main className={'main'}>
				<div className={'main__item task _container'} id={'task1'}>
					<header className={'task__header'}>
						<div className={'task__title'}>7.1. Форматирование даты публикации</div>
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
						<Time />
					</div>
				</div>

				<div className={'main__item task _container'} id={'task2'}>
					<header className={'task__header'}>
						<div className={'task__title'}>7.2. Популярное и новое</div>
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
						<Highlight />
					</div>
				</div>

				<div className={'main__item task _container'} id={'task3'}>
					<header className={'task__header'}>
						<div className={'task__title'}>7.3. Агрегация данных*</div>
						<nav className={'task__menu menu'}>
							<div className={'menu__item'}>
								<a className={'menu__link menu__link-top'} href={'#task2'}>
									<span className={'_visually-hidden'}>previous task</span>
								</a>
							</div>
						</nav>
					</header>
					<div className={'task__body'}>
						{/* Компонент задачи 3. */}
					</div>
				</div>
			</main>
		</div>
	);
}
