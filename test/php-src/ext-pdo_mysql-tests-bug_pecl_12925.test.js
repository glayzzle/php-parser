// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pdo_mysql/tests/bug_pecl_12925.phpt
  it("PDO MySQL PECL bug #1295 (http://pecl.php.net/bugs/bug.php?id=12925)", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__ . DIRECTORY_SEPARATOR . 'mysql_pdo_test.inc');\n$db = MySQLPDOTest::factory();\nfunction bug_pecl_1295($db) {\n    $db->exec('DROP TABLE IF EXISTS test');\n    $db->exec('CREATE TABLE test(id CHAR(1))');\n    $db->exec(\"INSERT INTO test(id) VALUES ('a')\");\n    $stmt = $db->prepare(\"UPDATE test SET id = 'b'\");\n    $stmt->execute();\n    $stmt = $db->prepare(\"UPDATE test SET id = 'c'\");\n    $stmt->execute();\n    $stmt = $db->prepare('SELECT id FROM test');\n    $stmt->execute();\n    var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));\n    $stmt->closeCursor();\n}\nprintf(\"Emulated...\\n\");\n$db = MySQLPDOTest::factory();\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 1);\nbug_pecl_1295($db);\nprintf(\"Native...\\n\");\n$db = MySQLPDOTest::factory();\n$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, 0);\nbug_pecl_1295($db);\n$db->exec('DROP TABLE IF EXISTS test');\nprint \"done!\";\n?>")).toMatchSnapshot();
  });
});
