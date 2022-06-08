// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplDoublyLinkedList_serialization.phpt
  it("Check Serialization/unserialization", function () {
    expect(parser.parseCode("<?php\n$q = new SplQueue();\n$q->enqueue(\"a\");\n$q->enqueue(\"b\");\nvar_dump($q, $ss = serialize($q), unserialize($ss));\n$s = new SplStack();\n$s->push(\"a\");\n$s->push(\"b\");\nvar_dump($s, $ss = serialize($s), unserialize($ss));\n?>\n==END==")).toMatchSnapshot();
  });
});
