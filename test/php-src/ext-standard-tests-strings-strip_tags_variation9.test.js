// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strip_tags_variation9.phpt
  it("Test strip_tags() function : usage variations - double quoted strings", function () {
    expect(parser.parseCode("<?php\n/*\n * testing functionality of strip_tags() by giving double quoted strings as values for $str argument\n*/\necho \"*** Testing strip_tags() : usage variations ***\\n\";\n$double_quote_string = array (\n  \"<html> \\$ -> This represents the dollar sign</html><?php echo hello ?>\",\n  \"<html>\\t\\r\\v The quick brown fo\\fx jumped over the lazy dog</p>\",\n  \"<a>This is a hyper text tag</a>\",\n  \"<? <html>hello world\\\\t</html>?>\",\n  \"<p>This is a paragraph</p>\",\n  \"<b>This is \\ta text in bold letters\\r\\s\\malong with slashes\\n</b>\"\n);\n$quotes = \"<html><a><p><b><?php\";\n//loop through the various elements of strings array to test strip_tags() functionality\n$iterator = 1;\nforeach($double_quote_string as $string_value)\n{\n      echo \"-- Iteration $iterator --\\n\";\n      var_dump( strip_tags($string_value, $quotes) );\n      $iterator++;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
