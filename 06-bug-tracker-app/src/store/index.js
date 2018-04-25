import { createStore, combineReducers, applyMiddleware } from 'redux';
import { bugsReducer, spinnerReducer } from '../reducers';

let rootReducer = combineReducers({
	bugsData : bugsReducer,
	spinnerData : spinnerReducer
});

function logger({getState, dispatch}){
	return function(next){
		return function(action){
			console.log('old State -> ', getState());
			console.log('current Action -> ', action);
			var newState =  next(action);
			console.log('new State -> ', getState());
			return newState;
		}
	}
}

function thunk({getState, dispatch}){
	return function(next){
		return function(action){
			if (typeof action === 'function'){
				return action(dispatch, getState);
			}
			return next(action);
		}
	}
}

let appStore = createStore(rootReducer, applyMiddleware(logger, thunk));

export default appStore;