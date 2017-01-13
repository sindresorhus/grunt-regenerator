'use strict';
module.exports = grunt => {
	grunt.initConfig({
		regenerator: {
			options: {
				includeRuntime: true
			},
			compile: {
				files: {
					'test/tmp/transpiled.js': [
						'test/fixture/original.js',
						'test/fixture/concat.js'
					]
				}
			}
		},
		simplemocha: {
			test: {
				src: 'test/*.js'
			}
		},
		clean: {
			test: ['test/tmp']
		}
	});

	grunt.loadTasks('tasks');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-simple-mocha');

	grunt.registerTask('default', ['clean', 'regenerator', 'simplemocha', 'clean']);
};
