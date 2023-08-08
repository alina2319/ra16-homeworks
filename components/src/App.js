import Cards from './components/Cards';
import Collapse from './components/Collapse/Collapse';
import Decomposition from './components/Decomposition';

export default function App() {
	return (
		<div className={'wrapper'}>
			<header className={'header'} id={'header'}>
				<div className={'header__body _container'}>
					<div className={'header__title'}>5. Домашнее задание к лекции «Композиция компонентов»</div>
				</div>
			</header>

			<main className={'main'}>
				<div className={'main__item task _container'} id={'task1'}>
					<header className={'task__header'}>
						<div className={'task__title'}>5.1. Карточки</div>
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
						<Cards />
					</div>
				</div>

				<div className={'main__item task _container'} id={'task2'}>
					<header className={'task__header'}>
						<div className={'task__title'}>5.2. Декомпозиция</div>
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
						<Decomposition />
					</div>
				</div>

				<div className={'main__item task task-3 _container'} id={'task3'}>
					<header className={'task__header'}>
						<div className={'task__title'}>5.3. Collapse*</div>
						<nav className={'task__menu menu'}>
							<div className={'menu__item'}>
								<a className={'menu__link menu__link-top'} href={'#task2'}>
									<span className={'_visually-hidden'}>previous task</span>
								</a>
							</div>
						</nav>
					</header>
					<div className={'task__body task-3__body'}>
						{/* Компонент задачи 3. */}
						<Collapse>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae inventore mollitia nesciunt non quos! Accusantium aperiam assumenda eaque impedit, in laborum libero nobis recusandae rem sunt totam, vel, vitae voluptate!
							</p>
						</Collapse>

						<Collapse isExpanded={false} collapsedLabel={'Показать'} expandedLabel={'Убрать'}>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae inventore mollitia nesciunt non quos! Accusantium aperiam assumenda eaque impedit, in laborum libero nobis recusandae rem sunt totam, vel, vitae voluptate!
							</p>
						</Collapse>
					</div>
				</div>
			</main>
		</div>
	);
}
