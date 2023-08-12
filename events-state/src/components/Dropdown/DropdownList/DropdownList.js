import {useState} from 'react';

export default function DropdownList() {
	const listItems = [
		{	name: 'Profile Information', selected: false },
		{	name: 'Change Password', selected: false },
		{	name: 'Become PRO', selected: false },
		{	name: 'Help', selected: false },
		{	name: 'Log Out', selected: false },
	];

	const [ selected, setSelected ] = useState();

	const onItemClick = (itemName) => {
		setSelected(itemName);
	}

	return (
		<ul data-id="dropdown" className="dropdown">
			{listItems.map((listItem) =>
				<li
					key={Math.random()}
					className={selected === listItem.name ? 'active' : ''}
					onClick={() => onItemClick(listItem.name)}>
					<a href="#task3">{listItem.name}</a>
				</li>
			)}
		</ul>
	)
}
