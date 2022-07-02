// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/general_functions/var_export_basic4.phpt
  it("Test var_export() function with valid strings", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing var_export() with valid strings ***\\n\";\n// different valid  string\n$valid_strings = array(\n            \"\\\"\\\"\" => \"\",\n            \"\\\" \\\"\" => \" \",\n            \"''\" => '',\n            \"' '\" => ' ',\n            \"\\\"string\\\"\" => \"string\",\n            \"'string'\" => 'string',\n            \"\\\"\\\\0Hello\\\\0 World\\\\0\\\"\" => \"\\0Hello\\0 World\\0\",\n            \"\\\"NULL\\\"\" => \"NULL\",\n            \"'null'\" => 'null',\n            \"\\\"FALSE\\\"\" => \"FALSE\",\n            \"'false'\" => 'false',\n            \"\\\"\\\\x0b\\\"\" => \"\\x0b\",\n            \"\\\"\\\\0\\\"\" => \"\\0\",\n            \"'\\\\0'\" => '\\0',\n            \"'\\\\060'\" => '\\060',\n            \"\\\"\\\\070\\\"\" => \"\\070\"\n);\n/* Loop to check for above strings with var_export() */\necho \"\\n*** Output for strings ***\\n\";\nforeach($valid_strings as $key => $str) {\n    echo \"\\n-- Iteration: $key --\\n\";\n    var_export( $str );\n    echo \"\\n\";\n    var_export( $str, FALSE);\n    echo \"\\n\";\n    var_dump( var_export( $str, TRUE) );\n    echo \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
