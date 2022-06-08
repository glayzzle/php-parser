// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/fibers/no-switch-dtor-resume.phpt
  it("Cannot resume fiber within destructor", function () {
    expect(parser.parseCode("<?php\n$fiber = new Fiber(function () {\n    Fiber::suspend();\n});\n$fiber->start();\nreturn new class ($fiber) {\n    private $fiber;\n    public function __construct(Fiber $fiber) {\n        $this->fiber = $fiber;\n    }\n    public function __destruct() {\n        $this->fiber->resume(1);\n    }\n};\n?>")).toMatchSnapshot();
  });
});
