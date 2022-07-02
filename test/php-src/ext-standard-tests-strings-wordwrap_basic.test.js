// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/wordwrap_basic.phpt
  it("Test wordwrap() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing wordwrap() : basic functionality ***\\n\";\n// Initialize all required variables\n$str = \"The quick brown foooooooooox jummmmmmmmmmmmped over the lazzzzzzzzzzzy doooooooooooooooooooooog.\";\n$width = 80;\n$break = '<br />\\n';\n// Calling wordwrap() with default arguments\nvar_dump( wordwrap($str) );\n// Calling wordwrap() with all possible optional arguments\n// with $width arg\nvar_dump( wordwrap($str, $width) );\n// with $break arg\nvar_dump( wordwrap($str, $width, $break) );\n// Calling wordwrap() with all arguments\n// $cut as true\n$width = 10;\n$cut = true;\nvar_dump( wordwrap($str, $width, $break, $cut) );\n// $cut as false\n$width = 10;\n$cut = false;\nvar_dump( wordwrap($str, $width, $break, $cut) );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
