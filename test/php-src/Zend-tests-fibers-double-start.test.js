// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/double-start.phpt
  it("Start on already running fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    Fiber::suspend();\n});\n$fiber->start();\n$fiber->start();\n?>")).toMatchSnapshot();
  });
});
