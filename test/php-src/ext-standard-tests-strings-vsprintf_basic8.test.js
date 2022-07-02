// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vsprintf_basic8.phpt
  it("Test vsprintf() function : basic functionality - octal format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vsprintf() : basic functionality - using octal format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%o\";\n$format2 = \"%o %o\";\n$format3 = \"%o %o %o\";\n$arg1 = array(021);\n$arg2 = array(021,0347);\n$arg3 = array(021,0347,0567);\nvar_dump( vsprintf($format1,$arg1) );\nvar_dump( vsprintf($format2,$arg2) );\nvar_dump( vsprintf($format3,$arg3) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
