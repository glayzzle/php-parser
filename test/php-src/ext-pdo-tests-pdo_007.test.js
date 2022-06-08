// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_007.phpt
  it("PDO Common: PDO::FETCH_UNIQUE", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->exec('CREATE TABLE test(id CHAR(1) NOT NULL PRIMARY KEY, val VARCHAR(10))');\n$db->exec(\"INSERT INTO test VALUES('A', 'A')\");\n$db->exec(\"INSERT INTO test VALUES('B', 'A')\");\n$db->exec(\"INSERT INTO test VALUES('C', 'C')\");\n$stmt = $db->prepare('SELECT id, val from test');\n$stmt->execute();\nvar_dump($stmt->fetchAll(PDO::FETCH_NUM|PDO::FETCH_UNIQUE));\n$stmt->execute();\nvar_dump($stmt->fetchAll(PDO::FETCH_ASSOC|PDO::FETCH_UNIQUE));\n?>")).toMatchSnapshot();
  });
});
