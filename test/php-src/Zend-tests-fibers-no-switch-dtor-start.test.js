// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/no-switch-dtor-start.phpt
  it("Cannot start fiber within destructor", function () {
    expect(parser.parseCode("<?php\nreturn new class () {\n    public function __destruct() {\n        $fiber = new Fiber(fn () => null);\n        $fiber->start();\n    }\n};\n?>")).toMatchSnapshot();
  });
});
