import PropTypes from 'prop-types';
import Response from '../Response/Response';

function Message({ from, message }) {
	return (
		<li className="clearfix">
			<div className="message-data align-right">
				<span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
				<span className="message-data-name">{from.name}</span>
				<i className="fa fa-circle me" />
			</div>
			<div className="message other-message float-right">{message.text}</div>
		</li>
	)
}

Response.propTypes = {
	from: PropTypes.object.isRequired,
	message: PropTypes.object.isRequired,
}

export default Message;