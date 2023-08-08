/**
 * Массив с названиями пунктов меню.
 * @param props.items
 *
 * Обработчик нажатия на пункт меню, меняет состояние компонента Search.
 * @param props.HandleClick
 *
 * @returns {JSX.Element}
 */

export default function SearchMenu(props) {
	return (
		<nav className={'search__menu'}>
			<ul>
				<li><a href={'/'}>Пункт меню поиска</a></li>
			</ul>
		</nav>
	)
}