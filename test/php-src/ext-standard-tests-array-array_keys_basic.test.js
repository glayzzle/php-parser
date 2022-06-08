// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_keys_basic.phpt
  it("Test array_keys() function (basic)", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_keys() on basic array operation ***\\n\";\n$basic_arr = array(\"a\" => 1, \"b\" => 2, 2 => 2.0, -23 => \"asdasd\",\n                   array(1,2,3));\nvar_dump(array_keys($basic_arr));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
