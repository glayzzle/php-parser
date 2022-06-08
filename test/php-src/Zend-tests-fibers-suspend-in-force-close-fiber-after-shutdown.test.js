// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/suspend-in-force-close-fiber-after-shutdown.phpt
  it("Suspend in force-closed fiber after shutdown", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    try {\n        Fiber::suspend();\n    } finally {\n        Fiber::suspend();\n    }\n});\n$fiber->start();\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
