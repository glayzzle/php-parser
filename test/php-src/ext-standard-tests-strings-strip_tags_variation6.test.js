// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strip_tags_variation6.phpt
  it("Test strip_tags() function : usage variations - binary safe checking", function () {
    expect(parser.parseCode("<?php\n/*\n * testing whether strip_tags() is binary safe or not\n*/\necho \"*** Testing strip_tags() : usage variations ***\\n\";\n//various string inputs\n$strings = array (\n  \"<html> I am html string </html>\".chr(0).\"<?php I am php string ?>\",\n  \"<html> I am html string\\0 </html><?php I am php string ?>\",\n  \"<a>I am html string</a>\",\n  \"<html>I am html string</html>\".decbin(65).\"<?php I am php string?>\"\n);\n//loop through the strings array to check if strip_tags() is binary safe\n$iterator = 1;\nforeach($strings as $value)\n{\n      echo \"-- Iteration $iterator --\\n\";\n      var_dump( strip_tags($value) );\n      $iterator++;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
