// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/extract_variation3.phpt
  it("Test extract() function (variation 3)", function () {
    expect(parser.parseCode("<?php\n/* various combinations of arrays to be used for the test */\n$mixed_array = array(\n  array( 6, \"six\", 7, \"seven\", 8, \"eight\", 9, \"nine\" ),\n  array( \"a\" => \"aaa\", \"A\" => \"AAA\", \"c\" => \"ccc\", \"d\" => \"ddd\", \"e\" => \"eee\" ),\n  array( \"1\" => \"one\", \"2\" => \"two\", \"3\" => \"three\", \"4\" => \"four\", \"5\" => \"five\" ),\n);\n$counter = 0;\nforeach ( $mixed_array as $sub_array ) {\n  echo \"\\n-- Iteration $counter --\\n\";\n  $counter++;\n  var_dump ( extract($sub_array)); /* Single Argument */\n  /* variations of two arguments */\n  var_dump ( extract($sub_array, EXTR_OVERWRITE));\n  var_dump ( extract($sub_array, EXTR_SKIP));\n  var_dump ( extract($sub_array, EXTR_IF_EXISTS));\n  /* variations of three arguments with use of various extract types*/\n  var_dump ( extract($sub_array, EXTR_PREFIX_INVALID, \"ssd\"));\n  var_dump ( extract($sub_array, EXTR_PREFIX_SAME, \"sss\"));\n  var_dump ( extract($sub_array, EXTR_PREFIX_ALL, \"bb\"));\n  var_dump ( extract($sub_array, EXTR_PREFIX_ALL, \"\"));  // \"_\" taken as default prefix\n  var_dump ( extract($sub_array, EXTR_PREFIX_IF_EXISTS, \"bb\"));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
