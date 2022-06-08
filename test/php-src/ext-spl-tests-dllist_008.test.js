// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/dllist_008.phpt
  it("SPL: SplDoublyLinkedList with overridden count()", function () {
    expect(parser.parseCode("<?php\n$obj = new SplDoublyLinkedList();\n$obj[] = 1;\n$obj[] = 2;\nvar_dump(count($obj));\nclass SplDoublyLinkedList2 extends SplDoublyLinkedList{\n    public function count(): int {\n        return -parent::count();\n    }\n}\n$obj = new SplDoublyLinkedList2();\n$obj[] = 1;\n$obj[] = 2;\nvar_dump(count($obj));\n?>")).toMatchSnapshot();
  });
});
