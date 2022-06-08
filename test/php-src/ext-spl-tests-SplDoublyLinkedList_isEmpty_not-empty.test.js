// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplDoublyLinkedList_isEmpty_not-empty.phpt
  it("Check that SplDoublyLinkedList->isEmpty() correctly returns true for a non-empty list.", function () {
    expect(parser.parseCode("<?php\n    // Create a new Doubly Linked List\n    $dll = new SplDoublyLinkedList();\n    // Add some items to the list\n    $dll->push(1);\n    $dll->push(2);\n    $dll->push(3);\n    //var_dump($dll);\n    var_dump($dll->isEmpty());\n?>")).toMatchSnapshot();
  });
});
