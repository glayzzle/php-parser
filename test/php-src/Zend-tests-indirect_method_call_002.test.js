// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/indirect_method_call_002.phpt
  it("Indirect method call with chaining", function () {
    expect(parser.parseCode("<?php\nclass foo {\n    public $x = 'testing';\n    public function bar() {\n        return \"foo\";\n    }\n    public function baz() {\n        return new self;\n    }\n    static function xyz() {\n    }\n}\nvar_dump((new foo())->bar());               // string(3) \"foo\"\nvar_dump((new foo())->baz()->x);            // string(7) \"testing\"\nvar_dump((new foo())->baz()->baz()->bar()); // string(3) \"foo\"\nvar_dump((new foo())->xyz());               // NULL\n(new foo())->www();\n?>")).toMatchSnapshot();
  });
});
