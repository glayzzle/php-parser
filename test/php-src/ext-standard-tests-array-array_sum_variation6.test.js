// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_sum_variation6.phpt
  it("Test array_sum() function : usage variations - associative array", function () {
    expect(parser.parseCode("<?php\n/*\n* Testing array_sum() with associative array as 'input' argument\n*/\necho \"*** Testing array_sum() : with associative array ***\\n\";\n// array with numeric keys\n$input = array(0 => 1, 1 => 10, 2 => 0, 3 => -2, 4 => 23.56);\necho \"-- with numeric keys --\\n\";\nvar_dump( array_sum($input) );\n// array with string keys\n$input = array('a' => 20, \"b\" => 50, 'c' => 0, 'd' => -30, \"e\" => 100);\necho \"-- with string keys --\\n\";\nvar_dump( array_sum($input) );\necho \"Done\"\n?>")).toMatchSnapshot();
  });
});
