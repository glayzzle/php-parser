// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/fprintf_variation_004.phpt
  it("Test fprintf() function (variation - 4)", function () {
    expect(parser.parseCode("<?php\n$char_variation = array( 'a', \"a\", 67, -67, 99 );\n/* creating dumping file */\n$data_file = __DIR__ . '/fprintf_variation_004.txt';\nif (!($fp = fopen($data_file, 'wt')))\n   return;\n/* char type variations */\nfprintf($fp, \"\\n*** Testing fprintf() for chars ***\\n\");\nforeach( $char_variation as $char ) {\n  fprintf( $fp, \"\\n\");\n  fprintf( $fp,\"%c\", $char );\n}\nfclose($fp);\nprint_r(file_get_contents($data_file));\necho \"\\nDone\";\nunlink($data_file);\n?>")).toMatchSnapshot();
  });
});
