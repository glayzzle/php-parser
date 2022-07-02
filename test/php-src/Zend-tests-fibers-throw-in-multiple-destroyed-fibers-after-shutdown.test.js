// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/throw-in-multiple-destroyed-fibers-after-shutdown.phpt
  it("Throw in multiple destroyed fibers after shutdown", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    $fiber1 = new Fiber(function (): void {\n        try {\n            Fiber::suspend();\n        } finally {\n            throw new Exception('test1');\n        }\n    });\n    $fiber1->start();\n    $fiber2 = new Fiber(function (): void {\n        try {\n            Fiber::suspend();\n        } finally {\n            throw new Exception('test2');\n        }\n    });\n    $fiber2->start();\n    Fiber::suspend();\n});\n$fiber->start();\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
