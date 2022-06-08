// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug69788.phpt
  it("Bug #69788: Malformed script causes Uncaught Error in php-cgi, valgrind SIGILL", function () {
    expect(parser.parseCode("<?php [t.[]]; ?>")).toMatchSnapshot();
  });
});
