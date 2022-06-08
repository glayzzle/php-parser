// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplDoublyLinkedList_current.phpt
  it("SplDoublyLinkedList getIteratorMode", function () {
    expect(parser.parseCode("<?php\n$list = new SplDoublyLinkedList();\nvar_dump($list->current());\n?>")).toMatchSnapshot();
  });
});
