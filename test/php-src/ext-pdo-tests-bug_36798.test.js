// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_36798.phpt
  it("PDO Common: Bug #36798 (Error parsing named parameters with queries containing high-ascii chars)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n@$db->exec(\"SET NAMES 'LATIN1'\"); // needed for PostgreSQL\n$db->exec(\"CREATE TABLE test (id INTEGER)\");\n$db->exec(\"INSERT INTO test (id) VALUES (1)\");\n$stmt = $db->prepare(\"SELECT '�' as test FROM test WHERE id = :id\");\n$stmt->execute(array(\":id\" => 1));\n$row = $stmt->fetch(PDO::FETCH_NUM);\nvar_dump( $row );\n?>")).toMatchSnapshot();
  });
});
