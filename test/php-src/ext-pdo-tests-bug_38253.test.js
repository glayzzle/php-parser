// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_38253.phpt
  it("PDO Common: Bug #38253 (PDO produces segfault with default fetch mode)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$pdo = PDOTest::factory();\n$pdo->exec (\"create table test (id integer primary key, n varchar(255))\");\n$pdo->exec (\"INSERT INTO test (id, n) VALUES (1, 'hi')\");\n$pdo->setAttribute (PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_CLASS);\n$stmt = $pdo->prepare (\"SELECT * FROM test\");\n$stmt->execute();\nvar_dump($stmt->fetchAll());\n$pdo->setAttribute (PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_FUNC);\n$stmt = $pdo->prepare (\"SELECT * FROM test\");\n$stmt->execute();\nvar_dump($stmt->fetchAll());\n?>")).toMatchSnapshot();
  });
});
