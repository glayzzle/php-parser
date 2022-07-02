// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/math/floor_basic.phpt
  it("Test floor() - basic function test for floor()", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing floor() : basic functionality ***\\n\";\n$values = array(0,\n                -0,\n                0.5,\n                -0.5,\n                1,\n                -1,\n                1.5,\n                -1.5,\n                2.6,\n                -2.6,\n                037,\n                0x5F,\n                \"10.5\",\n                \"-10.5\",\n                \"3.95E3\",\n                \"-3.95E3\",\n                \"039\",\n                true,\n                false,\n                null,\n                );\nforeach($values as $value) {\n    echo \"\\n-- floor $value --\\n\";\n    var_dump(floor($value));\n};\n?>")).toMatchSnapshot();
  });
});
