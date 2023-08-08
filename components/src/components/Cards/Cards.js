import './cards.css';

const Card = (props) => (
	<div className={'cards__item card'}>
		<div className={'card__body'}>
			{props.children}
		</div>
	</div>
)

const CardImg = ({ src }) => (
	<div className={'card__img-wrap'}>
		<img className={'card__img'} src={src} alt={'card-01'} />
	</div>
)

const CardTitle = ({ title }) => (
	<div className={'card__title card__container'}>{title}</div>
)

const CardText = ({ text }) => (
	<div className={'card__text card__container'}>
		<p>{text}</p>
	</div>
)

const CardLink = ({ link, text }) => (
	<div className={'card__container'}>
		<a className={'card__link'} href={link}>{text}</a>
	</div>
)

export default function Cards() {
	return (
		<div className={'cards'}>
			<div className={'cards__body'}>
				<Card>
					<CardImg src={'./cards/card-01.jpg'}/>
					<CardTitle title={'Card title'} />
					<CardText text={'Some quick example text to build on the card title and make up the bulk of the card\'s content.'} />
					<CardLink link={'/#'} text={'Go somewhere'}/>
				</Card>

				<Card>
					<CardTitle title={'Card title'} />
					<CardText text={'Some quick example text to build on the card title and make up the bulk of the card\'s content.'} />
					<CardLink link={'/#'} text={'Go somewhere'}/>
				</Card>

				<Card>
					<CardTitle title={'Card title'} />
					<CardImg src={'./cards/card-01.jpg'}/>
					<CardText text={'Some quick example text to build on the card title and make up the bulk of the card\'s content.'} />
					<CardLink link={'/#'} text={'Go somewhere'}/>
				</Card>

				<Card>
					<CardTitle title={'Card title'} />
					<CardLink link={'/#'} text={'Go somewhere'}/>
					<CardText text={'Some quick example text to build on the card title and make up the bulk of the card\'s content.'} />
					<CardImg src={'./cards/card-01.jpg'}/>
				</Card>
			</div>
		</div>
	)
}
