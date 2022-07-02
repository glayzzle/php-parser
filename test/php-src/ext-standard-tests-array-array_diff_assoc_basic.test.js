// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_diff_assoc_basic.phpt
  it("Test array_diff_assoc() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of array_diff_assoc\n */\necho \"*** Testing array_diff_assoc() : basic functionality ***\\n\";\n$array_default_key = array('one',       2,            'three', '4');\n$array_numeric_key = array(1 => 'one',  2=> 'two',    3 => 4);\n$array_string_key  = array('one' => 1, 'two' => '2', '3' => 'three');\necho \"-- Compare Default keys to numeric keys --\\n\";\nvar_dump(array_diff_assoc($array_default_key, $array_numeric_key));\nvar_dump(array_diff_assoc($array_numeric_key, $array_default_key));\necho \"\\n-- Compare Default keys to string keys --\\n\";\nvar_dump(array_diff_assoc($array_default_key, $array_numeric_key));\nvar_dump(array_diff_assoc($array_numeric_key, $array_default_key));\necho \"\\n-- Compare numeric keys to string keys --\\n\";\nvar_dump(array_diff_assoc($array_numeric_key, $array_string_key));\nvar_dump(array_diff_assoc($array_string_key, $array_numeric_key));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
