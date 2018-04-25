import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import Spinner from './spinner';
import BugTracker from './bugTracker';
import appStore from './store';


ReactDOM.render(
	<Provider store={appStore}>
		<div>
			<h1>Bug Tracker </h1>
			<hr />
			<Spinner />
			<hr/>
			<BugTracker/>
		</div>
	</Provider>
	, document.getElementById('root')
);

