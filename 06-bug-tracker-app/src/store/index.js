import { createStore, combineReducers } from 'redux';
import { bugsReducer, spinnerReducer } from '../reducers';

let rootReducer = combineReducers({
	bugsData : bugsReducer,
	spinnerData : spinnerReducer
});

let appStore = createStore(rootReducer);

export default appStore;