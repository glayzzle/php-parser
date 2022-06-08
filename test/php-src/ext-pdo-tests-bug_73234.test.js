// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo/tests/bug_73234.phpt
  it("PDO Common: Bug #73234 (Emulated statements let value dictate parameter type)", function () {
    expect(parser.parseCode("<?php\nif (getenv('REDIR_TEST_DIR') === false) putenv('REDIR_TEST_DIR='.__DIR__ . '/../../pdo/tests/');\nrequire_once getenv('REDIR_TEST_DIR') . 'pdo_test.inc';\n$db = PDOTest::factory();\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, true);\nswitch ($db->getAttribute(PDO::ATTR_DRIVER_NAME)) {\n    case 'dblib':\n        $sql = 'CREATE TABLE test(id INT NULL)';\n        break;\n    default:\n        $sql = 'CREATE TABLE test(id INT)';\n        break;\n}\n$db->exec($sql);\n$stmt = $db->prepare('INSERT INTO test VALUES(:value)');\n$stmt->bindValue(':value', 0, PDO::PARAM_NULL);\n$stmt->execute();\n$stmt->bindValue(':value', null, PDO::PARAM_NULL);\n$stmt->execute();\n$stmt = $db->query('SELECT * FROM test');\nvar_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n?>")).toMatchSnapshot();
  });
});
