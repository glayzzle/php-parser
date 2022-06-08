// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug46088.phpt
  it("Bug #46088 (RegexIterator::accept - segfault)", function () {
    expect(parser.parseCode("<?php\n$x = new RegexIterator(new ArrayIterator(range(1, 10)), '/\\d/');\nvar_dump($x->accept());\n?>")).toMatchSnapshot();
  });
});
