import {useState} from 'react';
import './store.css';
import IconSwitch from './IconSwitch/IconSwitch';
import CardsView from './CardsView/CardsView';
import ListView from './ListView/ListView';
import products from './products';

export default function Store() {
	const [icon, setIcon] = useState('view_list');
	const onSwitch = () => {
		setIcon((prevIcon) => {
			if (prevIcon === 'view_list') return 'view_module';
			return 'view_list';
		})
	}

	return (
		<div className={'store'}>
			<header className={'store__header'}>
				<nav className={'store__menu'}>
					<IconSwitch
						icon={icon}
						onSwitch={onSwitch}
					/>
				</nav>
			</header>

			<div className={'store__body'}>
				<ul className={'store__products' +
				`${icon === 'view_list' ? ' store__products_cards-view' : ' store__products_list-view'}`}>
					{icon === 'view_list' ? <CardsView cards={products}/> : <ListView items={products}/>}
				</ul>
			</div>
		</div>
	)
}
