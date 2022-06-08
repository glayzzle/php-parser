// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplDoublylinkedlist_offsetunset_last.phpt
  it("SPL: SplDoublyLinkedList : offsetUnset - last element", function () {
    expect(parser.parseCode("<?php\n$list = new SplDoublyLinkedList();\n$list->push('oh');\n$list->push('hai');\n$list->push('thar');\n$list->offsetUnset(2);\nvar_dump($list);\n?>")).toMatchSnapshot();
  });
});
