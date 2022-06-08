// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplPriorityQueue_setExtractFlags_zero.phpt
  it("Setting SplPriorityQueue extract flags to zero generates an exception", function () {
    expect(parser.parseCode("<?php\n$queue = new SplPriorityQueue();\n$queue->setExtractFlags(0);\n?>")).toMatchSnapshot();
  });
});
