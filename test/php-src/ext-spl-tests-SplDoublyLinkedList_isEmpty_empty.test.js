// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplDoublyLinkedList_isEmpty_empty.phpt
  it("Check that SplDoublyLinkedList->isEmpty() correctly returns true for an empty list.", function () {
    expect(parser.parseCode("<?php\n    // Create a new Doubly Linked List\n    $dll = new SplDoublyLinkedList();\n    var_dump($dll->isEmpty());\n?>")).toMatchSnapshot();
  });
});
