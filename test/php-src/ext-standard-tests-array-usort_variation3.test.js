// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/usort_variation3.phpt
  it("Test usort() function : usage variations - diff. array values", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass an array with different data types as keys to usort() to test how it is re-ordered\n */\necho \"*** Testing usort() : usage variation ***\\n\";\nfunction cmp_function($value1, $value2)\n{\n  if($value1 == $value2) {\n    return 0;\n  }\n  else if($value1 > $value2) {\n    return -1;\n  }\n  else {\n    return 1;\n  }\n}\n// different heredoc strings\n// single line heredoc string\n$simple_heredoc = <<<EOT2\nsimple\nEOT2;\n// multiline heredoc string\n$multiline_heredoc = <<<EOT3\nmultiline heredoc with 123\nand speci@! ch@r..\\ncheck\\talso\nEOT3;\n$array_arg = array(\n  // numeric keys\n  -2 => 9,\n  8 => 8,\n  012 => 7,\n  0x34 => 6,\n  // string keys\n  'key' => 5,  //single quoted key\n  \"two\" => 4,  //double quoted key\n  \" \" => 0,  // space as key\n  // bool keys\n  TRUE => 100,\n  FALSE => 25,\n  // null keys\n  NULL => 35,\n  // binary key\n  \"a\".chr(0).\"b\" => 45,\n  b\"binary\" => 30,\n  //heredoc keys\n  $simple_heredoc => 75,\n  $multiline_heredoc => 200,\n  // default key\n  1,\n);\nvar_dump( usort($array_arg, 'cmp_function') );\necho \"\\n-- Sorted array after usort() function call --\\n\";\nvar_dump($array_arg);\n?>")).toMatchSnapshot();
  });
});
