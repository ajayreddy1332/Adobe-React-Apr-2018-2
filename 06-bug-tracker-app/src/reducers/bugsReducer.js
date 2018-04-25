export function bugsReducer(currentState = [], action){
	if (action.type === 'ADD_NEW'){
		let newBugName = action.payload;
		let newBug = {
			name : newBugName,
			isClosed : false,
			createdAt : new Date()
		};
		return [...currentState, newBug];
	}
	if (action.type === 'TOGGLE'){
		let bugToToggle = action.payload,
			toggledBug = {...bugToToggle, isClosed : !bugToToggle.isClosed};
		return currentState.map(bug => bug === bugToToggle ? toggledBug : bug);
	}
	if (action.type === 'REMOVE_CLOSED'){
		return currentState.filter(bug => !bug.isClosed);
	}
	return currentState;
};