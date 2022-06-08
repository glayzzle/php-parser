// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionFiber_backtrace.phpt
  it("ReflectionFiber backtrace test", function () {
    expect(parser.parseCode("<?php\nfunction suspend_fiber(): void {\n    Fiber::suspend();\n}\nclass Test\n{\n    public function __invoke(string $arg): void\n    {\n        suspend_fiber();\n    }\n}\n$fiber = new Fiber(new Test);\n$fiber->start('test');\n$reflection = new ReflectionFiber($fiber);\nvar_dump($reflection->getTrace(DEBUG_BACKTRACE_PROVIDE_OBJECT));\n?>")).toMatchSnapshot();
  });
});
