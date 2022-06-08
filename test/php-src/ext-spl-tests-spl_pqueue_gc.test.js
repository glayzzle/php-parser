// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_pqueue_gc.phpt
  it("Bug #78436: Broken GC for SplPriorityQueue", function () {
    expect(parser.parseCode("<?php\n$pqueue = new SplPriorityQueue();\n$pqueue->insert($pqueue, 1);\n$pqueue2 = new SplPriorityQueue();\n$pqueue2->insert(1, $pqueue);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
