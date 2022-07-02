// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/nl2br_variation4.phpt
  it("Test nl2br() function : usage variations - html values for 'str' argument", function () {
    expect(parser.parseCode("<?php\n/*\n* Test nl2br() function by passing html string inputs containing line breaks and\n*   new line chars for 'str'\n*/\necho \"*** Testing nl2br() : usage variations ***\\n\";\n//array of html strings\n$strings = array(\n  \"<html>Hello<br />world</html>\",\n  \"<html><br /></html>\",\n  \"<html>\\nHello\\r\\nworld\\r</html>\",\n  \"<html>\\n \\r\\n \\r</html>\",\n);\n//loop through $strings array to test nl2br() function with each element\nforeach( $strings as $str ){\n  var_dump(nl2br($str) );\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
