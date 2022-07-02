// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strspn_basic.phpt
  it("Test strspn() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n* Testing strspn() : basic functionality\n*/\necho \"*** Testing strspn() : basic functionality ***\\n\";\n// Initialise all required variables\n$str = \"this is the test string\";\n$mask = \"htes \";\n$start = 8;\n$len = 12;\n// Calling strspn() with all possible arguments\nvar_dump( strspn($str, $mask, $start, $len) );\n// Calling strspn() with three arguments and default len argument\nvar_dump( strspn($str, $mask, $start) );\n// Calling strspn() with default arguments\nvar_dump( strspn($str, $mask) );\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
