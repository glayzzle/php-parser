// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/fiber-status.phpt
  it("Fiber status methods", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    $fiber = Fiber::getCurrent();\n    echo \"\\nWithin Fiber:\\n\";\n    var_dump($fiber->isStarted());\n    var_dump($fiber->isRunning());\n    var_dump($fiber->isSuspended());\n    var_dump($fiber->isTerminated());\n    $nested = new Fiber(function () use ($fiber): void {\n        echo \"\\nWithin Nested Fiber:\\n\";\n        var_dump($fiber->isStarted());\n        var_dump($fiber->isRunning());\n        var_dump($fiber->isSuspended());\n        var_dump($fiber->isTerminated());\n        Fiber::suspend();\n    });\n    $nested->start();\n    Fiber::suspend();\n});\necho \"\\nBefore Start:\\n\";\nvar_dump($fiber->isStarted());\nvar_dump($fiber->isRunning());\nvar_dump($fiber->isSuspended());\nvar_dump($fiber->isTerminated());\n$fiber->start();\necho \"\\nAfter Start:\\n\";\nvar_dump($fiber->isStarted());\nvar_dump($fiber->isRunning());\nvar_dump($fiber->isSuspended());\nvar_dump($fiber->isTerminated());\n$fiber->resume();\necho \"\\nAfter Resume:\\n\";\nvar_dump($fiber->isStarted());\nvar_dump($fiber->isRunning());\nvar_dump($fiber->isSuspended());\nvar_dump($fiber->isTerminated());\n?>")).toMatchSnapshot();
  });
});
