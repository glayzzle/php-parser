// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug30828.phpt
  it("Bug #30828 (debug_backtrace() reports incorrect class in overridden methods)", function () {
    expect(parser.parseCode("<?php\nclass A {\n    function __construct() {\n        debug_print_backtrace();\n        $bt = debug_backtrace();\n        foreach ($bt as $t) {\n            print $t['class'].$t['type'].$t['function'].\"\\n\";\n        }\n    }\n    function foo() {\n        debug_print_backtrace();\n        $bt = debug_backtrace();\n        foreach ($bt as $t) {\n                        print $t['class'].$t['type'].$t['function'].\"\\n\";\n        }\n    }\n    static function bar() {\n        debug_print_backtrace();\n        $bt = debug_backtrace();\n        foreach ($bt as $t) {\n            print $t['class'].$t['type'].$t['function'].\"\\n\";\n        }\n    }\n}\nclass B extends A {\n    function __construct() {\n        parent::__construct();\n    }\n    function foo() {\n        parent::foo();\n    }\n    static function bar() {\n        parent::bar();\n    }\n}\n$b = new B();\n$b->foo();\nB::bar();\n?>")).toMatchSnapshot();
  });
});
