// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/addslashes_basic.phpt
  it("Test addslashes() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing addslashes() with strings containing characters that can be prefixed with backslash\n * by the function\n*/\necho \"*** Testing addslashes() : basic functionality ***\\n\";\n// Initialize all required variables\n$str_array = array( \"How's everybody\",   // string containing single quote\n                    'Are you \"JOHN\"?',   // string with double quotes\n                    'c:\\php\\addslashes',   // string with backslashes\n                    \"hello\\0world\"   // string with nul character\n                  );\n// Calling addslashes() with all arguments\nforeach( $str_array as $str )  {\n  var_dump( addslashes($str) );\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
