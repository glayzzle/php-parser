// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/invocable-class.phpt
  it("Reference to invocable class retained while running", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __invoke() {\n        $GLOBALS['test'] = null;\n        var_dump($this);\n        try {\n            Fiber::suspend();\n        } finally {\n            var_dump($this);\n        }\n    }\n}\n$test = new Test;\n$fiber = new Fiber($test);\n$fiber->start();\n?>")).toMatchSnapshot();
  });
});
