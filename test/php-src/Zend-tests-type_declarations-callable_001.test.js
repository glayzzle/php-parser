// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/callable_001.phpt
  it("callable type#001", function () {
    expect(parser.parseCode("<?php\nclass bar {\n    function baz() {}\n    static function foo() {}\n}\nfunction foo(callable $bar) {\n    var_dump($bar);\n}\n$closure = function () {};\nfoo(\"strpos\");\nfoo(\"foo\");\nfoo($closure);\nfoo(array(\"bar\", \"foo\"));\nfoo(array(\"bar\", \"baz\"));\n?>")).toMatchSnapshot();
  });
});
