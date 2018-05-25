import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import './style/index.css';
import thunk from 'redux-thunk';
import App from './components/App';
import Series from './components/Series';
import Movies from './components/Movies';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reducers from './reducers'
import { routerReducer, routerMiddleware } from 'react-router-redux';

const middleware = routerMiddleware();

const store = createStore(
	combineReducers({
		...reducers,
		router: routerReducer
	}),
	applyMiddleware(middleware, thunk)
);

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Route exact path="/" component={App} />
				<Route path="/series" component={Series} />
				<Route path="/movies" component={Movies} />
			</div>
		</Router>
	</Provider>, document.getElementById('root')
);
