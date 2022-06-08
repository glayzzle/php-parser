// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug73668.phpt
  it("Bug #73668: \"SIGFPE Arithmetic exception\" in opcache when divide by minus 1", function () {
    expect(parser.parseCode("<?php\n$a/-1;\n?>")).toMatchSnapshot();
  });
});
