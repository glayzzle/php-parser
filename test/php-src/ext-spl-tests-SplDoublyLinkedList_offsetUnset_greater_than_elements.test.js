// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplDoublyLinkedList_offsetUnset_greater_than_elements.phpt
  it("Doubly Linked List - offsetUnset > number elements", function () {
    expect(parser.parseCode("<?php\n$ll = new SplDoublyLinkedList();\n$ll->push('1');\n$ll->push('2');\n$ll->push('3');\ntry {\n$ll->offsetUnset($ll->count() + 1);\nvar_dump($ll);\n} catch(Exception $e) {\necho $e->getMessage();\n}\n?>")).toMatchSnapshot();
  });
});
