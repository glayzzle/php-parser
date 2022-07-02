// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vprintf_basic4.phpt
  it("Test vprintf() function : basic functionality - bool format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vprintf() : basic functionality - using bool format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%b\";\n$format2 = \"%b %b\";\n$format3 = \"%b %b %b\";\n$arg1 = array(TRUE);\n$arg2 = array(TRUE,FALSE);\n$arg3 = array(TRUE,FALSE,TRUE);\n$result = vprintf($format1,$arg1);\necho \"\\n\";\nvar_dump($result);\n$result = vprintf($format2,$arg2);\necho \"\\n\";\nvar_dump($result);\n$result = vprintf($format3,$arg3);\necho \"\\n\";\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
