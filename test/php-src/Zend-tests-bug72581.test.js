// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug72581.phpt
  it("Bug #72581 (previous property undefined in Exception after deserialization)", function () {
    expect(parser.parseCode("<?php\n$e = new Exception('aaa', 200);\n$a = serialize($e);\n$b = unserialize($a);\nvar_dump($b->__toString());\n?>")).toMatchSnapshot();
  });
});
