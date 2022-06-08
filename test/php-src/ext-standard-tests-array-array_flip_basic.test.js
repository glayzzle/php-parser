// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_flip_basic.phpt
  it("Test array_flip() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_flip() : basic functionality ***\\n\";\n// array with default keys - numeric values\n$input = array(1, 2);\nvar_dump( array_flip($input) );\n// array with default keys - string values\n$input = array('value1', \"value2\");\nvar_dump( array_flip($input) );\n// associative arrays - key as string\n$input = array('key1' => 1, \"key2\" => 2);\nvar_dump( array_flip($input) );\n// associative arrays - key as numeric\n$input = array(1 => 'one', 2 => \"two\");\nvar_dump( array_flip($input) );\n// combination of associative and non-associative array\n$input = array(1 => 'one','two', 3 => 'three', 4, \"five\" => 5);\nvar_dump( array_flip($input) );\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
