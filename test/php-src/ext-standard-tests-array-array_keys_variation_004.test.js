// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_keys_variation_004.phpt
  it("Test array_keys() function (variation - 4)", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_keys() on all the types other than arrays ***\\n\";\n$types_arr = array(\n  TRUE => TRUE,\n  FALSE => FALSE,\n  1 => 1,\n  0 => 0,\n  -1 => -1,\n  \"1\" => \"1\",\n  \"0\" => \"0\",\n  \"-1\" => \"-1\",\n  NULL,\n  array(),\n  \"php\" => \"php\",\n  \"\" => \"\"\n);\n$values = array(TRUE, FALSE, 1, 0, -1, \"1\", \"0\", \"-1\",  NULL, array(), \"php\", \"\");\nforeach ($values as $value){\n  var_dump(array_keys($types_arr, $value, TRUE));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
