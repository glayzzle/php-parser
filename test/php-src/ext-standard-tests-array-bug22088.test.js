// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug22088.phpt
  it("Bug #22088 (array_shift() leaves next index to be +1 too much)", function () {
    expect(parser.parseCode("<?php\n$a = array('a', 'b', 'c');\n$last = array_shift ($a);\n$a[] = 'a';\nvar_dump($a);\n$a = array('a' => 1, 'b' => 2, 'c' => 3);\n$last = array_shift ($a);\n$a[] = 'a';\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
