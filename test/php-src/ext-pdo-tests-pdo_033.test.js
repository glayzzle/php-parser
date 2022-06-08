// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_033.phpt
  it("PDO Common: PDO::quote()", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$unquoted = ' !\"#$%&\\'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~';\n$quoted = $db->quote($unquoted);\n$len = strlen($unquoted);\n@$db->exec(\"DROP TABLE test\");\n$db->query(\"CREATE TABLE test (t char($len))\");\n$db->query(\"INSERT INTO test (t) VALUES($quoted)\");\n$stmt = $db->prepare('SELECT * from test');\n$stmt->execute();\nprint_r($stmt->fetchAll(PDO::FETCH_ASSOC));\n$db->exec(\"DROP TABLE test\");\n?>")).toMatchSnapshot();
  });
});
