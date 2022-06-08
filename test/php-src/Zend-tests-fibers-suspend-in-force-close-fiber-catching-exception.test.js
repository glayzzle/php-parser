// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/suspend-in-force-close-fiber-catching-exception.phpt
  it("Suspend in force-closed fiber, catching exception thrown from destructor", function () {
    expect(parser.parseCode("<?php\ntry {\n    (function (): void {\n        $fiber = new Fiber(function (): void {\n            try {\n                Fiber::suspend();\n            } finally {\n                Fiber::suspend();\n            }\n        });\n        $fiber->start();\n    })();\n} catch (FiberError $exception) {\n    echo $exception->getMessage(), \"\\n\";\n}\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
