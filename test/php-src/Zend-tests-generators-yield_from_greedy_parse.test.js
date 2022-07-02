// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/generators/yield_from_greedy_parse.phpt
  it("yield from parses too greedily", function () {
    expect(parser.parseCode("<?php\nfunction from1234($x) {\n  return $x;\n}\nfunction bar() {\n  yield 24;\n}\nfunction foo() {\n  yield from1234(42);\n  yield from(bar());\n}\nforeach (foo() as $value) {\n  var_dump($value);\n}\n?>")).toMatchSnapshot();
  });
});
