// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_bug66622.phpt
  it("Bug 66622: Closures do not correctly capture the late bound class (static::) in some cases", function () {
    expect(parser.parseCode("<?php\nclass A {\n    static function name() { return 'A'; }\n    function foo() {\n        $fn = function() { return static::name(); };\n        echo static::name() . ' vs ' . $fn() . \"\\n\";\n    }\n    function bar() {\n        $fn = static function() { return static::name(); };\n        echo static::name() . ' vs ' . $fn() . \"\\n\";\n    }\n    static function baz() {\n        $fn = function() { return static::name(); };\n        echo static::name() . ' vs ' . $fn() . \"\\n\";\n    }\n}\nclass B extends A {\n    static function name() { return 'B'; }\n}\nfunction test() {\n    (new B)->foo();\n    (new B)->bar();\n    (new B)->baz();\n    B::baz();\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
