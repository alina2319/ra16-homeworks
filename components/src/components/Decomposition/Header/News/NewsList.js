/**
 * NewsList
 * Массив c объектами {
 *   title: 'Название новости',
 *   url: 'ссылка на новость',
 *   icon: картинка в виде Data URL,
 * }
 * @param props.news
 *
 * @returns {JSX.Element}
 */

export default function NewsList(props){
	return (
		<ul className={'news__list'}>
			<li>
				<a href={'/'}><img src={''} alt={''}/>Название новости</a>
			</li>
		</ul>
	)
}