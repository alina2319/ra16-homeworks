import PropTypes from 'prop-types';
import './message-history.css';
import Response from './Response/Response';
import Message from './Message/Message';
import Typing from './Typing/Typing';

function MessageHistory({ list = []}) {
	if (list.length === 0) return null;

	const showMessage = (message) => {
		const msgTypes = {
			response: <Response
				key={message.id}
				from={message.from}
				message={message} />,

			message: <Message
				key={message.id}
				from={message.from}
				message={message} />,

			typing: <Typing
				key={message.id}
				from={message.from}
				message={message} />,
		}

		return msgTypes[message.type];
	}

	return (
		<ul>
			{list.map((message) => showMessage(message))}
		</ul>
	)
}

MessageHistory.propTypes = {
	list: PropTypes.arrayOf(PropTypes.object),
}

export default MessageHistory;