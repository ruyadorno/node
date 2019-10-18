'use strict';

// I'm going to leave a few comments here explaining the decisions
// behind the design of the API in order to facilitate discussion

// Factory method that creates a new parser and return
// a new instance to the user, it will most likely need to support
// options in the future but I decided to start with the very
// minimal implementation possible
function createParser(flags) {
  return new ArgumentParser(flags);
}

function parse(flags, args) {
  // Very simplistic implementation just meant to have an initial
  // running test, please ignore this entire logic for now
  const input = Array.isArray(args) ? args : args.split(' ');
  let res = {};

  // This impl is not supporting any kind of
  // value assignment to flags for now
  for (var i = 0; i < input.length; i++) {
    if (flags.hasOwnProperty(input[i])) {
      res[input[i]] = true;
    }
  };

  return res;
}

// Create a symbol in order to keep the flags object private within
// the instance, inspired by other usages across the codebase
const flagsSymbol = Symbol('flags');

// Borrowed the pattern of returning a class instance from
// child_process module with its ChildProcess
class ArgumentParser {
  constructor (flags) {
    this[flagsSymbol] = flags;
  }

  // Supports a method-oriented creation of flags,
  // adding this method was very inspired by the python and go APIs
  // and should be somewhat friendlier to the `commander` syntax
  flag(name, value, usage, cast) {
  }

  // Triggers the parsing logic returning a readable object to the
  // user which should contain the key-value pairs for each flag defined
  parse(args) {
    return parse(this[flagsSymbol], args || process.argv);
  }
}

module.exports = {
  createParser
};
