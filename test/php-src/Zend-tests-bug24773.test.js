// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug24773.phpt
  it("Bug #24773 (unset() of integers treated as arrays causes a crash)", function () {
    expect(parser.parseCode("<?php\n    $array = 'test';\n    unset($array[\"lvl1\"][\"lvl2\"][\"b\"]);\n?>")).toMatchSnapshot();
  });
});
