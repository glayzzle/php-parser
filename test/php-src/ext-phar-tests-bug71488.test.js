// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug71488.phpt
  it("Phar: bug #71488: Stack overflow when decompressing tar archives", function () {
    expect(parser.parseCode("<?php\n$p = new PharData(__DIR__.\"/bug71488.tar\");\n$newp = $p->decompress(\"test\");\n?>\nDONE")).toMatchSnapshot();
  });
});
