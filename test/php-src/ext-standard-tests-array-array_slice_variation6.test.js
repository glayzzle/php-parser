// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_slice_variation6.phpt
  it("Test array_slice() function : usage variations - pass different int values as $length arg", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass different integer values as $length argument to array_slice() to test behaviour\n */\necho \"*** Testing array_slice() : usage variations ***\\n\";\n$input = array ('one' => 1, 2 => 'two', 'three', 9 => 'nine', 'ten' => 10);\n$offset = 1;\nfor ($i = -6; $i <= 6; $i++) {\n    echo \"\\n-- \\$length is $i --\\n\";\n    var_dump(array_slice($input, $offset, $i));\n}\necho \"\\n-- \\$length is maximum integer value --\\n\";\nvar_dump(array_slice($input, $offset, PHP_INT_MAX));\necho \"\\n-- \\$length is minimum integer value --\\n\";\nvar_dump(array_slice($input, $offset, -PHP_INT_MAX));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
