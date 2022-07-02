// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vfprintf_basic4.phpt
  it("Test vfprintf() function : basic functionality - bool format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vfprintf() : basic functionality - using bool format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%b\";\n$format2 = \"%b %b\";\n$format3 = \"%b %b %b\";\n$arg1 = array(TRUE);\n$arg2 = array(TRUE,FALSE);\n$arg3 = array(TRUE,FALSE,TRUE);\n/* creating dumping file */\n$data_file = __DIR__ . '/vfprintf_basic4.txt';\nif (!($fp = fopen($data_file, 'wt')))\n   return;\nvfprintf($fp, $format1,$arg1);\nfprintf($fp, \"\\n\");\nvfprintf($fp, $format2,$arg2);\nfprintf($fp, \"\\n\");\nvfprintf($fp, $format3,$arg3);\nfprintf($fp, \"\\n\");\nfclose($fp);\nprint_r(file_get_contents($data_file));\nunlink($data_file);\n?>")).toMatchSnapshot();
  });
});
