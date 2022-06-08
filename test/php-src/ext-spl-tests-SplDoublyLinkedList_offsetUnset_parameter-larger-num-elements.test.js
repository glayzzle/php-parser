// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplDoublyLinkedList_offsetUnset_parameter-larger-num-elements.phpt
  it("Check that SplDoublyLinkedList->offsetUnset() returns an error message when the offset is > elements.", function () {
    expect(parser.parseCode("<?php\n    // Create a new Doubly Linked List\n    $dll = new SplDoublyLinkedList();\n    // Add some items to the list\n    $dll->push(1);\n    $dll->push(2);\n    $dll->push(3);\n    try {\n        $dll->offsetUnset(3);\n    }\n    catch (Exception $e) {\n        echo $e->getMessage() . \"\\n\";\n    }\n?>")).toMatchSnapshot();
  });
});
