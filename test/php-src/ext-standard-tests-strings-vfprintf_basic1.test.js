// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/vfprintf_basic1.phpt
  it("Test vfprintf() function : basic functionality - string format", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing vfprintf() : basic functionality - using string format ***\\n\";\n// Initialise all required variables\n$format = \"format\";\n$format1 = \"%s\\n\";\n$format2 = \"%s %s\\n\";\n$format3 = \"%s %s %s\\n\";\n$arg1 = array(\"one\");\n$arg2 = array(\"one\",\"two\");\n$arg3 = array(\"one\",\"two\",\"three\");\n/* creating dumping file */\n$data_file = __DIR__ . '/vfprintf_basic1.txt';\nif (!($fp = fopen($data_file, 'wt')))\n   return;\n$result = vfprintf($fp, $format1, $arg1);\nvar_dump($result);\n$result = vfprintf($fp, $format2, $arg2);\nvar_dump($result);\n$result = vfprintf($fp, $format3, $arg3);\nvar_dump($result);\nfclose($fp);\nprint_r(file_get_contents($data_file));\nunlink($data_file);\n?>")).toMatchSnapshot();
  });
});
