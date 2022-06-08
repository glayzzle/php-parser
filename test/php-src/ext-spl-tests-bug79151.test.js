// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug79151.phpt
  it("Bug #79151: heap use after free caused by spl_dllist_it_helper_move_forward", function () {
    expect(parser.parseCode("<?php\n$a = new SplDoublyLinkedList();\n$a->setIteratorMode(SplDoublyLinkedList::IT_MODE_LIFO | SplDoublyLinkedList::IT_MODE_DELETE);\n$a->push(1);\n$a->rewind();\n$a->unshift(2);\nvar_dump($a->pop());\nvar_dump($a->next());\n$a = new SplDoublyLinkedList();\n$a->setIteratorMode(SplDoublyLinkedList::IT_MODE_FIFO | SplDoublyLinkedList::IT_MODE_DELETE);\n$a->unshift(1);\n$a->rewind();\n$a->push(2);\nvar_dump($a->shift());\nvar_dump($a->next());\n?>")).toMatchSnapshot();
  });
});
