// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug73402.phpt
  it("Bug #73402 (Opcache segfault when using class constant to call a method)", function () {
    expect(parser.parseCode("<?php\nclass Logger {\n    public function info($msg) {\n        echo $msg;\n    }\n}\nclass B\n{\n    const LOG_LEVEL = 'Info';\n    public function test()\n    {\n        $logger = new \\Logger();\n        $logger->{self::LOG_LEVEL}('test');\n    }\n}\n$b = new B;\n$b->test();\n?>")).toMatchSnapshot();
  });
});
