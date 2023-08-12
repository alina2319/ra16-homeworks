import PropTypes from 'prop-types';
import './list-view.css';

function ListView({ items }) {
	return (
		<>
			{items.map((item) =>
				<li key={Math.random()}>
					<div className={'store__product product-store product-store_list-view'}>
						<div className={'product-store__picture-list'}>
							<img src={`./store/img/${item.img}`} alt={item.img} />
						</div>
						<div className={'product-store__title'}>{item.name}</div>
						<div className={'product-store__color'}>{item.color}</div>
						<div className={'product-store__price'}>${item.price}</div>
						<div className={'product-store__options'}>
							<button className={'product-store__btn product-store__btn_list-view'}>add to cart</button>
						</div>
					</div>
				</li>
			)}
		</>
	)
}

ListView.propTypes = {
	items: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default ListView;