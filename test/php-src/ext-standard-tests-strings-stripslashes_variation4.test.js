// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/stripslashes_variation4.phpt
  it("Test stripslashes() function : usage variations - double dimensional arrays", function () {
    expect(parser.parseCode("<?php\n/*\n * Test stripslashes() with double dimensional arrays\n*/\necho \"*** Testing stripslashes() : with double dimensional arrays ***\\n\";\n// initialising the string array\n$str_array = array(\n                    array(\"\", array()),\n                    array(\"\", array(\"\")),\n                    array(\"f\\\\'oo\", \"b\\\\'ar\", array(\"fo\\\\'o\", \"b\\\\'ar\")),\n                    array(\"f\\\\'oo\", \"b\\\\'ar\", array(\"\")),\n                    array(\"f\\\\'oo\", \"b\\\\'ar\", array(\"fo\\\\'o\", \"b\\\\'ar\", array(\"\"))),\n                    array(\"f\\\\'oo\", \"b\\\\'ar\", array(\"fo\\\\'o\", \"b\\\\'ar\", array(\"fo\\\\'o\", \"b\\\\'ar\")))\n                  );\nfunction stripslashes_deep($value)  {\n  $value = is_array($value) ? array_map('stripslashes_deep', $value) : stripslashes($value);\n  return $value;\n}\n$count = 1;\n// looping to test for all strings in $str_array\nforeach( $str_array as $arr )  {\n  echo \"\\n-- Iteration $count --\\n\";\n  var_dump( stripslashes_deep($arr) );\n  $count ++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
