// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/dllist_011.phpt
  it("SPL: DoublyLinkedList: prev", function () {
    expect(parser.parseCode("<?php\n$dll = new SplDoublyLinkedList();\n$dll->rewind();\n$dll->prev();\nvar_dump($dll->current());\n?>")).toMatchSnapshot();
  });
});
