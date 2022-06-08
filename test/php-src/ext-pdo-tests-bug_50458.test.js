// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_50458.phpt
  it("PDO Common: Bug #50458 (PDO::FETCH_FUNC fails with Closures)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->exec(\"CREATE TABLE test (a VARCHAR(10))\");\n$db->exec(\"INSERT INTO test (a) VALUES ('xyz')\");\n$res = $db->query(\"SELECT a FROM test\");\nvar_dump($res->fetchAll(PDO::FETCH_FUNC, function($a) { return strtoupper($a); }));\n?>")).toMatchSnapshot();
  });
});
