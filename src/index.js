import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route} from 'react-router-dom';
import './style/index.css';
import App from './components/App';
import Series from './components/Series';
import Movies from './components/Movies';

ReactDOM.render(
	<Router>
		<div>
			<Route exact path="/" component={App} />
			<Route exact path="/series" component={Series} />
			<Route exact path="/movies" component={Movies} />
		</div>
	</Router>, document.getElementById('root')
);
