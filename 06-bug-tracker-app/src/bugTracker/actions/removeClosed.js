import axios from 'axios';

export function removeClosed(){
	return function(dispatch, getState){
		let currentBugs = getState().bugsData,
			closedBugs = currentBugs.filter(bug => bug.isClosed);

		/*closedBugs.forEach(closedBug => {
			axios.delete(`http://localhost:3030/bugs/${closedBug.id}`)
				.then(response => dispatch({ type : 'REMOVE', payload : closedBug}));	
		})*/

		let allPromises = closedBugs.map(closedBug => {
			return axios.delete(`http://localhost:3030/bugs/${closedBug.id}`)
		});

		Promise.all(allPromises)
			.then(() => dispatch({type : 'REMOVE', payload : closedBugs}));
		
	};
}