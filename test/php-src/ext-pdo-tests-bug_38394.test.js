// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_38394.phpt
  it("PDO Common: Bug #38394 (Prepared statement error stops subsequent statements)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->exec(\"CREATE TABLE test (a INT, b INT, c INT)\");\n$s = $db->prepare(\"INSERT INTO test (a,b,c) VALUES (:a,:b,:c)\");\n$s->execute(array('a' => 1, 'b' => 2, 'c' => 3));\n@$s->execute(array('a' => 5, 'b' => 6, 'c' => 7, 'd' => 8));\n$s->execute(array('a' => 9, 'b' => 10, 'c' => 11));\nvar_dump($db->query(\"SELECT * FROM test\")->fetchAll(PDO::FETCH_ASSOC));\n?>")).toMatchSnapshot();
  });
});
