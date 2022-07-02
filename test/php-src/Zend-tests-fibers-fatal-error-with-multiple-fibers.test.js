// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/fatal-error-with-multiple-fibers.phpt
  it("Fatal error in a fiber with other active fibers", function () {
    expect(parser.parseCode("<?php\n$fiber1 = new Fiber(function (): void {\n    try {\n        \\Fiber::suspend(1);\n    } finally {\n        echo \"not executed\";\n    }\n});\n$fiber2 = new Fiber(function (): void {\n    \\Fiber::suspend(2);\n    trigger_error(\"Fatal error in fiber\", E_USER_ERROR);\n});\nvar_dump($fiber1->start());\nvar_dump($fiber2->start());\n$fiber2->resume();\n?>")).toMatchSnapshot();
  });
});
