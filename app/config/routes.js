var React = require('react');
var ReactRouter = require('react-router');
var Router = React.Router;
var Route = React.Route;
var IndexRoute = React.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');

var routes = (
	<Router>
		<Route path='/' component={Main}>
			<Route path='/home' component={Home} />
		</Route>
	</Router>

);

module.exports = routes;
