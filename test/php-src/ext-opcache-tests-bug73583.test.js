// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug73583.phpt
  it("Bug #73583 (Segfaults when conditionally declared class and function have the same name)", function () {
    expect(parser.parseCode("<?php\nif (true) {\n    class A { }\n    function A() { }\n    function A() { }\n}\n?>")).toMatchSnapshot();
  });
});
