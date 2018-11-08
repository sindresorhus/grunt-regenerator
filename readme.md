# Deprecated

Use Babel instead.

---

# grunt-regenerator [![Build Status](https://travis-ci.org/sindresorhus/grunt-regenerator.svg?branch=master)](https://travis-ci.org/sindresorhus/grunt-regenerator)

> Transpile ES2015 generator functions to ES5 with [Regenerator](http://facebook.github.io/regenerator/)

*Issues with the output should be reported on the Regenerator [issue tracker](https://github.com/facebook/regenerator/issues).*


## Install

```
$ npm install --save-dev grunt-regenerator
```


## Usage

```js
require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks

grunt.initConfig({
	regenerator: {
		options: {
			includeRuntime: true
		},
		dist: {
			files: {
				'dist/main.js': 'src/main.js'
			}
		}
	}
});

grunt.registerTask('default', ['regenerator']);
```


## Options

### includeRuntime

Type: `boolean`<br>
Default: `false`

> A small runtime library (less than 1KB compressed) is required to provide the wrapGenerator function. You can install it either as a CommonJS module or as a standalone .js file, whichever you prefer.


## License

MIT © [Sindre Sorhus](https://sindresorhus.com)
