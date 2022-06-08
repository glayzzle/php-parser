// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strncmp_variation2.phpt
  it("Test strncmp() function: usage variations - double quoted strings", function () {
    expect(parser.parseCode("<?php\n/* Test strncmp() function with double quoted strings for 'str1', 'str2' */\necho \"*** Test strncmp() function: with double quoted strings ***\\n\";\n$strings = array(\n  \"Hello, World\",\n  \"hello, world\",\n  \"HELLO, WORLD\",\n  \"Hello, World\\n\",\n  \"Hello\".chr(0).\"World\"\n);\n/* loop through to compare each string with the other string */\n$count = 1;\nfor($index1 = 0; $index1 < count($strings); $index1++) {\n  echo \"-- Iteration $count --\\n\";\n  for($index2 = 0; $index2 < count($strings); $index2++) {\n    var_dump( strncmp( $strings[$index1], $strings[$index2], (strlen($strings[$index1]) + 1) ) );\n  }\n  $count ++;\n}\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
