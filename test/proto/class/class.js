
// using http://ejohn.org/blog/simple-javascript-inheritance/
var Class = require('../glayzzle/src/compat/class');

// declare the bar class
var bar = (function() {
  // private static vars
  var this_var1 = 'bar';
  // a private static function (costs memory alloc for every object)
  function privateFunction() {
    console.log('You call a private function from bar !');
  }
  // define the parent handler
  var parent = Class.prototype;

  // class declaration
  var self = Class.__extends({
    name: 'bar'
    , final: false
    , abstract: false
    // declare static propected properties
    , protected: {
      var1: 'protected-var-bar',
      yop: function() {
        console.log(self.yop);
      }
    }
  }, {
    // declare a public var
    arg: null,
    var2: 'public-bar',
    // public constructor
    __construct: function(arg1) {
      // constructor code
      this.arg = arg1;
      this_var1 += ' : ' + arg1;
    },
    // public function
    bar: function() {
      console.log('I am the public BAR function : '+this_var1+' !');
    },
    // try to check this scope
    doSomething: function() {
      console.log('Do something on current scope : ');
      privateFunction();
      this.bar();
    }
  });
  return self.__class;
}());

// static public vars
bar.static_var2 = 'bar2';
// static public method
bar.getInstance = function() {
  // bar == self
  return bar.static_var2;
};

console.log('*** TEST BEHAVIOUR WITH BAR ***');

var i1 = new bar('azerty');
i1.bar();

var i1_1 = new bar('azerty123');
i1_1.bar();

console.log(i1);
console.log(i1 instanceof bar);
console.log(bar);
console.log(bar.getInstance());

/** TEST EXTENDS **/
console.log('*** TEST EXTENSION WITH FOO ***');
var foo = (function() {
  // private static vars with no collision
  var this_var1 = 'foo';
  // a private static function (costs memory alloc for every object)
  function privateFunction() {
    console.log('You call a private function from foo !');
  }
  // define the parent handler
  var parent = bar.prototype;

  // class declaration
  var self = bar.__extends({
    name: 'foo'
    , final: true
    , abstract: false
    , protected: {
    }
  }, {
    // declare a public var
    var2: 'public-foo',
    // public function
    bar: function() {
      privateFunction();
      console.log('I am the public FOO function : '+this_var1+' !');
      parent.bar();
    },
    getYop: function() {
      return self.var1;
    }
  });
  return self.__class;
}());

var i2 = new foo('test-foo');
i2.bar();
console.log(i2);
console.log(i2 instanceof bar);
i2.doSomething();

/** TEST STATIC OVERRIDES **/
console.log('*** TEST STATIC EXTENSION WITH FOO ***');
foo.static_var2 = 'var2-from-foo';
console.log(foo);
console.log(foo.getInstance());
// static public method
foo.getInstance = function() {
  // this == static
  return this.static_var2;
};
console.log(foo.getInstance());


/** TEST FINAL **/
console.log('*** TEST FINAL OPTION WITH OUPS ***');
try {
  var oups = (function() {
  // define the parent handler
  var parent = foo.prototype;
  // class declaration
  return foo.__extends({
      name: 'oups'
    }, {
      // empty class body ...
    });
  }());
} catch(e) {
  console.log('Expected error : ' + e.message);
}

/** TEST PROTECTED VALUES **/
console.log('*** TEST PROTECTED ***');
console.log(i1.yop);       // expect to be undefined
console.log(i2.getYop());

/** BENCHMARKS **/
console.log('*** RUNNING SOME PERF TESTS ***');
var POJO = function() {
  // empty proto
};
var POPO = (function() {
  return Class.__extends({ name: 'POPO' }, {
    // empty body
  }).__class;
}());

console.log('=> constructor test over 1M calls');
function runPOJO_Tests(out) {
  if (out) console.log('--- start POJO bench : ');
  var start = Date.now();
  var items = [];
  
  for(var i = 0; i < 1000000; i++) {
    items.push(new POJO());
  }
  
  if (out) console.log('POJO Duration : ' + (Date.now() - start) + ' msec');
}

function runPOPO_Tests(out) {
  if (out) console.log('--- start POPO bench : ');
  var start = Date.now();
  var items = [];
  
  for(var i = 0; i < 1000000; i++) {
    items.push(new POPO());
  }
  
  if (out) console.log('POPO Duration : ' + (Date.now() - start) + ' msec');
}

runPOPO_Tests(true); 
runPOJO_Tests(true);