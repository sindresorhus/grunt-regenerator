# grunt-regenerator [![Build Status](https://travis-ci.org/sindresorhus/grunt-regenerator.svg?branch=master)](https://travis-ci.org/sindresorhus/grunt-regenerator)

> Transpile ES6 generator functions to ES5 with [Regenerator](http://facebook.github.io/regenerator/).

*Issues with the output should be reported on the Regenerator [issue tracker](https://github.com/facebook/regenerator/issues).*


## Getting Started

If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```bash
$ npm install --save-dev grunt-regenerator
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-regenerator');
```

*Tip: the [load-grunt-tasks](https://github.com/sindresorhus/load-grunt-tasks) module makes it easier to load multiple grunt tasks.*

[grunt]: http://gruntjs.com
[Getting Started]: http://gruntjs.com/getting-started


## Example

```js
function *range(max, step) {
	var count = 0;
	step = step || 1;

	for (var i = 0; i < max; i += step) {
		count++;
		yield i;
	}

	return count;
}

var gen = range(20, 3), info;

while (!(info = gen.next()).done) {
	console.log(info.value);
}

console.log("steps taken: " + info.value);
```

Is transpiled into:

```js
function range(max, step) {
	var count, i;

	return wrapGenerator(function($ctx) {
		while (1) switch ($ctx.next) {
		case 0:
			count = 0;
			step = step || 1;
			i = 0;
		case 3:
			if (!(i < max)) {
				$ctx.next = 10;
				break;
			}

			count++;
			$ctx.next = 7;
			return i;
		case 7:
			i += step;
			$ctx.next = 3;
			break;
		case 10:
			$ctx.rval = count;
			delete $ctx.thrown;
			$ctx.next = 14;
			break;
		case 14:
			return $ctx.stop();
		}
	}, this);
}

var gen = range(20, 3), info;

while (!(info = gen.next()).done) {
	console.log(info.value);
}

console.log("steps taken: " + info.value);
```


## Example config

```js
grunt.initConfig({
	regenerator: {								// Task
		options: {
			includeRuntime: true
		},
		dist: {									// Target
			files: {							// Dictionary of files
				'dist/main.js': 'src/main.js'	// 'destination': 'source'
			}
		}
	}
});

grunt.loadNpmTasks('grunt-regenerator');
grunt.registerTask('default', ['regenerator']);
```


## Options

### includeRuntime

Type: `Boolean`  
Default: `false`

> A small runtime library (less than 1KB compressed) is required to provide the wrapGenerator function. You can install it either as a CommonJS module or as a standalone .js file, whichever you prefer.


## License

[MIT](http://opensource.org/licenses/MIT) © [Sindre Sorhus](http://sindresorhus.com)
