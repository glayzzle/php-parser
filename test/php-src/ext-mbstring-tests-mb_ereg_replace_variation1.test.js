// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_ereg_replace_variation1.phpt
  it("Test mb_ereg_replace() function : usage variations  - <type here specifics of this variation>", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing mb_ereg_replace() : usage variations ***\\n\";\n// Initialise function arguments not being substituted (if any)\n$replacement = 'string_val';\n$string = 'string_val';\n$option = '';\n// get a class\nclass classA\n{\n  public function __toString() {\n    return \"UTF-8\";\n  }\n}\n// heredoc string\n$heredoc = <<<EOT\nUTF-8\nEOT;\n// unexpected values to be passed to $encoding argument\n$inputs = array(\n       // int data\n/*1*/  0,\n       1,\n       12345,\n       -2345,\n       // float data\n/*5*/  10.5,\n       -10.5,\n       12.3456789000e10,\n       12.3456789000E-10,\n       .5,\n       // boolean data\n/*12*/ true,\n       false,\n       TRUE,\n       FALSE,\n       // empty data\n/*16*/ \"\",\n       '',\n       // string data\n/*18*/ \"UTF-8\",\n       'UTF-8',\n       $heredoc,\n       // object data\n/*21*/ new classA(),\n);\n// loop through each element of the array for pattern\n$iterator = 1;\nforeach($inputs as $input) {\n      echo \"\\n-- Iteration $iterator --\\n\";\n      var_dump( mb_ereg_replace($input, $replacement, $string, $option) );\n      $iterator++;\n};\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
