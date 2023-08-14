import Stars from './components/Stars';
import Listing from './components/Listing';
import data from './components/Listing/data/etsy.json';
import MessageHistory from './components/MessageHistory';
import messages from './components/MessageHistory/data';

export default function App() {
	return (
		<div className={'wrapper'}>
			<header className={'header'} id={'header'}>
				<div className={'header__body _container'}>
					<div className={'header__title'}>3. Домашнее задание к лекции «Props»</div>
				</div>
			</header>

			<main className={'main'}>
				<div className={'main__item task _container'} id={'task1'}>
					<header className={'task__header'}>
						<div className={'task__title'}>3.1. Рейтинг фильмов</div>
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
						<Stars count={3}/>
						<Stars count={5}/>
						<Stars />
					</div>
				</div>

				<div className={'main__item task task_2 _container'} id={'task2'}>
					<header className={'task__header'}>
						<div className={'task__title'}>3.2. Список предложений</div>
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
					<div className={'task__body task__body_task2'}>
						{/* Компонент задачи 2. */}
						<Listing items={data}/>
					</div>
				</div>

				<div className={'main__item task _container'} id={'task3'}>
					<header className={'task__header'}>
						<div className={'task__title'}>3.3. История сообщений в чате*</div>
						<nav className={'task__menu menu'}>
							<div className={'menu__item'}>
								<a className={'menu__link menu__link-top'} href={'#task2'}>
									<span className={'_visually-hidden'}>previous task</span>
								</a>
							</div>
						</nav>
					</header>
					<div className={'task__body task__body_task_3'}>
						{/* Компонент задачи 3. */}
						<div className="clearfix container">
							<div className="chat chat_center">
								<div className="chat-history">
									<MessageHistory list={messages}/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
