// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vsprintf_basic3.phpt
  it("Test vsprintf() function : basic functionality - float format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vsprintf() : basic functionality - using float format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%f\";\n$format2 = \"%f %f\";\n$format3 = \"%f %f %f\";\n$format11 = \"%F\";\n$format22 = \"%F %F\";\n$format33 = \"%F %F %F\";\n$arg1 = array(11.11);\n$arg2 = array(11.11,22.22);\n$arg3 = array(11.11,22.22,33.33);\nvar_dump( vsprintf($format1,$arg1) );\nvar_dump( vsprintf($format11,$arg1) );\nvar_dump( vsprintf($format2,$arg2) );\nvar_dump( vsprintf($format22,$arg2) );\nvar_dump( vsprintf($format3,$arg3) );\nvar_dump( vsprintf($format33,$arg3) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
