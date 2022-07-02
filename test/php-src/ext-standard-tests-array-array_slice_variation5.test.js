// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_slice_variation5.phpt
  it("Test array_slice() function : usage variations - Pass different integers as $offset argument", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass different integers as $offset argument to test how array_slice() behaves\n */\necho \"*** Testing array_slice() : usage variations ***\\n\";\n$input = array ('one' => 1, 2 => 'two', 'three', 9 => 'nine', 'ten' => 10);\nfor ($i = -7; $i <= 7; $i++) {\n    echo \"\\n-- \\$offset is $i --\\n\";\n    var_dump(array_slice($input, $i));\n}\necho \"\\n-- \\$offset is maximum integer value --\\n\";\nvar_dump(array_slice($input, PHP_INT_MAX));\necho \"\\n-- \\$offset is minimum integer value --\\n\";\nvar_dump(array_slice($input, -PHP_INT_MAX));\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
