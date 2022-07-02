// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/stripslashes_basic.phpt
  it("Test stripslashes() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing stripslashes() with quoted strings\n*/\necho \"*** Testing stripslashes() : basic functionality ***\\n\";\n// Initialize all required variables\n$str_array = array( \"How's everybody\",   // string containing single quote\n                    'Are you \"JOHN\"?',   // string with double quotes\n                    'c:\\php\\stripslashes',   // string with backslashes\n                    'c:\\\\php\\\\stripslashes',   // string with double backslashes\n                    \"hello\\0world\"   // string with nul character\n                  );\n// Calling striplashes() with all arguments\nforeach( $str_array as $str )  {\n  $str_addslashes = addslashes($str);\n  var_dump(\"The string after addslashes is:\", $str_addslashes);\n  $str_stripslashes = stripslashes($str_addslashes);\n  var_dump(\"The string after stripslashes is:\", $str_stripslashes);\n  if( strcmp($str, $str_stripslashes) != 0 )\n    echo \"\\nError: Original string and string after stripslashes donot match\\n\";\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
