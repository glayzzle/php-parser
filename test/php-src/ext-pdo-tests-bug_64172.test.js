// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_64172.phpt
  it("PDO Common: Bug #64172 errorInfo is not properly cleaned up", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n@$db->exec(\"DROP TABLE test\");\n$db->exec(\"CREATE TABLE test (x int)\");\n$db->exec(\"INSERT INTO test VALUES (1)\");\necho \"===FAIL===\\n\";\n$db->query('SELECT * FROM bad_table');\necho \"\\n\";\necho \"===TEST===\\n\";\nvar_dump(is_string($db->errorInfo()[0])) . \"\\n\";\nvar_dump(is_int($db->errorInfo()[1])) . \"\\n\";\nvar_dump(is_string($db->errorInfo()[2])) . \"\\n\";\necho \"===GOOD===\\n\";\n$stmt = $db->query('SELECT * FROM test');\n$stmt->fetchAll();\n$stmt = null;\nvar_dump($db->errorInfo());\necho \"===FAIL===\\n\";\n$db->exec(\"INSERT INTO bad_table VALUES(1)\");\necho \"\\n\";\necho \"===TEST===\\n\";\nvar_dump(is_string($db->errorInfo()[0])) . \"\\n\";\nvar_dump(is_int($db->errorInfo()[1])) . \"\\n\";\nvar_dump(is_string($db->errorInfo()[2])) . \"\\n\";\necho \"===GOOD===\\n\";\n$db->exec(\"INSERT INTO test VALUES (2)\");\nvar_dump($db->errorInfo());\n$db->exec(\"DROP TABLE test\");\n?>")).toMatchSnapshot();
  });
});
