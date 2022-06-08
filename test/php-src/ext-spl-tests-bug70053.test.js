// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug70053.phpt
  it("SPL: ArrayObject", function () {
    expect(parser.parseCode("<?php\necho \"-- Two empty iterators attached with infos that are different but same array key --\\n\";\n$mit = new MultipleIterator(MultipleIterator::MIT_KEYS_ASSOC);\n$mit ->attachIterator(new EmptyIterator(), \"2\");\n$mit ->attachIterator(new EmptyIterator(), 2);\nvar_dump($mit->countIterators());\n$mit->rewind();\nvar_dump($mit->current());\n?>")).toMatchSnapshot();
  });
});
