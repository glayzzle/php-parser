// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug46873.phpt
  it("Bug #46873 (extract($foo) crashes if $foo['foo'] exists)", function () {
    expect(parser.parseCode("<?php\n$foo = array('foo' => 1, 'bar' => 2, 'test' => 3);\nextract($foo);\nvar_dump($foo, $bar, $test);\n?>")).toMatchSnapshot();
  });
});
