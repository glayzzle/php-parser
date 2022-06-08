// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug67538.phpt
  it("Bug #67538 (SPL Iterators use-after-free)", function () {
    expect(parser.parseCode("<?php\n$list = new SplDoublyLinkedList();\n$list->push('a');\n$list->push('b');\n$list->rewind();\n$list->offsetUnset(0);\n$list->push('b');\n$list->offsetUnset(0);\n$list->next();\necho \"okey\";\n?>")).toMatchSnapshot();
  });
});
