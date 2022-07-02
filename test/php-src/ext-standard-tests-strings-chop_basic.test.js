// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/chop_basic.phpt
  it("Test chop() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing chop(): basic functionality\n*/\necho \"*** Testing chop() : basic functionality ***\\n\";\n// Initialize all required variables\n$str = \"hello world\\t\\n\\r\\0\\x0B  \";\n$charlist = 'dl ';\n// Calling chop() with default arguments\nvar_dump( chop($str) );\n// Calling chop() with all arguments\nvar_dump( chop($str, $charlist) );\n// Calling chop() with the charlist not present at the end of input string\nvar_dump( chop($str, '!') );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
