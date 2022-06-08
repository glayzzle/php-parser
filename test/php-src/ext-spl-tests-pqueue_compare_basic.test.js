// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/pqueue_compare_basic.phpt
  it("SPL: SplPriorityQueue: test compare", function () {
    expect(parser.parseCode("<?php\n$h = new SplPriorityQueue();\nvar_dump($h->compare(4, 5) < 0);\nvar_dump($h->compare(5, 5) == 0);\nvar_dump($h->compare(5, 4) > 0);\n?>")).toMatchSnapshot();
  });
});
