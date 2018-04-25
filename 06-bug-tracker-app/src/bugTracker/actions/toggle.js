import axios from 'axios';

export function toggle(bugToToggle){
	return function(dispatch, getState){
		let toggledBugData = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		axios.put(`http://localhost:3030/bugs/${toggledBugData.id}`, toggledBugData)
			.then(response => response.data)
			.then(toggledBug => dispatch({ type : 'TOGGLE', payload : toggledBug}));
	};
}