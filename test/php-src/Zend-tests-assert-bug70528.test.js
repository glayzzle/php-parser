// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assert/bug70528.phpt
  it("Bug #70528 (assert() with instanceof adds apostrophes around class name)", function () {
    expect(parser.parseCode("<?php\nnamespace Foo;\nclass Bar {}\n$bar = \"Bar\";\nassert(new \\stdClass instanceof $bar);\nassert(new \\stdClass instanceof Bar);\nassert(new \\stdClass instanceof \\Foo\\Bar);\n?>")).toMatchSnapshot();
  });
});
