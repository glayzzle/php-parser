// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/unfinished-fiber-with-throw-in-finally.phpt
  it("Test unfinished fiber with suspend in finally", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    try {\n        try {\n            try {\n                echo \"fiber\\n\";\n                echo Fiber::suspend();\n                echo \"after await\\n\";\n            } catch (Throwable $exception) {\n                echo \"inner exit exception caught!\\n\";\n            }\n        } catch (Throwable $exception) {\n            echo \"exit exception caught!\\n\";\n        } finally {\n            echo \"inner finally\\n\";\n            throw new \\Exception(\"finally exception\");\n        }\n    } catch (Exception $exception) {\n        echo $exception->getMessage(), \"\\n\";\n    } finally {\n        echo \"outer finally\\n\";\n    }\n    try {\n        echo Fiber::suspend();\n    } catch (FiberError $exception) {\n        echo $exception->getMessage(), \"\\n\";\n    }\n});\n$fiber->start();\nunset($fiber); // Destroy fiber object, executing finally block.\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
