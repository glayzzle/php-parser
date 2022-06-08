// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/next_variation2.phpt
  it("Test next() function : usage variation - Mulit-dimensional arrays", function () {
    expect(parser.parseCode("<?php\n/*\n * Test next() when passed:\n * 1. a two-dimensional array\n * 2. a sub-array\n * as $array_arg argument.\n */\necho \"*** Testing next() : usage variations ***\\n\";\n$array_arg = array ('a' => 'z', array(9, 8, 7));\necho \"\\n-- Pass a two-dimensional array as \\$array_arg --\\n\";\nvar_dump(next($array_arg));\nvar_dump(next($array_arg));\necho \"\\n-- Pass a sub-array as \\$array_arg --\\n\";\nvar_dump(next($array_arg[0]));\n?>")).toMatchSnapshot();
  });
});
