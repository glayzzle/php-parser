// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/unfinished-fiber-with-nested-try-catch.phpt
  it("Test unfinished fiber with nested try/catch blocks", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): void {\n    try {\n        try {\n            try {\n                echo \"fiber\\n\";\n                echo Fiber::suspend();\n                echo \"after await\\n\";\n            } catch (Throwable $exception) {\n                echo \"inner exit exception caught!\\n\";\n            }\n        } catch (Throwable $exception) {\n            echo \"exit exception caught!\\n\";\n        } finally {\n            echo \"inner finally\\n\";\n        }\n    } finally {\n        echo \"outer finally\\n\";\n    }\n    echo \"unreached\\n\";\n    try {\n        echo Fiber::suspend();\n    } finally {\n        echo \"unreached\\n\";\n    }\n    echo \"end of fiber should not be reached\\n\";\n});\n$fiber->start();\nunset($fiber); // Destroy fiber object, executing finally block.\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
