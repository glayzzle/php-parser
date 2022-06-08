// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/recursiveiteratoriterator_getsubiterator_variation.phpt
  it("SPL: RecursiveIteratorIterator::getSubIterator() returns different iterators depending on the current element", function () {
    expect(parser.parseCode("<?php\n$sample_array = array(1, 2, array(3, 4));\n$iterator = new RecursiveIteratorIterator(new RecursiveArrayIterator($sample_array));\n$iterator->next();\n$iterator->next();\nvar_dump(get_class($iterator->getSubIterator()));\nvar_dump($iterator->getSubIterator()->getArrayCopy());\n$iterator->next();\nvar_dump(get_class($iterator->getSubIterator()));\nvar_dump($iterator->getSubIterator()->getArrayCopy());\n?>")).toMatchSnapshot();
  });
});
