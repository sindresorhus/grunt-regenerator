'use strict';
var assert = require('assert');
var grunt = require('grunt');

it('should transpile', function () {
	assert(/GeneratorFunction/.test(grunt.file.read('test/tmp/transpiled.js')));
});
