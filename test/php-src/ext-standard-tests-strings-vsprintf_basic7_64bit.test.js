// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vsprintf_basic7_64bit.phpt
  it("Test vsprintf() function : basic functionality - unsigned format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vsprintf() : basic functionality - using unsigned format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%u\";\n$format2 = \"%u %u\";\n$format3 = \"%u %u %u\";\n$arg1 = array(-1111);\n$arg2 = array(-1111,-1234567);\n$arg3 = array(-1111,-1234567,-2345432);\nvar_dump( vsprintf($format1,$arg1) );\nvar_dump( vsprintf($format2,$arg2) );\nvar_dump( vsprintf($format3,$arg3) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
