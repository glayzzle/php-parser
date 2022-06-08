// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/recursiveiteratoriterator_getsubiterator_variation_002.phpt
  it("SPL: RecursiveIteratorIterator::getSubIterator() returns NULL if there's no current element", function () {
    expect(parser.parseCode("<?php\n$sample_array = array(1);\n$iterator = new RecursiveIteratorIterator(new RecursiveArrayIterator($sample_array));\n$iterator->next();\nvar_dump(is_null($iterator->getSubIterator()));\n$iterator->next();\nvar_dump(is_null($iterator->getSubIterator()));\n?>")).toMatchSnapshot();
  });
});
