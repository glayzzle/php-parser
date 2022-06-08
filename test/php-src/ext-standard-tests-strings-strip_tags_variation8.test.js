// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strip_tags_variation8.phpt
  it("Test strip_tags() function : usage variations - valid value for 'str' and invalid values for 'allowable_tags'", function () {
    expect(parser.parseCode("<?php\n/*\n * testing functionality of strip_tags() by giving valid value for $str and invalid values for $allowable_tags argument\n*/\necho \"*** Testing strip_tags() : usage variations ***\\n\";\n$strings = \"<html>hello</html> \\tworld... <p>strip_tags_test\\v\\f</p><?php hello\\t wo\\rrld?>\";\n$quotes = array (\n  \"<nnn>\",\n  '<nnn>',\n  \"<abc>\",\n  '<abc>',\n  \"<%?php\",\n  '<%?php',\n  \"<<html>>\",\n  '<<html>>'\n);\n//loop through the various elements of strings array to test strip_tags() functionality\n$iterator = 1;\nforeach($quotes as $string_value)\n{\n      echo \"-- Iteration $iterator --\\n\";\n      var_dump( strip_tags($strings, $string_value) );\n      $iterator++;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
