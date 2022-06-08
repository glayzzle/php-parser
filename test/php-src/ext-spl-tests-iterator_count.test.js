// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_count.phpt
  it("SPL: iterator_count() exceptions test", function () {
    expect(parser.parseCode("<?php\n$array=array('a','b');\n$iterator = new ArrayIterator($array);\niterator_count('1');\n?>")).toMatchSnapshot();
  });
});
