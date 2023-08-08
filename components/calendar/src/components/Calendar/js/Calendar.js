import '../css/calendar.css';
import PropTypes from 'prop-types';
import CalendarTable from '../CalendarTable';
import getFormattedDate from './getFormattedDate';

function Calendar({ date }) {
	const formattedDate = getFormattedDate(date);

	return (
		<div className="ui-datepicker main__calendar">
			<div className="ui-datepicker-material-header">
				<div className="ui-datepicker-material-day">{formattedDate.dayName}</div>
				<div className="ui-datepicker-material-date">
					<div className="ui-datepicker-material-day-num">{formattedDate.date}</div>
					<div className="ui-datepicker-material-month">{formattedDate.monthName.material}</div>
					<div className="ui-datepicker-material-year">{formattedDate.year}</div>
				</div>
			</div>
			<div className="ui-datepicker-header">
				<div className="ui-datepicker-title">
					<span className="ui-datepicker-month">{formattedDate.monthName.header}</span>&nbsp;
					<span className="ui-datepicker-year">{formattedDate.year}</span>
				</div>
			</div>
			<CalendarTable date={date}/>
		</div>
	)
}

Calendar.propTypes = {
	date: PropTypes.instanceOf(Date).isRequired,
}

export default Calendar;