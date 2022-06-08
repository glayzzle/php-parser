// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_035.phpt
  it("SPL: ArrayIterator and values assigned by reference", function () {
    expect(parser.parseCode("<?php\n$tmp = 1;\n$a = new ArrayIterator();\n$a[] = $tmp;\n$a[] = &$tmp;\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
