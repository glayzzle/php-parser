// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/closure_use_trailing_comma.phpt
  it("Closure use list can have trailing commas", function () {
    expect(parser.parseCode("<?php\n$b = 'test';\n$fn = function () use (\n    $b,\n    &$a,\n) {\n    $a = $b;\n};\n$fn();\necho \"$a\\n\";\n?>")).toMatchSnapshot();
  });
});
