import Hex2rgb from './components/Hex2rgb';
import Steps from './components/Steps';
import Photo from './components/Photo';

export default function App() {
	return (
		<div className={'wrapper'}>


			<main className={'main'}>
				<div className={'main__item _max-height _container'} id={'task1'}>
					<header className={'header'} id={'header'}>
						<div className={'header__body _container'}>
							<div className={'header__title'}>4. Домашнее задание к лекции «Формы»</div>
						</div>
					</header>
					<div className={'task _max-height__body _max-height'}>
						<header className={'task__header'}>
							<div className={'task__title'}>4.1. Конвертер цветов</div>
							<nav className={'task__menu menu'}>
								<div className={'menu__item'}>
									<a className={'menu__link menu__link-bottom'} href={'#task2'}>
										<span className={'_visually-hidden'}>next task</span>
									</a>
								</div>
							</nav>
						</header>
						<div className={'task__body _max-height__body _max-height'}>
							{/* Компонент задачи 1. */}
							<Hex2rgb />
						</div>
					</div>
				</div>

				<div className={'main__item task _container'} id={'task2'}>
					<header className={'task__header'}>
						<div className={'task__title'}>4.2. Учёт тренировок</div>
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
						<Steps />
					</div>
				</div>

				<div className={'main__item task _container'} id={'task3'}>
					<header className={'task__header'}>
						<div className={'task__title'}>4.3. Менеджер фото*</div>
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
						<Photo />
					</div>
				</div>
			</main>
		</div>
	);
}
