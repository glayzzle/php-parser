// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_backtrace_01.phpt
  it("Observer: Show backtrace on init", function () {
    expect(parser.parseCode("<?php\nclass TestClass\n{\n    private function bar($number)\n    {\n        return $number + 2;\n    }\n    public function foo()\n    {\n        return array_map(function ($value) {\n            return $this->bar($value);\n        }, [40, 1335]);\n    }\n}\nfunction gen()\n{\n    $test = new TestClass();\n    yield $test->foo();\n}\nfunction foo()\n{\n    return gen()->current();\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
