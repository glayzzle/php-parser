// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/fiber-in-shutdown-function.phpt
  it("Fiber in shutdown function", function () {
    expect(parser.parseCode("<?php\nregister_shutdown_function(function (): void {\n    $fiber = new Fiber(function (): int {\n        Fiber::suspend(1);\n        Fiber::suspend(2);\n        return 3;\n    });\n    var_dump($fiber->start());\n    var_dump($fiber->resume());\n    var_dump($fiber->resume());\n    var_dump($fiber->getReturn());\n});\n?>")).toMatchSnapshot();
  });
});
