'use strict';
var eachAsync = require('each-async');
var regenerator = require('regenerator');

module.exports = function (grunt) {
	grunt.registerMultiTask('regenerator', 'Transpile ES6 generator functions to ES5', function () {
		var options = this.options();

		eachAsync(this.files, function (el, i, next) {
			grunt.file.write(el.dest, regenerator.compile(grunt.file.read(el.src[0]), options).code);
			next();
		}, this.async());
	});
};
