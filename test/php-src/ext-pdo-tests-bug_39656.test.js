// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_39656.phpt
  it("PDO Common: Bug #39656 (Crash when calling fetch() on a PDO statement object after closeCursor())", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n@$db->exec(\"DROP TABLE test\");\n$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n$db->exec(\"CREATE TABLE test (id INTEGER NOT NULL PRIMARY KEY, usr VARCHAR( 256 ) NOT NULL)\");\n$db->exec(\"INSERT INTO test (id, usr) VALUES (1, 'user')\");\n$stmt = $db->prepare(\"SELECT * FROM test WHERE id = ?\");\n$stmt->bindValue(1, 1, PDO::PARAM_INT );\n$stmt->execute();\n$row = $stmt->fetch();\nvar_dump( $row );\n$stmt->execute();\n$stmt->closeCursor();\n$row = $stmt->fetch(); // this line will crash CLI\nvar_dump( $row );\n@$db->exec(\"DROP TABLE test\");\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
