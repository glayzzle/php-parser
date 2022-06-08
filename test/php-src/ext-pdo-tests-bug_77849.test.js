// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_77849.phpt
  it("PDO Common: Bug #77849 (Unexpected segfault attempting to use cloned PDO object)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.dirname(__FILE__) . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db2 = clone $db;\n?>")).toMatchSnapshot();
  });
});
