// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/extract_variation5.phpt
  it("Test extract() function (variation 5)", function () {
    expect(parser.parseCode("<?php\n$mixed_array = array(\n  array( array(\"oNe\", \"tWo\", 4), array(10, 20, 30, 40, 50), array() ),\n  array( \"one\" => 1, \"one\" => 2, \"three\" => 3, 3, 4, 3 => 33, 4 => 44, 5, 6,\n          5 => 57, \"5.4\" => 554, \"5.7\" => 557 )\n);\n$counter = 0;\nforeach ( $mixed_array as $sub_array ) {\n  echo \"\\n-- Iteration $counter --\\n\";\n  $counter++;\n  var_dump ( extract($sub_array)); /* Single Argument */\n  /* variations of two arguments */\n  var_dump ( extract($sub_array, EXTR_OVERWRITE));\n  var_dump ( extract($sub_array, EXTR_SKIP));\n  var_dump ( extract($sub_array, EXTR_IF_EXISTS));\n  /* variations of three arguments with use of various extract types*/\n  var_dump ( extract($sub_array, EXTR_PREFIX_INVALID, \"ssd\"));\n  var_dump ( extract($sub_array, EXTR_PREFIX_SAME, \"sss\"));\n  var_dump ( extract($sub_array, EXTR_PREFIX_ALL, \"bb\"));\n  var_dump ( extract($sub_array, EXTR_PREFIX_ALL, \"\"));  // \"_\" taken as default prefix\n  var_dump ( extract($sub_array, EXTR_PREFIX_IF_EXISTS, \"bb\"));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
