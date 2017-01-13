'use strict';
const eachAsync = require('each-async');
const regenerator = require('regenerator');

module.exports = grunt => {
	grunt.registerMultiTask('regenerator', 'Transpile ES6 generator functions to ES5', function () {
		const options = this.options();

		eachAsync(this.files, (el, i, next) => {
			grunt.file.write(el.dest, regenerator.compile(grunt.file.read(el.src[0]), options).code);
			next();
		}, this.async());
	});
};
