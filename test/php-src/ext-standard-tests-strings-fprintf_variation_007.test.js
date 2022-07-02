// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/fprintf_variation_007.phpt
  it("Test fprintf() function (variation - 7)", function () {
    expect(parser.parseCode("<?php\n$int_numbers = array( 0, 1, -1, 2.7, -2.7, 23333333, -23333333, \"1234\" );\n/* creating dumping file */\n$data_file = __DIR__ . '/fprintf_variation_007.txt';\nif (!($fp = fopen($data_file, 'wt')))\n   return;\n/* octal type variations */\nfprintf($fp, \"\\n*** Testing fprintf() for octals ***\\n\");\nforeach( $int_numbers as $octal_num ) {\n fprintf( $fp, \"\\n\");\n fprintf( $fp, \"%o\", $octal_num );\n}\nfclose($fp);\nprint_r(file_get_contents($data_file));\necho \"\\nDone\";\nunlink($data_file);\n?>")).toMatchSnapshot();
  });
});
