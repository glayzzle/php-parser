// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_splice_variation4.phpt
  it("Test array_splice() function : usage variations - non array replacement values", function () {
    expect(parser.parseCode("<?php\n/*\n * Function is implemented in ext/standard/array.c\n*/\nfunction test_splice ($replacement)\n{\n    $input_array=array(0,1);\n    var_dump (array_splice ($input_array,2,0,$replacement));\n    var_dump ($input_array);\n}\ntest_splice (2);\ntest_splice (2.1);\ntest_splice (true);\n//file type resource\n$file_handle = fopen(__FILE__, \"r\");\ntest_splice ($file_handle);\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
