// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplDoublyLinkedList_debug-info.phpt
  it("Check that SplDoublyLinkedList returns debug info when print_r is used.", function () {
    expect(parser.parseCode("<?php\n    // Create a new Doubly Linked List\n    $dll = new SplDoublyLinkedList();\n    // Add some items to the list\n    $dll->push(1);\n    $dll->push(2);\n    $dll->push(3);\n    // Check the debug info\n    print_r($dll);\n?>")).toMatchSnapshot();
  });
});
