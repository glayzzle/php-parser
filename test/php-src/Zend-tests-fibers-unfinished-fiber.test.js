// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/unfinished-fiber.phpt
  it("Test unfinished fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    try {\n        echo \"fiber\\n\";\n        echo Fiber::suspend();\n        echo \"after suspend\\n\";\n    } catch (Throwable $exception) {\n        echo \"exit exception caught!\\n\";\n    }\n    echo \"end of fiber should not be reached\\n\";\n});\n$fiber->start();\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
