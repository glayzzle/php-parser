// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/key_exists_variation1.phpt
  it("Test function key_exists() by calling it with its expected arguments", function () {
    expect(parser.parseCode("<?php\necho \"*** test key_exists() by calling it with its expected arguments ***\\n\";\n$a = array('bar' => 1, 'foo' => array('bar' => 2, 'baz' => 3));\nvar_dump(key_exists('baz', $a));\nvar_dump(key_exists('baz', $a['foo']));\n?>")).toMatchSnapshot();
  });
});
