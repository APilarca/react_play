var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link
var transparentBg = require('../styles').transparentBg;

function Home () {
	return (
		<div className="jumbotron cols-sm-12 text-center" style={transparentBg}>
			<h1>Githun Battle</h1>
			<p className='lead'>What even is a jQuery?</p>
			<Link to='/playerOne'>
				<button type='button' className='btn btn-lg btn-success'>Get Started</button>
			</Link>
		</div>
	)
}

module.exports = Home;