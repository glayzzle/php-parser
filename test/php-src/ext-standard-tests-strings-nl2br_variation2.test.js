// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/nl2br_variation2.phpt
  it("Test nl2br() function : usage variations - single quoted strings for 'str' argument", function () {
    expect(parser.parseCode("<?php\n/* Test nl2br() function by passing single quoted strings containing various\n *   combinations of new line chars to 'str' argument\n*/\necho \"*** Testing nl2br() : usage variations ***\\n\";\n$strings = array(\n  '\\n',\n  '\\r',\n  '\\r\\n',\n  'Hello\\nWorld',\n  'Hello\\rWorld',\n  'Hello\\r\\nWorld',\n  //one blank line\n  '\n',\n  //two blank lines\n  '\n',\n  //inserted new line\n  'Hello\nWorld'\n);\n//loop through $strings array to test nl2br() function with each element\n$count = 1;\nforeach( $strings as $str ){\n  echo \"-- Iteration $count --\\n\";\n  var_dump(nl2br($str) );\n  $count ++ ;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
