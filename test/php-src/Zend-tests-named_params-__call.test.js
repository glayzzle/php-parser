// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/__call.phpt
  it("Check that __call() and __callStatic() work with named parameters", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __call(string $method, array $args) {\n        $this->{'_'.$method}(...$args);\n    }\n    public static function __callStatic(string $method, array $args) {\n        (new static)->{'_'.$method}(...$args);\n    }\n    private function _method($a = 'a', $b = 'b') {\n        echo \"a: $a, b: $b\\n\";\n    }\n}\n$obj = new class { public function __toString() { return \"STR\"; } };\n$test = new Test;\n$test->method(a: 'A', b: 'B');\n$test->method(b: 'B');\n$test->method(b: $obj);\nTest::method(a: 'A', b: 'B');\nTest::method(b: 'B');\nTest::method(b: $obj);\n?>")).toMatchSnapshot();
  });
});
