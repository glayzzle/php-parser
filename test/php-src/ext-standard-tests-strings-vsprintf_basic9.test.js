// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vsprintf_basic9.phpt
  it("Test vsprintf() function : basic functionality - hexadecimal format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vsprintf() : basic functionality - using hexadecimal format ***\\n\";\n// Initialising different format strings\n$format = \"format\";\n$format1 = \"%x\";\n$format2 = \"%x %x\";\n$format3 = \"%x %x %x\";\n$format11 = \"%X\";\n$format22 = \"%X %X\";\n$format33 = \"%X %X %X\";\n$arg1 = array(11);\n$arg2 = array(11,132);\n$arg3 = array(11,132,177);\nvar_dump( vsprintf($format1,$arg1) );\nvar_dump( vsprintf($format11,$arg1) );\nvar_dump( vsprintf($format2,$arg2) );\nvar_dump( vsprintf($format22,$arg2) );\nvar_dump( vsprintf($format3,$arg3) );\nvar_dump( vsprintf($format33,$arg3) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
