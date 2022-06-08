// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zend_test/tests/observer_exception_01.phpt
  it("Observer: Basic observability of userland functions with uncaught exceptions", function () {
    expect(parser.parseCode("<?php\nfunction foo()\n{\n    static $callCount = 0;\n    echo 'Call #' . $callCount . PHP_EOL;\n    if (++$callCount == 3) {\n        throw new RuntimeException('Third time is a charm');\n    }\n}\nfoo();\nfoo();\nfoo();\necho 'You should not see this' . PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
