// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug40236.phpt
  it("Bug #40236 (php -a function allocation eats memory)", function () {
    expect(parser.parseCode("<?php\n$php = getenv('TEST_PHP_EXECUTABLE');\n$cmd = \"\\\"$php\\\" -n -d memory_limit=4M -a \\\"\".__DIR__.\"\\\"/bug40236.inc\";\necho `$cmd`;\n?>")).toMatchSnapshot();
  });
});
