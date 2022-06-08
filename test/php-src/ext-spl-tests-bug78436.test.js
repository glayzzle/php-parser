// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug78436.phpt
  it("Bug #78436: Missing addref in SplPriorityQueue EXTR_BOTH mode", function () {
    expect(parser.parseCode("<?php\n$pq = new SplPriorityQueue();\n$pq->insert(new stdClass, 1);\nvar_dump($pq);\nvar_dump($pq);\n?>")).toMatchSnapshot();
  });
});
