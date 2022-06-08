// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_basic_02.phpt
  it("Observer: Basic observability of userland methods", function () {
    expect(parser.parseCode("<?php\nclass TestClass\n{\n    private function bar()\n    {\n        echo 'Bar' . PHP_EOL;\n        var_dump(array_sum([1,2,3]));\n    }\n    public function foo()\n    {\n        echo 'Foo' . PHP_EOL;\n        $this->bar();\n    }\n}\n$test = new TestClass();\n$test->foo();\n$test->foo();\n$test->foo();\necho 'DONE' . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
