// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/is_callable_trampoline_uaf.phpt
  it("is_callable() with trampoline should not caused UAF", function () {
    expect(parser.parseCode("<?php\nclass B {}\nclass A extends B {\n    public function bar($func) {\n        var_dump(is_callable(array('parent', 'foo')));\n    }\n    public function __call($func, $args) {\n    }\n}\nclass X {\n    public static function __callStatic($func, $args) {\n    }\n}\n$a = new A();\n// Extra X::foo() wrapper to force use of allocated trampoline.\nX::foo($a->bar('foo'));\n?>")).toMatchSnapshot();
  });
});
