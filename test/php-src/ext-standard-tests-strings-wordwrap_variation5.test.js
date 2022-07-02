// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/wordwrap_variation5.phpt
  it("Test wordwrap() function : usage variations  - valid break arguments(spaces)", function () {
    expect(parser.parseCode("<?php\n/*\n *test wordwrap() with break arguments as single spaces\n*/\necho \"*** Testing wordwrap() : usage variations ***\\n\";\n// Initialize all required variables\n$str = \"Testing wordrap function\";\n$width = 1;\n$cut = false;\necho \"\\n-- Testing wordwrap() with default break value and single space as value --\\n\";\necho \"-- with default break and cut value --\\n\";\nvar_dump( wordwrap($str, $width) );  // default break and cut value\necho \"-- with default cut value --\\n\";\n$break = ' ';\n$break1 = \"  \";\nvar_dump( wordwrap($str, $width, $break) );\nvar_dump( wordwrap($str, $width, $break1) );\necho \"-- with cut value as false --\\n\";\n$cut = false;\nvar_dump( wordwrap($str, $width, $break, $cut) );\nvar_dump( wordwrap($str, $width, $break1, $cut) );\necho \"-- with cut value as true --\\n\";\n$cut = true;\nvar_dump( wordwrap($str, $width, $break, $cut) );\nvar_dump( wordwrap($str, $width, $break1, $cut) );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
