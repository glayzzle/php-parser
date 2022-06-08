// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/stripos_variation8.phpt
  it("Test stripos() function : usage variations - repetitive chars for 'haystack' argument", function () {
    expect(parser.parseCode("<?php\n/* Test stripos() function with strings containing repetitive chars for haystak\n *  and with various needles & offsets\n*/\necho \"*** Testing stripos() function: strings repetitive chars ***\\n\";\n$haystack = \"aBAbaBAbaBabAbAbaBa\";\n$needles = array(\n  \"aba\",\n  \"aBA\",\n  \"ABA\",\n  \"Aba\",\n  \"BAb\",\n  \"bab\",\n  \"bAb\",\n  \"BAB\"\n);\n/* loop through to consider various offsets in getting the position of the needle in haystack string */\n$count = 1;\nfor($index = 0; $index < count($needles); $index++) {\n  echo \"\\n-- Iteration $count --\\n\";\n  for($offset = 0; $offset <= strlen($haystack); $offset++ ) {\n    var_dump( stripos($haystack, $needles[$index], $offset) );\n  }\n  $count++;\n}\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
