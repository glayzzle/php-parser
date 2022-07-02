// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_sum_variation5.phpt
  it("Test array_sum() function : usage variations - array with reference variables as elements", function () {
    expect(parser.parseCode("<?php\n/*\n* Testing array_sum() with 'input' having reference variables as elements\n*/\necho \"*** Testing array_sum() : array with elements as reference ***\\n\";\n$value1 = -5;\n$value2 = 100;\n$value3 = 0;\n$value4 = &$value1;\n// input array containing elements as reference variables\n$input = array(\n  0 => 10,\n  1 => &$value4,\n  2 => &$value2,\n  3 => 200,\n  4 => &$value3,\n);\nvar_dump( array_sum($input) );\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
