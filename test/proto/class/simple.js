var Class = require('../../glayzzle/src/compat/class');

"use strict";

// declare the foo class
var foo = Class('foo')
  .public({
    name: 'John Doe',
    __construct: function() {
      console.log('Hello world');
    }
  })
  .static({
    public: {
      foo: 123
    }
  })
.getPrototype();

// create an instance
var john = new foo();
console.log('--', john.name);

// declare the foo class
var bar = Class('bar')
  .extends(foo)
  .public({
    name: 'John Bar',
    __construct: function() {
      console.log('Hello bar');
    }
  })
.getPrototype();

// create an instance
var john = new bar();
console.log('--', john.name);

