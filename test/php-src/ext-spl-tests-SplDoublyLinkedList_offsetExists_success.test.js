// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplDoublyLinkedList_offsetExists_success.phpt
  it("SPL SplDoublyLinkedList offsetExists returns correct values", function () {
    expect(parser.parseCode("<?php\n$list = new SplDoublyLinkedList();\n// Push two values onto the list\n$list->push('abc');\n$list->push('def');\n// Validate that we can see the first value\nif($list->offsetExists(0) === true) {\n    echo \"PASS\\n\";\n}\n// Validate that we can see the second value\nif($list->offsetExists(1) === true) {\n    echo \"PASS\\n\";\n}\n// Check that there is no third value\nif($list->offsetExists(2) === false) {\n    echo \"PASS\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
