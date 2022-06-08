// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/chop_variation4.phpt
  it("Test chop() function : usage variations - strings with embedded nulls", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing chop() : with nulls embedded in input string\n*/\necho \"*** Testing chop() : string with embedded nulls ***\\n\";\n// defining varous strings with embedded nulls\n$strings_with_nulls = array(\n               \"hello\\0world\",\n               \"\\0hello\",\n               \"hello\\0\",\n               \"\\0\\0hello\\tworld\\0\\0\",\n               \"\\\\0hello\\\\0\",\n               'hello\\0\\0',\n               chr(0),\n               chr(0).chr(0),\n                   chr(0).'hello'.chr(0),\n               'hello'.chr(0).'world'\n               );\n$count = 1;\nforeach($strings_with_nulls as $string)  {\n  echo \"\\n--- Iteration $count ---\\n\";\n  var_dump( chop($string) );\n  var_dump( chop($string, \"\\0\") );\n  var_dump( chop($string, '\\0') );\n  $count++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
