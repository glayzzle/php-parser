// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplDoublyLinkedList_current_empty.phpt
  it("Run current() function on an empty SplDoublyLinkedList.", function () {
    expect(parser.parseCode("<?php\n$list = new SplDoublyLinkedList();\nvar_dump($list->current());\n?>")).toMatchSnapshot();
  });
});
