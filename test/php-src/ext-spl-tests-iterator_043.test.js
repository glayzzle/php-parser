// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/iterator_043.phpt
  it("SPL: RecursiveCachingIterator and uninitialized getChildren()", function () {
    expect(parser.parseCode("<?php\n$it = new RecursiveCachingIterator(new RecursiveArrayIterator(array(1,2)));\nvar_dump($it->getChildren());\n$it->rewind();\nvar_dump($it->getChildren());\n?>")).toMatchSnapshot();
  });
});
