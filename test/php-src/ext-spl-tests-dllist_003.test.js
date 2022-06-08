// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/dllist_003.phpt
  it("SPL: DoublyLinkedList: iterator modes", function () {
    expect(parser.parseCode("<?php\n$dll = new SplDoublyLinkedList();\n$dll->push(2);\n$dll->push(3);\n$dll->push(4);\n$dll->setIteratorMode(SplDoublyLinkedList::IT_MODE_LIFO);\nforeach ($dll as $k => $v) {\n    echo \"$k=>$v\\n\";\n}\n$dll->setIteratorMode(SplDoublyLinkedList::IT_MODE_FIFO);\nforeach ($dll as $k => $v) {\n    echo \"$k=>$v\\n\";\n}\n$dll->setIteratorMode(SplDoublyLinkedList::IT_MODE_FIFO | SplDoublyLinkedList::IT_MODE_DELETE);\nvar_dump($dll->count());\nforeach ($dll as $k => $v) {\n    echo \"$k=>$v\\n\";\n}\nvar_dump($dll->count());\n?>")).toMatchSnapshot();
  });
});
