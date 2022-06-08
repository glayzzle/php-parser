// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_39398.phpt
  it("PDO Common: Bug #39398 (Booleans are not automatically translated to integers)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->exec(\"CREATE TABLE test (test INT)\");\n$boolean = 1;\n$stmt = $db->prepare('INSERT INTO test VALUES (:boolean)');\n$stmt->bindValue(':boolean', isset($boolean), PDO::PARAM_INT);\n$stmt->execute();\nvar_dump($db->query(\"SELECT * FROM test\")->fetchAll(PDO::FETCH_ASSOC));\n?>")).toMatchSnapshot();
  });
});
