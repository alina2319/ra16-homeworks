import {useState} from 'react';
import './dropdown.css';
import DropdownList from './DropdownList/DropdownList';

export default function Dropdown() {
	const [isListShow, setIsListShow] = useState(false);

	const onBtnClick = () => {
		setIsListShow((prevIsListShow) => !prevIsListShow);
	}

	document.addEventListener('click', (event) => {
		if (event.target.closest('.container')) return;
		setIsListShow(false);
	})

	return (
		<div className="container">
			<div data-id="wrapper" className={`dropdown-wrapper${isListShow ? ' open': ''}`}>
				<button data-id="toggle" className="btn" onClick={onBtnClick}>
					<span>Account Settings</span>
					<i className="material-icons">public</i>
				</button>
				<DropdownList />
			</div>
		</div>
	)
}