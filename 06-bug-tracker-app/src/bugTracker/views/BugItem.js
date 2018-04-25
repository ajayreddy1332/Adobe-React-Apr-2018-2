import React from 'react';

let BugItem = ({model : bug, toggle}) => {
	let bugNameStyle = 'bugname ' + (bug.isClosed ? 'closed' : '');
	return (
		<li>
			<span className={bugNameStyle} onClick={() => toggle(bug)}>{bug.name}</span>
			<div className="datetime">{bug.createdAt.toString()}</div>
		</li>
	);
};

export default BugItem;