// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/unfinished-fiber-with-suspend-in-finally.phpt
  it("Test unfinished fiber with suspend in finally", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function (): object {\n    try {\n        try {\n            echo \"fiber\\n\";\n            return new \\stdClass;\n        } finally {\n            echo \"inner finally\\n\";\n            Fiber::suspend();\n            echo \"after await\\n\";\n        }\n    } catch (Throwable $exception) {\n        echo \"exit exception caught!\\n\";\n    } finally {\n        echo \"outer finally\\n\";\n    }\n    echo \"end of fiber should not be reached\\n\";\n});\n$fiber->start();\nunset($fiber); // Destroy fiber object, executing finally block.\necho \"done\\n\";\n?>")).toMatchSnapshot();
  });
});
