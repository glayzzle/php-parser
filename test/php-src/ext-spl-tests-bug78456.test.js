// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug78456.phpt
  it("Bug #78456: Segfault when serializing SplDoublyLinkedList", function () {
    expect(parser.parseCode("<?php\n$dllist = new SplDoublyLinkedList();\n$dllist->push(new stdClass);\nvar_dump($s = serialize($dllist));\nvar_dump(unserialize($s));\n?>")).toMatchSnapshot();
  });
});
