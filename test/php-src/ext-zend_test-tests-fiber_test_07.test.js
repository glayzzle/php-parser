// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/fiber_test_07.phpt
  it("Symmetric coroutine does not leak prior context", function () {
    expect(parser.parseCode("<?php\n$fiber = new _ZendTestFiber(function (): int {\n    return 1;\n});\n$fiber->pipeTo(function (int $result): void {\n    var_dump($result);\n});\nvar_dump($fiber->start());\n?>")).toMatchSnapshot();
  });
});
