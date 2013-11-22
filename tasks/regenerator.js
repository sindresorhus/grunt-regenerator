'use strict';
var regenerator = require('regenerator');
var async = require('async');

module.exports = function (grunt) {
	grunt.registerMultiTask('regenerator', 'Transpile ES6 generator functions to ES5', function () {
		var options = this.options();

		async.each(this.files, function (el, next) {
			var js = el.src.map(function (filePath) {
				return grunt.file.read(filePath);
			}).join(grunt.util.linefeed);

			grunt.file.write(el.dest, regenerator(js, options));
			next();
		}, this.async());
	});
};
