// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/extract_variation2.phpt
  it("Test extract() function (variation 2)", function () {
    expect(parser.parseCode("<?php\n/* various combinations of arrays to be used for the test */\n$mixed_array = array(\n  array(),\n  array( 1,2,3,4,5,6,7,8,9 ),\n  array( \"One\", \"Two\", \"Three\", \"Four\", \"Five\" ),\n);\n$counter = 0;\nforeach ( $mixed_array as $sub_array ) {\n  echo \"\\n-- Iteration $counter --\\n\";\n  $counter++;\n  var_dump ( extract($sub_array)); /* Single Argument */\n  /* variations of two arguments */\n  var_dump ( extract($sub_array, EXTR_OVERWRITE));\n  var_dump ( extract($sub_array, EXTR_SKIP));\n  var_dump ( extract($sub_array, EXTR_IF_EXISTS));\n  /* variations of three arguments with use of various extract types*/\n  var_dump ( extract($sub_array, EXTR_PREFIX_INVALID, \"ssd\"));\n  var_dump ( extract($sub_array, EXTR_PREFIX_SAME, \"sss\"));\n  var_dump ( extract($sub_array, EXTR_PREFIX_ALL, \"bb\"));\n  var_dump ( extract($sub_array, EXTR_PREFIX_ALL, \"\"));  // \"_\" taken as default prefix\n  var_dump ( extract($sub_array, EXTR_PREFIX_IF_EXISTS, \"bb\"));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
