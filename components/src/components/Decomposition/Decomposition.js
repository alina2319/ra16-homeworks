import Header from './Header/Header';
import Search from './Search/Search';
import Ad from './Ad/Ad';
import Items from './Items/Items';

export default function Decomposition() {
	return (
		<>
			<Header />
			<main className={'main'}>
				<Search />
				<Ad />
				<Items />
			</main>
		</>
	)
}
