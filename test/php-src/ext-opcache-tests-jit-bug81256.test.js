// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bug81256.phpt
  it("Bug #81256: Assertion `zv != ((void *)0)' failed for \"preload\" with JIT", function () {
    expect(parser.parseCode("<?php\nfoo();\n?>")).toMatchSnapshot();
  });
});
