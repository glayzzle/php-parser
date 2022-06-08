// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/no-switch-force-close-finally.phpt
  it("Cannot start a new fiber in a finally block in a force-closed fiber", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function() {\n    try {\n        Fiber::suspend();\n    } finally {\n        echo \"finally\\n\";\n        $fiber = new Fiber(function() {\n            echo \"not executed\\n\";\n        });\n        $fiber->start();\n    }\n});\n$fiber->start();\n?>")).toMatchSnapshot();
  });
});
