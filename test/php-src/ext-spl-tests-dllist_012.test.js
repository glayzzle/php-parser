// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/dllist_012.phpt
  it("SPL: DoublyLinkedList: recursive var_dump", function () {
    expect(parser.parseCode("<?php\n$a = new SplDoublyLinkedList;\n$a[] = $a;\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
