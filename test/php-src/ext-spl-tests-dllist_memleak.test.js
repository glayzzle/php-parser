// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/dllist_memleak.phpt
  it("SPL: DoublyLinkedList: memory leak when iterator pointer isn't at the last element", function () {
    expect(parser.parseCode("<?php\n$dll = new SplDoublyLinkedList();\n$dll->push(1);\n$dll->push(2);\n$dll->push(3);\n$dll->push(4);\n$dll->rewind();\necho $dll->current().\"\\n\";\n$dll->next();\n$dll->next();\necho $dll->current().\"\\n\";\n?>")).toMatchSnapshot();
  });
});
