// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug47704.phpt
  it("Bug #47704 (crashes on some \"bad\" operations with string offsets)", function () {
    expect(parser.parseCode("<?php\n$s = \"abd\";\n$s[0]->a += 1;\n?>")).toMatchSnapshot();
  });
});
