# grunt-regenerator [![Build Status](https://secure.travis-ci.org/sindresorhus/grunt-regenerator.png?branch=master)](http://travis-ci.org/sindresorhus/grunt-regenerator)

[Grunt][grunt] task to transpile ES6 generator functions to ES5 with [Regenerator](http://facebook.github.io/regenerator/).

> A fully-functional source transformation that takes the proposed syntax for generators/yield from future versions of JS (ECMAScript 6 or ES6, experimentally implemented in Node.js v0.11) and spits out efficient JS-of-today (ES5) that behaves the same way.

**Issues with the output should be reported on the [Regenerator issue tracker](https://github.com/facebook/regenerator/issues). Not here.**


## Getting Started

If you haven't used [grunt][] before, be sure to check out the [Getting Started][] guide, as it explains how to create a [gruntfile][Getting Started] as well as install and use grunt plugins. Once you're familiar with that process, install this plugin with this command:

```sh
npm install --save-dev grunt-regenerator
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-regenerator');
```

[grunt]: http://gruntjs.com
[Getting Started]: https://github.com/gruntjs/grunt/wiki/Getting-started


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

```javascript
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
Default `false`

> A small runtime library (less than 1KB compressed) is required to provide the wrapGenerator function. You can install it either as a CommonJS module or as a standalone .js file, whichever you prefer.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
