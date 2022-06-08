// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/exp_basic.phpt
  it("Test exp() - basic function test for exp()", function () {
    expect(parser.parseCode("<?php\n$values = array(10,\n                10.3,\n                3.9505e3,\n                037,\n                0x5F,\n                \"10\",\n                \"3950.5\",\n                \"3.9505e3\",\n                \"039\",\n                true,\n                false,\n                );\n$iterator = 1;\nforeach($values as $value) {\n    echo \"\\n-- Iteration $iterator --\\n\";\n    var_dump(exp($value));\n    $iterator++;\n};\n?>")).toMatchSnapshot();
  });
});
