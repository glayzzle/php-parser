// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_iterator_recursive_getiterator_error.phpt
  it("SPL: IteratorIterator foreach by reference failure", function () {
    expect(parser.parseCode("<?php\n$i = new ArrayIterator(array(1,1,1,1,1));\n$iii = new IteratorIterator($i);\np($iii);\nfunction p ($i) {\n  foreach ($i as &$value) {}\n}\n?>")).toMatchSnapshot();
  });
});
