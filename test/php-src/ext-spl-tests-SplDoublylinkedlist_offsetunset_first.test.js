// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplDoublylinkedlist_offsetunset_first.phpt
  it("SPL: SplDoublyLinkedList : offsetUnset - first element", function () {
    expect(parser.parseCode("<?php\n$list = new SplDoublyLinkedList();\n$list->push('oh');\n$list->push('hai');\n$list->push('thar');\n$list->offsetUnset(0);\nvar_dump($list);\n?>")).toMatchSnapshot();
  });
});
