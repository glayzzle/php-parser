// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/recursiveiteratoriterator_getsubiterator_variation_003.phpt
  it("SPL: RecursiveIteratorIterator::getSubIterator() with explicit level parameter", function () {
    expect(parser.parseCode("<?php\n$sample_array = array(1, 2, array(3, 4));\n$iterator = new RecursiveIteratorIterator(new RecursiveArrayIterator($sample_array));\n$iterator->next();\n$iterator->next();\n$iterator->next();\nvar_dump($iterator->getSubIterator(-1));\nvar_dump($iterator->getSubIterator(0)->getArrayCopy());\nvar_dump($iterator->getSubIterator(1)->getArrayCopy());\nvar_dump($iterator->getSubIterator(2));\n?>")).toMatchSnapshot();
  });
});
