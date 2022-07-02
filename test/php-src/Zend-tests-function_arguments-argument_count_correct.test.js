// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/function_arguments/argument_count_correct.phpt
  it("Call function with correct number of arguments", function () {
    expect(parser.parseCode("<?php\nfunction foo() { }\nfoo();\nfunction bar($foo, $bar) { }\nbar(1, 2);\nfunction bat(int $foo, string $bar) { }\nbat(123, \"foo\");\nbat(\"123\", \"foo\");\n$fp = fopen(__FILE__, \"r\");\nfclose($fp);\necho \"done\";\n?>")).toMatchSnapshot();
  });
});
