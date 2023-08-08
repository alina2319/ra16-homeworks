/**
 * Контейнер содержащий блоки с различной информацией.
 * @returns {JSX.Element}
 */
import Weather from './Weather/Weather';
import Item from './Item/Item';

export default function Items() {
	return (
		<div className={'items'}>
			<Item title={'Погода'} url={''}>
				<Weather />
			</Item>

			<Item title={'Карта германии'} url={''}>
				{/** Компонет */}
			</Item>

			<Item title={'Эфир'} url={''}>
				{/** Компонет */}
			</Item>

			<Item title={'Посещаемое'} url={''}>
				{/** Компонет */}
			</Item>

			<Item title={'Телепрограмма'} url={''}>
				{/** Компонет */}
			</Item>
		</div>
	)
}
