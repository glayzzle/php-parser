// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_assoc_variation4.phpt
  it("Test array_diff_assoc() function : usage variations - arrays with different data types as keys", function () {
    expect(parser.parseCode("<?php\n/*\n * Test how array_diff_assoc() compares arrays containing different data types\n * as keys\n */\necho \"\\n*** Testing array_diff_assoc() : usage variations ***\\n\";\n$array = array(1, 2, 3);\n//get an unset variable\n$unset_var = 10;\nunset ($unset_var);\n// heredoc string\n$heredoc = <<<EOT\nhello world\nEOT;\n//Different data types as keys to be passed to $arr1 argument\n$inputs = array(\n       // int data\n/*1*/\n'int' => array(\n       0 => 'zero',\n       1 => 'one',\n       12345 => 'positive',\n       -2345 => 'negative'),\n       // null data\n/*3*/\n'null' => array(\n       NULL => 'null 1',\n       null => 'null 2'),\n       // boolean data\n/*4*/\n'bool' => array(\n       true => 'boolt',\n       false => 'boolf',\n       TRUE => 'boolT',\n       FALSE => 'boolF'),\n       // empty data\n/*5*/\n'empty' => array(\n      \"\" => 'emptyd',\n      '' => 'emptys'),\n       // string data\n/*6*/\n'string' => array(\n      \"string\" => 'stringd',\n      'string' => 'strings',\n      $heredoc => 'stringh'),\n       // binary data\n/*7*/\n'binary' => array(\n      b\"binary1\" => 'binary 1',\n      (binary)\"binary2\" => 'binary 2'),\n       // undefined data\n/*8*/\n'undefined' => array(\n      @$undefined_var => 'undefined'),\n       // unset data\n/*9*/\n'unset' => array(\n      @$unset_var => 'unset'),\n);\n// loop through each element of $inputs to check the behavior of array_diff_assoc\n$iterator = 1;\nforeach($inputs as $key => $input) {\n  echo \"\\n-- Iteration $iterator --\\n\";\n  var_dump( array_diff_assoc($input, $array));\n  $iterator++;\n};\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
