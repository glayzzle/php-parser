// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vprintf_basic6.phpt
  it("Test vprintf() function : basic functionality - exponential format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vprintf() : basic functionality - using exponential format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%e\";\n$format2 = \"%e %e\";\n$format3 = \"%e %e %e\";\n$arg1 = array(1000);\n$arg2 = array(1000,2000);\n$arg3 = array(1000,2000,3000);\n$result = vprintf($format1,$arg1);\necho \"\\n\";\nvar_dump($result);\n$result = vprintf($format2,$arg2);\necho \"\\n\";\nvar_dump($result);\n$result = vprintf($format3,$arg3);\necho \"\\n\";\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
