// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_combine_basic.phpt
  it("Test array_combine() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing array_combine() : basic functionality ***\\n\";\n/* Different arrays for $keys and $values arguments */\n// array with default keys for $keys and $values arguments\n$keys_array = array(1, 2);\n$values_array = array(3,4);\nvar_dump( array_combine($keys_array, $values_array) );\n// associative arrays for $keys and $values arguments\n$keys_array = array(1 => \"a\", 2 => 'b');\n$values_array = array(3 => 'c', 4 => \"d\");\nvar_dump( array_combine($keys_array, $values_array) );\n// mixed array for $keys and $values arguments\n$keys_array = array(1, 2 => \"b\");\n$values_array = array(3 => 'c', 4);\nvar_dump( array_combine($keys_array, $values_array) );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
