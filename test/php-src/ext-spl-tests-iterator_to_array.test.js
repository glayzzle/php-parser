// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_to_array.phpt
  it("SPL: iterator_to_array() exceptions test", function () {
    expect(parser.parseCode("<?php\n$array=array('a','b');\n$iterator = new ArrayIterator($array);\niterator_to_array('test','test');\n?>")).toMatchSnapshot();
  });
});
