// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplDoublyLinkedList_consistent_iterator_mode.phpt
  it("Iteration over SplDoublyLinkedList via 'foreach' does not change direction partway", function () {
    expect(parser.parseCode("<?php\n$list = new SplDoublyLinkedList();\n$list->push(1);\n$list->push(2);\n$list->push(3);\n/* SplDoublyLinkedList would previously check the iteration mode *each time*\n   it would advance to the next item in a 'foreach' loop\n   This meant that it could move forward, then backward, then forward if the\n   iteration mode was changed in the middle of a loop */\n$list->setIteratorMode(SplDoublyLinkedList::IT_MODE_FIFO);\nforeach ($list as $item) {\n  $list->setIteratorMode(SplDoublyLinkedList::IT_MODE_LIFO);\n  echo $item, \"\\n\";\n}\necho \"***\\n\";\n$list->setIteratorMode(SplDoublyLinkedList::IT_MODE_LIFO);\nforeach ($list as $item) {\n  $list->setIteratorMode(SplDoublyLinkedList::IT_MODE_FIFO);\n  echo $item, \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
