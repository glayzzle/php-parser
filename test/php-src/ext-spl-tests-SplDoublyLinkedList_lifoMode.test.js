// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplDoublyLinkedList_lifoMode.phpt
  it("Check that SplDoublyLinkedList can traverse backwards", function () {
    expect(parser.parseCode("<?php\n$list = new SplDoublyLinkedList();\n$list->push('o');\n$list->push('o');\n$list->push('f');\n$list->setIteratorMode(SplDoublyLinkedList::IT_MODE_LIFO);\n$list->rewind();\nwhile ($tmp = $list->current()) {\n  echo $tmp;\n  $list->next();\n}\n?>")).toMatchSnapshot();
  });
});
