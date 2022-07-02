// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/nl2br_variation1.phpt
  it("Test nl2br() function : usage variations - double quoted strings for 'str' argument", function () {
    expect(parser.parseCode("<?php\n/* Test nl2br() function by passing double quoted strings containing various\n *   combinations of new line chars to 'str' argument\n*/\necho \"*** Testing nl2br() : usage variations ***\\n\";\n$strings = array(\n  //new line chars embedded in strings\n  \"Hello\\nWorld\",\n  \"\\nHello\\nWorld\\n\",\n  \"Hello\\rWorld\",\n  \"\\rHello\\rWorld\\r\",\n  \"Hello\\r\\nWorld\",\n  \"\\r\\nHello\\r\\nWorld\\r\\n\",\n  //one blank line\n  \"\n\",\n  //two blank lines\n  \"\n\",\n  //inserted new line in a string\n  \"Hello\nWorld\"\n);\n//loop through $strings array to test nl2br() function with each element\n$count = 1;\nforeach( $strings as $str ){\n  echo \"-- Iteration $count --\\n\";\n  var_dump(nl2br($str) );\n  $count ++ ;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
