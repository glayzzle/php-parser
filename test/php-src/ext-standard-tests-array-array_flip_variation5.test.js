// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_flip_variation5.phpt
  it("Test array_flip() function : usage variations - 'input' argument with repeatitive keys and values", function () {
    expect(parser.parseCode("<?php\n/*\n* Using different types of repeatitive keys as well as values for 'input' array\n*/\necho \"*** Testing array_flip() : 'input' array with repeatitive keys/values ***\\n\";\n// array with numeric key repeatition\n$input = array(1 => 'value', 2 => 'VALUE', 1 => \"VaLuE\", 3 => 4, 3 => 5);\nvar_dump( array_flip($input) );\n// array with string key repeatition\n$input = array(\"key\" => 1, \"two\" => 'TWO', 'three' => 3, 'key' => \"FOUR\");\nvar_dump( array_flip($input) );\n// array with bool key repeatition\n$input = array(true => 1, false => 0, TRUE => -1);\nvar_dump( array_flip($input) );\n// array with null key repeatition\n$input = array(null => \"Hello\", NULL => 0);\nvar_dump( array_flip($input) );\n// array with numeric value repeatition\n$input = array('one' => 1, 'two' => 2, 3 => 1, \"index\" => 1);\nvar_dump( array_flip($input) );\n//array with string value repeatition\n$input = array('key1' => \"value1\", \"key2\" => '2', 'key3' => 'value1');\nvar_dump( array_flip($input) );\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
