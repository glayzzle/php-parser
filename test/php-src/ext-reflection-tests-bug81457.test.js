// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug81457.phpt
  it("Bug #81457: Enum ReflectionMethod->getDeclaringClass() return a ReflectionClass", function () {
    expect(parser.parseCode("<?php\nenum testEnum {\n    case A;\n    case B;\n    \n    public function foo () {}\n}\n$re = new ReflectionEnum(testEnum::class);\n$me = $re->getMethod('foo');\necho $me->getDeclaringClass()::class, \"\\n\";\n$rc = new ReflectionClass(testEnum::class);\n$mc = $re->getMethod('foo');\necho $mc->getDeclaringClass()::class, \"\\n\";\n?>")).toMatchSnapshot();
  });
});
