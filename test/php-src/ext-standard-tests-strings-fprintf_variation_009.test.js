// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/fprintf_variation_009.phpt
  it("Test fprintf() function (variation - 9)", function () {
    expect(parser.parseCode("<?php\n$string_variation = array( \"%5s\", \"%-5s\", \"%05s\", \"%'#5s\" );\n$strings = array( NULL, \"abc\", 'aaa' );\n/* creating dumping file */\n$data_file = __DIR__ . '/fprintf_variation_009.txt';\nif (!($fp = fopen($data_file, 'wt')))\n   return;\n$counter = 1;\n/* string type variations */\nfprintf($fp, \"\\n*** Testing fprintf() for string types ***\\n\");\nforeach( $string_variation as $string_var ) {\n  fprintf( $fp, \"\\n-- Iteration %d --\\n\",$counter);\n  foreach( $strings as $str ) {\n    fprintf( $fp, \"\\n\");\n    fprintf( $fp, $string_var, $str );\n  }\n  $counter++;\n}\nfclose($fp);\nprint_r(file_get_contents($data_file));\necho \"\\nDone\";\nunlink($data_file);\n?>")).toMatchSnapshot();
  });
});
