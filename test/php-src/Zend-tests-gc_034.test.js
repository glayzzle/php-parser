// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/gc_034.phpt
  it("GC 034: GC in request shutdown and resource list destroy", function () {
    expect(parser.parseCode("<?php\n/* run with valgrind */\n$a = array(fopen(__FILE__, 'r'));\n$a[] = &$a;\n?>\n==DONE==")).toMatchSnapshot();
  });
});
