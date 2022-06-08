// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug55247.phpt
  it("Request #55247 (Parser problem with static calls using string method name)", function () {
    expect(parser.parseCode("<?php\nclass Test{\n    public static function __callStatic($method, $arguments)\n    {\n        echo $method . PHP_EOL;\n    }\n    public function __call($method, $arguments)\n    {\n        echo $method . PHP_EOL;\n    }\n}\n$method = 'method';\n$test = new Test();\n$test->method();\n$test->$method();\n$test->{'method'}();\nTest::method();\nTest::$method();\nTest::{'method'}();\n?>")).toMatchSnapshot();
  });
});
