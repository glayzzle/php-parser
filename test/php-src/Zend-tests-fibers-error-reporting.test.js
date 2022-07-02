// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/error-reporting.phpt
  it("Error reporting change reflected inside fiber", function () {
    expect(parser.parseCode("<?php\nerror_reporting(E_ALL & ~E_USER_NOTICE);\n$fiber = new Fiber(function (): void {\n    trigger_error(\"Notice A\", E_USER_NOTICE); // Should be silenced.\n    Fiber::suspend();\n    trigger_error(\"Warning A\", E_USER_WARNING);\n});\n$fiber->start();\ntrigger_error(\"Notice B\", E_USER_NOTICE); // Should be silenced.\n$fiber->resume();\ntrigger_error(\"Warning B\", E_USER_WARNING);\n?>")).toMatchSnapshot();
  });
});
