import './listing.css';

function Listing({ items }) {
	const getTitle = (title) => {
		if (title.length < 50) return title;
		return `${title.slice(0, 50)}...`;
	}

	const getPrice = (price, currency_code) => {
		const currencies = {
			USD: '$',
			EUR: '€',
		}

		return currencies[currency_code] ? `${currencies[currency_code]}${price}` : `${currency_code} ${price}`
	}

	const getLevel = (quantity) => {
		if (quantity <= 10) return 'level-low';
		if (quantity <= 20) return 'level-medium';
		return 'level-high';
	}

	return (
		<div className="item-list">
			{items.map((item) => {
				if (!item.title) return null;
				else return (
					<div className="item" key={item.listing_id}>
						<div className="item-image">
							<a href={item.url}>
								<img src={item.MainImage.url_570xN} alt={getTitle(item.title)}/>
							</a>
						</div>
						<div className="item-details">
							<p className="item-title">{getTitle(item.title)}</p>
							<p className="item-price">{getPrice(item.price, item.currency_code)}</p>
							<p className={`item-quantity ${getLevel(item.quantity)}`}>${item.quantity} left</p>
						</div>
					</div>
					)
				}
			)}
		</div>
	)
}

Listing.defaultProps = {
	items: [],
}

export default Listing;