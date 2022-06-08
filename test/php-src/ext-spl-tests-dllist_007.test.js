// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/dllist_007.phpt
  it("SPL: DoublyLinkedList: Iterator", function () {
    expect(parser.parseCode("<?php\n$a = new SplDoublyLinkedList();\n$a->push(1);\n$a->push(2);\n$a->push(3);\n$a->rewind();\nwhile ($a->valid()) {\n    var_dump($a->current(), $a->next());\n}\n?>")).toMatchSnapshot();
  });
});
