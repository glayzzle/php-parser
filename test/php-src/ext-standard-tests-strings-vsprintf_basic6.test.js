// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vsprintf_basic6.phpt
  it("Test vsprintf() function : basic functionality - exponential format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vsprintf() : basic functionality - using exponential format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%e\";\n$format2 = \"%e %e\";\n$format3 = \"%e %e %e\";\n$arg1 = array(1000);\n$arg2 = array(1000,2000);\n$arg3 = array(1000,2000,3000);\nvar_dump( vsprintf($format1,$arg1) );\nvar_dump( vsprintf($format2,$arg2) );\nvar_dump( vsprintf($format3,$arg3) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
