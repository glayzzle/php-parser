// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/str_replace_variation1.phpt
  it("Test str_replace() function - test search values", function () {
    expect(parser.parseCode("<?php\necho \"\\n*** Testing str_replace() with various search values ***\";\n$search_arr = array( TRUE, FALSE, 1, 0, -1, \"1\", \"0\", \"-1\",  NULL,\n                     array(), \"php\", \"\");\n$i = 0;\n/* loop through to replace the matched elements in the array */\nforeach( $search_arr as $value ) {\n  echo \"\\n-- Iteration $i --\\n\";\n  /* replace the string in array */\n  var_dump( str_replace($value, \"FOUND\", $search_arr, $count) );\n  var_dump( $count );\n  $i++;\n}\n?>")).toMatchSnapshot();
  });
});
