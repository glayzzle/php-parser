// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/type_declarations/callable_003.phpt
  it("callable type#003", function () {
    expect(parser.parseCode("<?php\nfunction foo(callable $a, $b, callable $c) {\n    var_dump($a, $b, $c);\n}\nfunction bar(callable $a = null) {\n    var_dump($a);\n}\nfoo(\"strpos\", 123, \"strpos\");\nbar(\"substr\");\n?>")).toMatchSnapshot();
  });
});
