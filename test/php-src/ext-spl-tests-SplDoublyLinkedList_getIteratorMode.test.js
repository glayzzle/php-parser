// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplDoublyLinkedList_getIteratorMode.phpt
  it("SplDoublyLinkedList getIteratorMode", function () {
    expect(parser.parseCode("<?php\n$list = new SplDoublyLinkedList();\n$list->setIteratorMode(SplDoublyLinkedList::IT_MODE_FIFO | SplDoublyLinkedList::IT_MODE_KEEP);\necho $list->getIteratorMode(), \"\\n\";\n$list->setIteratorMode(SplDoublyLinkedList::IT_MODE_LIFO);\necho $list->getIteratorMode(), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
