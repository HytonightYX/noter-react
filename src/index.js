import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import store from './configureStore'
import { Provider } from 'react-redux'
import history from './history'
import {Router} from 'react-router-dom'

ReactDOM.render(
	<Provider store={store}>
		<Router history={history} base>
			<App />
		</Router>
	</Provider>,
	document.getElementById('root'));
