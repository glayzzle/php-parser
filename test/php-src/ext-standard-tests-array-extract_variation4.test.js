// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/extract_variation4.phpt
  it("Test extract() function (variation 4)", function () {
    expect(parser.parseCode("<?php\n$mixed_array = array(\n  array( 1 => \"one\", 2 => \"two\", 3 => 7, 4 => \"four\", 5 => \"five\" ),\n  array( \"f\" => \"fff\", \"1\" => \"one\", 4 => 6, \"\" => \"blank\", 2 => \"float\", \"F\" => \"FFF\",\n         \"blank\" => \"\", 3 => 3.7, 5 => 7, 6 => 8.6, '5' => \"Five\", \"4name\" => \"jonny\", \"a\" => NULL, NULL => 3 ),\n  array( 12, \"name\", 'age', '45' ),\n);\n$counter = 0;\nforeach ( $mixed_array as $sub_array ) {\n  echo \"\\n-- Iteration $counter --\\n\";\n  $counter++;\n  var_dump ( extract($sub_array)); /* Single Argument */\n  /* variations of two arguments */\n  var_dump ( extract($sub_array, EXTR_OVERWRITE));\n  var_dump ( extract($sub_array, EXTR_SKIP));\n  var_dump ( extract($sub_array, EXTR_IF_EXISTS));\n  /* variations of three arguments with use of various extract types*/\n  var_dump ( extract($sub_array, EXTR_PREFIX_INVALID, \"ssd\"));\n  var_dump ( extract($sub_array, EXTR_PREFIX_SAME, \"sss\"));\n  var_dump ( extract($sub_array, EXTR_PREFIX_ALL, \"bb\"));\n  var_dump ( extract($sub_array, EXTR_PREFIX_ALL, \"\"));  // \"_\" taken as default prefix\n  var_dump ( extract($sub_array, EXTR_PREFIX_IF_EXISTS, \"bb\"));\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
