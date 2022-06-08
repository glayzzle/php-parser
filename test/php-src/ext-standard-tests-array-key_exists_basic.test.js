// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/key_exists_basic.phpt
  it("Test function key_exists() by calling it with its expected arguments", function () {
    expect(parser.parseCode("<?php\necho \"*** test key_exists() by calling it with its expected arguments ***\\n\";\n$a = array('bar' => 1);\nvar_dump(key_exists('bar', $a));\nvar_dump(key_exists('foo', $a));\n?>")).toMatchSnapshot();
  });
});
