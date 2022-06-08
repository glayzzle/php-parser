// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_40285.phpt
  it("PDO Common: Bug #40285 (The prepare parser goes into an infinite loop on ': or \":)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->exec('CREATE TABLE test (field1 VARCHAR(32), field2 VARCHAR(32), field3 VARCHAR(32), field4 INT)');\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);\n$s = $db->prepare(\"INSERT INTO test VALUES( ':id', 'name', 'section', 22)\" );\n$s->execute();\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
