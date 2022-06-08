// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strrpos_variation8.phpt
  it("Test strrpos() function : usage variations - repetitive chars for 'haystack' argument", function () {
    expect(parser.parseCode("<?php\n/* Test strrpos() function with strings containing multiple occurrences of 'needle' in the 'haystack'\n *  and with various needles & offsets\n*/\necho \"*** Testing strrpos() function: strings repetitive chars ***\\n\";\n$haystack = \"ababababAbaBa\";\n$needle = \"aba\";\n/* loop through to consider various offsets in getting the position of the needle in haystack string */\n$count = 1;\nfor($offset = -1; $offset <= strlen($haystack); $offset++ ) {\n  echo \"-- Iteration $count --\\n\";\n  var_dump( strrpos($haystack, $needle, $offset) );\n  $count++;\n}\necho \"*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
