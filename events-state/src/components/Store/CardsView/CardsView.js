import PropTypes from 'prop-types';
import './cards-view.css'

function CardsView ({ cards }) {
	return (
		<>
			{cards.map((card) =>
				<li key={Math.random()}>
					<div className={'store__product product-store product-store_cards-view'}>
						<div className={'product-store__body'}>
							<header className={'product-store__header'}>
								<div className={'product-store__title'}>{card.name}</div>
								<div className={'product-store__color'}>{card.color}</div>
							</header>

							<div className={'product-store__picture-card'}>
								<img src={`./store/img/${card.img}`} alt={card.name} />
							</div>

							<footer className={'product-store__footer'}>
								<div className={'product-store__price'}>${card.price}</div>
								<button className={'product-store__btn product-store__btn_cards-view'}>add to cart</button>
							</footer>
						</div>
					</div>
				</li>
			)}
		</>
	)
}

CardsView.propTypes = {
	cards: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default CardsView;