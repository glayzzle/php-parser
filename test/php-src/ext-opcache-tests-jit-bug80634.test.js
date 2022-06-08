// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bug80634.phpt
  it("Bug #80634 (write_property handler of internal classes is skipped on preloaded JITted code)", function () {
    expect(parser.parseCode("<?php\n$v = new SomeClass(5);\n?>")).toMatchSnapshot();
  });
});
