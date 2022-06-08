// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/pqueue_current_error.phpt
  it("SPL: SplPriorityQueue current on empty queue should give null", function () {
    expect(parser.parseCode("<?php\n$h = new SplPriorityQueue();\nvar_dump($h->current());\n?>")).toMatchSnapshot();
  });
});
