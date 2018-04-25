import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import spinnerActionCreators from './actions';


let Spinner = ({ value, increment, decrement }) => (
	<div>
		<input type="button" value="DECREMENT" onClick={decrement}/>
		<span>[ {value} ]</span>
		<input type="button" value="INCREMENT" onClick={increment}/>
	</div>
);

function mapSpinnerStateToProps(storeState){
	let spinnerModel = storeState.spinnerData;
	return { value : spinnerModel };
}

function mapSpinnerActionsToProps(dispatch){
	let spinnerActions = bindActionCreators(spinnerActionCreators, dispatch);	
	return spinnerActions;
}

export default connect(mapSpinnerStateToProps, mapSpinnerActionsToProps)(Spinner);