// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/opt/verify_return_type.phpt
  it("Return type check elision", function () {
    expect(parser.parseCode("<?php\nclass Test1 {\n    final public function getIntOrFloat(int $i): int|float {\n        return $i;\n    }\n    final public function getInt(): int {\n        return $this->getIntOrFloat();\n    }\n}\nclass Test2 {\n    public function getInt(): int {\n        return 42;\n    }\n    public function getInt2(): int {\n        return $this->getInt();\n    }\n    public function getIntOrFloat(int $i): int|float {\n        return $i;\n    }\n    public function getInt3(int $i): int {\n        // Should not elide return type check. Test2::getIntOrFloat() returns only int,\n        // but a child method may return int|float.\n        return $this->getIntOrFloat($i);\n    }\n}\nclass Test3 {\n    private function getBool() {\n        return true;\n    }\n    private function getBool2(): bool {\n        return $this->getBool();\n    }\n}\nfunction getClassUnion(): stdClass|FooBar {\n    return new stdClass;\n}\nfunction getClassIntersection(): Traversable&Countable {\n    return new ArrayObject;\n}\n?>")).toMatchSnapshot();
  });
});
