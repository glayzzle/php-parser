// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/phpdbg/tests/bug76801.phpt
  it("include()ing files should not raise \"too many open files\" error", function () {
    expect(parser.parseCode("<?php\nfor ($i = 0; $i < 25000; ++$i) {\n    include __DIR__.'/empty.inc';\n}\n")).toMatchSnapshot();
  });
});
