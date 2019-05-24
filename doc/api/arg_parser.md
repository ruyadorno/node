# Argument Parser

<!--introduced_in=v13.x.x-->

> Stability: 1 - Experimental

The `arg_parser` module provides command-line argument parser utilities.

Argument parsers can be created in order to retrieve useful information
from arguments provided to a script:

```js
const { createParser } = require('arg_parser');

const parser = createParser({
  '--foo': {
    value: 'bar',
    usage: 'sets value of foo, defaults to: bar'
  }
});

const options = parser.parse();

console.log(options['--foo']);  // Prints value set --foo
```

## Default help message

The Agument Parser provides a default help message that can be printed using
either `-h` or `--help` flags. Its message can be customized by setting a
`usage` property to each custom flag.

```sh
$ node myprogram.js --help
usage: myprogram.js [-h] [--foo FOO]

optional arguments:
 -h, --help  show this help message and exit
 --foo bar   sets value of foo, defaults to: bar
```

### arg_parser.createParser([flags])
<!-- YAML
added: v13.x.x
-->

* `flags` {Object} Key-value map of each flag to its own set of options:
  * `value` {string | number | boolean} Default value
  * `usage` {string} Usage description to be used along with help message
  * `cast` {function} Function used for type casting input values
* Returns {ArgumentParser}

Creates an argument parser from an optional object that defines what keys
should be used as flags:

```js
const { createParser } = require('arg_parser');

const parser = createParser({
  '--foo': true,
  '--int': {
    usage: 'Sets an integer value',
    cast: parseInt
  }
});

const options = parser.parse();

// node example.js --foo=bar --int=2

console.log(options['--foo']);  // Prints 'bar'
console.log(options['--int']);  // Prints 2
```

## Class: ArgumentParser
<!-- YAML
added: v13.x.x
-->

Instances of `ArgumentParser` are not intended to be created directly.
Rather, use the [`arg_parser.createParser()`][] method to create
instances of `ArgumentParser`.

### parser.flag(name[, value][, usage][, cast])
<!-- YAML
added: v13.x.x
-->

* `name` {string} The key reference to this flag
* `value` {string | number | boolean} Default value
* `usage` {string} Usage description to be used along with help message
* `cast` {function} Function used for type casting input values
* Returns {ArgumentParser}

Adds a new flag to this instance of `ArgumentParser`, returns a reference
to this same instance which now contains a new flag.

```js
const { createParser } = require('arg_parser');

const parser = createParser()
  .flag('--foo')
  .flag('--int', 1, 'Sets an integer value', parseInt);

const options = parser.parse();

// node example.js --foo=bar --int=2

console.log(options['--foo']);  // Prints 'bar'
console.log(options['--int']);  // Prints 2
```

### parser.parse([args])
<!-- YAML
added: v13.x.x
-->

* `args` {string | string[]} Argument string to be parsed,
defaults to `process.argv`
* Returns {Object}

Parses the `args` using the flags defined in this instance of `ArgumentParser`
and returns an object that maps each flag to its result value.

[`arg_parser.createParser()`]: #arg_parser_arg_parser_createparser_flags
[`ArgumentParser`]: #arg_parser_arg_parser
[`parser.flag()`]: #arg_parser_parser_flag_name_value_usage_cast
[`parser.parse()`]: #arg_parser_parser_parse
