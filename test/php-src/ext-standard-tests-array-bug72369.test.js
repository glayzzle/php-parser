// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug72369.phpt
  it("Bug #72369 (array_merge() produces references in PHP7)", function () {
    expect(parser.parseCode("<?php\n$x = 'xxx';\n$d = ['test' => &$x];\nunset($x);\n$a = ['test' => 'yyy'];\n$a = array_merge($a, $d);\ndebug_zval_dump($a);\n?>")).toMatchSnapshot();
  });
});
