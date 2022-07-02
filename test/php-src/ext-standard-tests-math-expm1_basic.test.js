// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/expm1_basic.phpt
  it("Test expm1() - basic function test for expm1()", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing expm1() : basic functionality ***\\n\";\n$values = array(10,\n                10.3,\n                3.9505e3,\n                037,\n                0x5F,\n                \"10\",\n                \"3950.5\",\n                \"3.9505e3\",\n                \"039\",\n                true,\n                false,\n                );\n// loop through each element of $values to check the behaviour of expm1()\n$iterator = 1;\nforeach($values as $value) {\n    echo \"\\n-- Iteration $iterator --\\n\";\n    var_dump(expm1($value));\n    $iterator++;\n};\n?>")).toMatchSnapshot();
  });
});
