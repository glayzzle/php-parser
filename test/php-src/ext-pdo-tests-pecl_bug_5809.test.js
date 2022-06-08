// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pecl_bug_5809.phpt
  it("PDO Common: PECL Bug #5809 (PDOStatement::execute(array()) changes param)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->exec(\"CREATE TABLE test (id int NOT NULL, PRIMARY KEY (id))\");\n$db->exec(\"INSERT INTO test (id) VALUES (1)\");\n$values = array(1);\nvar_dump($values);\n$stmt = $db->prepare('SELECT * FROM test WHERE id = ?');\n$stmt->execute($values);\nvar_dump($values);\n?>")).toMatchSnapshot();
  });
});
