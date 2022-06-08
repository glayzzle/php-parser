// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/pdo_017.phpt
  it("PDO Common: transactions", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\nif ($db->getAttribute(PDO::ATTR_DRIVER_NAME) == 'mysql') {\n    require_once(__DIR__ . DIRECTORY_SEPARATOR . '../../pdo_mysql/tests/mysql_pdo_test.inc');\n    $suf = ' ENGINE=' . MySQLPDOTest::detect_transactional_mysql_engine($db);\n} else {\n    $suf = '';\n}\n$db->exec('CREATE TABLE test(id INT NOT NULL PRIMARY KEY, val VARCHAR(10))'.$suf);\n$db->exec(\"INSERT INTO test VALUES(1, 'A')\");\n$db->exec(\"INSERT INTO test VALUES(2, 'B')\");\n$db->exec(\"INSERT INTO test VALUES(3, 'C')\");\n$delete = $db->prepare('DELETE FROM test');\nfunction countRows($action) {\n    global $db;\n    $select = $db->prepare('SELECT COUNT(*) FROM test');\n    $select->execute();\n    $res = $select->fetchColumn();\n    return \"Counted $res rows after $action.\\n\";\n}\necho countRows('insert');\n$db->beginTransaction();\n$delete->execute();\necho countRows('delete');\n$db->rollBack();\necho countRows('rollback');\n$db->beginTransaction();\n$delete->execute();\necho countRows('delete');\n$db->commit();\necho countRows('commit');\n?>")).toMatchSnapshot();
  });
});
