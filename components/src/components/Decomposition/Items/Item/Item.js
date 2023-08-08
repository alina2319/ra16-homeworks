/**
 * Название блока.
 * @param props.title
 *
 * Ссылка
 * @param props.title
 *
 * Содержимое блока.
 * @param props.children
 *
 * @returns {JSX.Element}
 */

export default function Item(props) {
	return (
		<div className={'items'}>
			<div className={'item__title'}><a href={props.url}>{props.title}</a></div>
			{props.children}
		</div>
	)
}
