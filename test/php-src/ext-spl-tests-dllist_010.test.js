// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/dllist_010.phpt
  it("SPL: DoublyLinkedList: prev", function () {
    expect(parser.parseCode("<?php\n$dll = new SplDoublyLinkedList();\n$dll->push(1);\n$dll->push(2);\n$dll->push(3);\n$dll->push(4);\n$dll->rewind();\n$dll->prev();\nvar_dump($dll->current());\n$dll->rewind();\nvar_dump($dll->current());\n$dll->next();\nvar_dump($dll->current());\n$dll->next();\n$dll->next();\nvar_dump($dll->current());\n$dll->prev();\nvar_dump($dll->current());\n?>")).toMatchSnapshot();
  });
});
