// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/str_offset_002.phpt
  it("string offset 002", function () {
    expect(parser.parseCode("<?php\n$a = \"aaa\";\n$x = array(&$a[1]);\n?>")).toMatchSnapshot();
  });
});
