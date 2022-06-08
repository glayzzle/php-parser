// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vfprintf_basic5.phpt
  it("Test vfprintf() function : basic functionality - char format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vfprintf() : basic functionality - using char format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%c\";\n$format2 = \"%c %c\";\n$format3 = \"%c %c %c\";\n$arg1 = array(65);\n$arg2 = array(65,66);\n$arg3 = array(65,66,67);\n/* creating dumping file */\n$data_file = __DIR__ . '/vfprintf_basic5.txt';\nif (!($fp = fopen($data_file, 'wt')))\n   return;\nvfprintf($fp, $format1,$arg1);\nfprintf($fp, \"\\n\");\nvfprintf($fp, $format2,$arg2);\nfprintf($fp, \"\\n\");\nvfprintf($fp, $format3,$arg3);\nfprintf($fp, \"\\n\");\nfclose($fp);\nprint_r(file_get_contents($data_file));\nunlink($data_file);\n?>")).toMatchSnapshot();
  });
});
