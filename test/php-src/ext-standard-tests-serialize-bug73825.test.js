// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/serialize/bug73825.phpt
  it("Bug #73825 Heap out of bounds read on unserialize in finish_nested_data()", function () {
    expect(parser.parseCode("<?php\n$obj = unserialize('O:8:\"00000000\":');\nvar_dump($obj);\n?>")).toMatchSnapshot();
  });
});
