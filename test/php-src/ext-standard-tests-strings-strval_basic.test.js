// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/strval_basic.phpt
  it("Test strval() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing strval() : basic variations ***\\n\";\nerror_reporting(E_ALL ^ E_NOTICE);\n$simple_heredoc =<<<EOT\nSimple HEREDOC string\nEOT;\n//array of values to iterate over\n$values = array(\n            // Simple strings\n/*1*/\t\t\"Hello World\",\n            'Hello World',\n            // String with control chars\n/*3*/\t\t\"String\\nwith\\ncontrol\\ncharacters\\r\\n\",\n            // String with quotes\n/*4*/\t\t\"String with \\\"quotes\\\"\",\n            //Numeric String\n/*5*/\t\t\"123456\",\n            // Hexadecimal string\n/*6*/\t\t\"0xABC\",\n            //Heredoc String\n/*7*/\t\t$simple_heredoc\n);\n// loop through each element of the array for strval\n$iterator = 1;\nforeach($values as $value) {\n      echo \"\\n-- Iteration $iterator --\\n\";\n      var_dump( strval($value) );\n      $iterator++;\n};\n?>")).toMatchSnapshot();
  });
});
