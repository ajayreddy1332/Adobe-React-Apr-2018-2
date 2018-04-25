export function bugsReducer(currentState = [], action){
	if (action.type === 'LOAD'){
		return action.payload;
	}
	if (action.type === 'ADD_NEW'){
		let newBug = action.payload;
		return [...currentState, newBug];
	}
	if (action.type === 'TOGGLE'){
		let toggledBug = action.payload;
		return currentState.map(bug => bug.id === toggledBug.id ? toggledBug : bug);
	}
	/*if (action.type === 'REMOVE'){
		var bugToRemove = action.payload;
		return currentState.filter(bug => bug.id !== bugToRemove.id);
	}*/

	if (action.type === 'REMOVE'){
		let bugsToRemove = action.payload;
		return currentState.filter(bug => bugsToRemove.indexOf(bug) === -1);
	}
	return currentState;
};