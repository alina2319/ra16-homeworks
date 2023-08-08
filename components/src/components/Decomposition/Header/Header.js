import News from './News/News';
import Rates from './Rates/Rates';
import BlockRandom from './BlockRandom/BlockRandom';

export default function Header() {
	return (
		<header className={'header'}>
			<News />
			<Rates />
			<BlockRandom />
		</header>
	)
}