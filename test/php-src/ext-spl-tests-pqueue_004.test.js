// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/pqueue_004.phpt
  it("SPL: SplPriorityQueue: var_dump", function () {
    expect(parser.parseCode("<?php\n$pq = new SplPriorityQueue();\n$pq->insert(\"a\", 0);\n$pq->insert(\"b\", 1);\n$pq->insert(\"c\", 5);\n$pq->insert(\"d\", -2);\nvar_dump($pq);\n?>")).toMatchSnapshot();
  });
});
