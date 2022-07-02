// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug55705.phpt
  it("Bug #55705 (Omitting a callable typehinted argument causes a segfault)", function () {
    expect(parser.parseCode("<?php\nfunction f(callable $c) {}\nf();\n?>")).toMatchSnapshot();
  });
});
