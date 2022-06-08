// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vprintf_basic5.phpt
  it("Test vprintf() function : basic functionality - char format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vprintf() : basic functionality - using char format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%c\";\n$format2 = \"%c %c\";\n$format3 = \"%c %c %c\";\n$arg1 = array(65);\n$arg2 = array(65,66);\n$arg3 = array(65,66,67);\n$result = vprintf($format1,$arg1);\necho \"\\n\";\nvar_dump($result);\n$result = vprintf($format2,$arg2);\necho \"\\n\";\nvar_dump($result);\n$result = vprintf($format3,$arg3);\necho \"\\n\";\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
