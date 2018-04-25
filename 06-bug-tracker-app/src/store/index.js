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


let appStore = createStore(rootReducer, applyMiddleware(logger));

export default appStore;