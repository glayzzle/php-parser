// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/current_variation6.phpt
  it("Test current() function : internal pointer maintenance at the end of array", function () {
    expect(parser.parseCode("<?php\n$array = [\"foo\" => 1, \"bar\" => 2, \"baz\" => 3];\nreset($array);\nwhile ($cur = current($array)) {\n    var_dump($cur);\n    next($array);\n}\nunset($array[\"baz\"]);\n$array[] = 4;\nvar_dump(current($array));\n?>")).toMatchSnapshot();
  });
});
