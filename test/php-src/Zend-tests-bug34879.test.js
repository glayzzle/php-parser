// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug34879.phpt
  it("Bug #34879 (str_replace, array_map corrupt negative array indexes on 64-bit platforms)", function () {
    expect(parser.parseCode("<?php\nprint_r(str_replace('a', 'b', array(-1 =>-1)));\n?>")).toMatchSnapshot();
  });
});
