/**
 * NewsMenu
 * Массив с названиями пунктов меню ['Сейчас в СМИ', 'в Германии', 'Рекомендуем']
 * @param props.items
 *
 * обработчик нажатия на пункт меню меняет состояние компонента News, в следствии чего
 * компонент NewsList отображает соответствующий список новостей.
 * @param props.handleClick
 *
 * @returns {JSX.Element}
 */

export default function NewsMenu (props) {
	return (
		<nav className={'news__menu menu-news'}>
			<ul>
				<li><a href={'/'}>Сейчас в СМИ</a></li>
			</ul>
		</nav>
	)
}
