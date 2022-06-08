// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/filter/tests/bug81708.phpt
  it("Bug #81708 (UAF due to php_filter_float() failing for ints)", function () {
    expect(parser.parseCode("<?php\n$input = \"+\" . str_repeat(\"1\", 2); // avoid string interning\nfilter_var(\n    $input,\n    FILTER_VALIDATE_FLOAT,\n    [\"options\" => ['min_range' => -1, 'max_range' => 1]]\n);\nvar_dump($input);\n?>")).toMatchSnapshot();
  });
});
