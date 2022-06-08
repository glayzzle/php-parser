// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/no-switch-dtor-suspend.phpt
  it("Cannot suspend fiber within destructor", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function () {\n    $a = new class () {\n        public function __destruct() {\n            Fiber::suspend();\n        }\n    };\n});\n$fiber->start();\n?>")).toMatchSnapshot();
  });
});
