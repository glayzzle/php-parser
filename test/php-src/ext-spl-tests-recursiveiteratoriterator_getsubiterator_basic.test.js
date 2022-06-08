// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/recursiveiteratoriterator_getsubiterator_basic.phpt
  it("SPL: RecursiveIteratorIterator::getSubIterator() returns iterator passed in constructor", function () {
    expect(parser.parseCode("<?php\n$sample_array = array(1, 2, array(3, 4));\n$sub_iterator = new RecursiveArrayIterator($sample_array);\n$not_sub_iterator = new RecursiveArrayIterator($sample_array);\n$iterator = new RecursiveIteratorIterator($sub_iterator);\nvar_dump($iterator->getSubIterator() === $sub_iterator);\nvar_dump($iterator->getSubIterator() === $not_sub_iterator);\n?>")).toMatchSnapshot();
  });
});
