// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vprintf_basic3.phpt
  it("Test vprintf() function : basic functionality - float format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vprintf() : basic functionality - using float format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%f\";\n$format2 = \"%f %f\";\n$format3 = \"%f %f %f\";\n$format11 = \"%F\";\n$format22 = \"%F %F\";\n$format33 = \"%F %F %F\";\n$arg1 = array(11.11);\n$arg2 = array(11.11,22.22);\n$arg3 = array(11.11,22.22,33.33);\n$result = vprintf($format1,$arg1);\necho \"\\n\";\nvar_dump($result);\n$result = vprintf($format11,$arg1);\necho \"\\n\";\nvar_dump($result);\n$result = vprintf($format2,$arg2);\necho \"\\n\";\nvar_dump($result);\n$result = vprintf($format22,$arg2);\necho \"\\n\";\nvar_dump($result);\n$result = vprintf($format3,$arg3);\necho \"\\n\";\nvar_dump($result);\n$result = vprintf($format33,$arg3);\necho \"\\n\";\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
