//keys.js - figure out what set of credentials

const ENV = process.env.NODE_ENV;

if (ENV === 'production') {
	//return production keys
	module.exports = require('./prod');	
} else {
	//return dev keys
	module.exports = require('./dev');
}