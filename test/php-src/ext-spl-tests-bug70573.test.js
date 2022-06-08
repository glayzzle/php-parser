// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug70573.phpt
  it("Bug #70573 (Cloning SplPriorityQueue leads to memory leaks)", function () {
    expect(parser.parseCode("<?php\n$q1 = new SplPriorityQueue();\n$a = 1;\n$q1->insert([$a], 1);\n$q1->insert([$a], 2);\n$q2 = clone $q1;\necho \"ok\\n\";\n?>")).toMatchSnapshot();
  });
});
