// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strip_tags_variation4.phpt
  it("Test strip_tags() function : usage variations - invalid values for 'str' and valid 'allowable_tags'", function () {
    expect(parser.parseCode("<?php\n/*\n * testing functionality of strip_tags() by giving invalid values for $str and valid values for $allowable_tags argument\n*/\necho \"*** Testing strip_tags() : usage variations ***\\n\";\n// unexpected values for $string\n$strings = array (\n  \"<abc>hello</abc> \\t\\tworld... <ppp>strip_tags_test</ppp>\",\n  '<abc>hello</abc> \\t\\tworld... <ppp>strip_tags_test</ppp>',\n  \"<%?php hello\\t world?%>\",\n  '<%?php hello\\t world?%>',\n  \"<<htmL>>hello<</htmL>>\",\n  '<<htmL>>hello<</htmL>>',\n  \"<a.>HtMl text</.a>\",\n  '<a.>HtMl text</.a>',\n  \"<nnn>I am not a valid html text</nnn>\",\n  '<nnn>I am not a valid html text</nnn>',\n  \"<nnn>I am a quoted (\\\") string with special chars like \\$,\\!,\\@,\\%,\\&</nnn>\",\n  '<nnn>I am a quoted (\\\") string with special chars like \\$,\\!,\\@,\\%,\\&</nnn>',\n);\n//valid html and php tags\n$quotes = \"<p><a><?php<html>\";\n//loop through the various elements of strings array to test strip_tags() functionality\n$iterator = 1;\nforeach($strings as $string_value)\n{\n      echo \"-- Iteration $iterator --\\n\";\n      var_dump( strip_tags($string_value, $quotes) );\n      $iterator++;\n}\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
