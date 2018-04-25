import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import BugSort from './views/BugSort';
import BugStats from './views/BugStats';
import BugEdit from './views/BugEdit';
import BugList from './views/BugList';

import * as bugActionCreators from './actions';

class BugTracker extends Component{
	componentDidMount(){
		this.props.load();
	}
	render(){
		let { model : bugs, addNew, toggle, removeClosed } = this.props;
		return(
			<div>
				<BugStats model={bugs} />
				<BugSort />
				<BugEdit addNew={addNew} />
				<BugList {...{model : bugs, toggle, removeClosed}}/>
			</div>
		)
	}
}

function mapBugsStateToProps(storeState){
	let bugsModel = storeState.bugsData;
	return { model : bugsModel };
}

function mapBugActionsToProps(dispatch){
	let bugActions = bindActionCreators(bugActionCreators, dispatch);
	return bugActions;			
}

export default connect(mapBugsStateToProps, mapBugActionsToProps)(BugTracker);