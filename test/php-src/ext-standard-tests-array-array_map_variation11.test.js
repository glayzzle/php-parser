// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_map_variation11.phpt
  it("Test array_map() function : usage variations - with recursive callback", function () {
    expect(parser.parseCode("<?php\n/*\n * Test array_map() by passing subarrays and recursive callback function\n */\necho \"*** Testing array_map() : recursive callback function ***\\n\";\nfunction square_recur_single_array($var) {\n   if (is_array($var))\n     return array_map('square_recur_single_array', $var);\n   return $var * $var;\n}\n$array1 = array(1, array(2, 3, array(5)), array(4));\nvar_dump( array_map('square_recur_single_array', $array1));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
