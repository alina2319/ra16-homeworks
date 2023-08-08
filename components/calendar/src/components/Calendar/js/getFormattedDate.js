export default function getFormattedDate(date) {
	const day = date.getDay();
	const month = date.getMonth();
	const days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
	const months = {
		0: { material: 'января', header: 'январь'},
		1: { material: 'февраля', header: 'февраль'},
		2: { material: 'марта', header: 'март'},
		3: { material: 'апреля', header: 'апрель'},
		4: { material: 'мая', header: 'май'},
		5: { material: 'июня', header: 'июнь'},
		6: { material: 'июля', header: 'июль'},
		7: { material: 'августа', header: 'август'},
		8: { material: 'сентября', header: 'сентябрь'},
		9: { material: 'октября', header: 'октябрь'},
		10: { material: 'ноября', header: 'ноябрь'},
		11: { material: 'декабря', header: 'декабрь'},
	}

	return {
		dayName: days[day], // Название дня недели.
		date: date.getDate(), // Число даты.
		// Название месяца в родительном и именительном падеже.
		monthName: { material: months[month].material, header: months[month].header},
		year: date.getFullYear(), // Год даты.
	}
}
