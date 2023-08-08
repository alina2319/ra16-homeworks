import NewsMenu from './NewsMenu';
import NewsList from './NewsList';

/**
 * NewsList управляет содержимым списка новостей.
 *
 * @returns {JSX.Element}
 */

export default function News() {
	return (
		<div className={'news'}>
			<NewsMenu />
			<NewsList />
		</div>
	)
}