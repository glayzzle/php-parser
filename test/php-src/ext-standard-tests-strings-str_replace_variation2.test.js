// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/str_replace_variation2.phpt
  it("Test str_replace() function", function () {
    expect(parser.parseCode("<?php\n/*\n  Description: Replace all occurrences of the search string with\n               the replacement string\n*/\necho \"\\n*** Testing str_replace() with various subjects ***\";\n$subject = \"Hello, world,0120333.3445-1.234567          NULL TRUE FALSE\\000\n        \\x000\\x5ACD\\0abcd \\xXYZ\\tabcd $$@#%^&*!~,.:;?: !!Hello, World\n        ?Hello, World chr(0).chr(128).chr(234).chr(65).chr(255).chr(256)\";\n/* needles in an array to be compared in the string $string */\n$search_str = array (\n  \"Hello, World\",\n  'Hello, World',\n  '!!Hello, World',\n  \"??Hello, World\",\n  \"$@#%^&*!~,.:;?\",\n  \"123\",\n  123,\n  \"-1.2345\",\n  -1.2344,\n  \"abcd\",\n  'XYZ',\n  \"NULL\",\n  \"0\",\n  0,\n  \"\",\n  \" \",\n  \"\\0\",\n  \"\\x000\",\n  \"\\x5AC\",\n  \"\\0000\",\n  \".3\",\n  TRUE,\n  \"TRUE\",\n  \"1\",\n  1,\n  FALSE,\n  \"FALSE\",\n  \" \",\n  \"          \",\n  'b',\n  '\\t',\n  \"\\t\",\n  chr(128).chr(234).chr(65).chr(255).chr(256),\n  $subject\n);\n/* loop through to get the  $string */\nfor( $i = 0; $i < count($search_str); $i++ ) {\n  echo \"\\n--- Iteration $i ---\";\n  echo \"\\n-- String after replacing the search value is => --\\n\";\n  var_dump( str_replace($search_str[$i], \"FOUND\", $subject, $count) );\n  echo \"-- search string has found '$count' times\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
