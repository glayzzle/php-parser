// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strtok_variation4.phpt
  it("Test strtok() function : usage variations - with embedded nulls in the strings", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing strtok() : with embedded nulls in the strings\n*/\necho \"*** Testing strtok() : with embedded nulls in the strings ***\\n\";\n// defining varous strings with embedded nulls\n$strings_with_nulls = array(\n                   \"\\0\",\n                   '\\0',\n                           \"hello\\0world\",\n                           \"\\0hel\\0lo\",\n                           \"hello\\0\",\n                           \"\\0\\0hello\\tworld\\0\\0\",\n                           \"\\\\0he\\0llo\\\\0\",\n                           'hello\\0\\0'\n                           );\n// loop through each element of the array and check the working of strtok()\n// when supplied with different string values\n$counter = 1;\nforeach( $strings_with_nulls as $string )  {\n  echo \"\\n--- Iteration $counter ---\\n\";\n  var_dump( strtok($string, \"\\0\") );\n  for($count = 1; $count <= 5; $count++)  {\n    var_dump( strtok(\"\\0\") );\n  }\n  $counter++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
