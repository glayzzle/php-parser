// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_028.phpt
  it("PDO Common: bindValue", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->exec('CREATE TABLE test(id int NOT NULL PRIMARY KEY, val1 VARCHAR(10), val2 VARCHAR(10), val3 VARCHAR(10))');\n$stmt = $db->prepare('INSERT INTO test values (1, ?, ?, ?)');\n$data = array(\"one\", \"two\", \"three\");\nforeach ($data as $i => $v) {\n    $stmt->bindValue($i+1, $v);\n}\n$stmt->execute();\n$stmt = $db->prepare('SELECT * from test');\n$stmt->execute();\nvar_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n?>")).toMatchSnapshot();
  });
});
