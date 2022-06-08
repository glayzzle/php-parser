// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_002.phpt
  it("PDO Common: PDO::FETCH_NUM", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->exec('CREATE TABLE test(id int NOT NULL PRIMARY KEY, val VARCHAR(10))');\n$db->exec(\"INSERT INTO test VALUES(1, 'A')\");\n$db->exec(\"INSERT INTO test VALUES(2, 'B')\");\n$db->exec(\"INSERT INTO test VALUES(3, 'C')\");\n$stmt = $db->prepare('SELECT * from test');\n$stmt->execute();\nvar_dump($stmt->fetchAll(PDO::FETCH_NUM));\n?>")).toMatchSnapshot();
  });
});
